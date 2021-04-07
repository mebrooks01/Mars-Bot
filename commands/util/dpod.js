const { Command } = require('discord.js-commando')
const config = require('$root/config.json')
const mission = require('$root/mission.json')
const count = require('$util/count')
const dpod = require('$root/dpod.json')
const fs = require('fs')

module.exports = class Invite extends Command {
  constructor(client) {
    super(client, {
      name: 'dpod',
      group: 'util',
      memberName: 'dpod',
      description: 'Configure your servers "Daily Astronomy Picture of the Day"',
      clientPermissions: ['EMBED_LINKS'],
      userPermissions: ['MANAGE_GUILD', 'MANAGE_CHANNELS'],
      throttling: config.command_throttling.api,
      guildOnly: true,
      args: [
        {
          key: 'action',
          prompt: 'Choose what you would like to do',
          type: 'string',
          oneOf: ['info', 'reset', 'set'],
          default: 'info'
        },
        {
          key: 'channel',
          prompt: 'Which command would you like to view the help for?',
          type: 'channel',
          default: ''
        }
      ]
    })
  }

  run(message, { channel, action }) {
    count.cmdCount++
    let guildChannel = dpod.find(channel => channel.guild === message.guild.id)
    let dpodInfo = dpod

    function msg(description) {
      message.embed({
        title: `${message.guild.name}'s DPOD Info`,
        description,
        color: config.embed_color,
        timestamp: new Date(),
        thumbnail: { url: config.pfp },
        footer: { text: mission.credit }
      })
    }

    if (action == 'set') {
      if (!channel) {
        message.reply('Please provide a valid channel')
        return
      }

      if (!guildChannel) {
        dpodInfo.push({ guild: message.guild.id, channel: channel.id })

        let json = JSON.stringify(dpodInfo)
        fs.writeFile('dpod.json', json, function (err) {
          if (err) throw err
        })

        return msg(`Set Your DPOD Channel to <#${channel.id}>\nTo reset it use: ${message.anyUsage('dpod reset')}`)
      }

      msg(
        `Your already have a DPOD\nThe Current DPOD Channel is <#${
          guildChannel.channel
        }>\nTo reset it use:\n${message.anyUsage('dpod reset')}`
      )
    }

    if (action == 'reset') {
      if (guildChannel) {
        let dpodInfoFiltered = dpodInfo.filter(function (array) {
          return array.guild != message.guild.id
        })

        let json = JSON.stringify(dpodInfoFiltered)
        fs.writeFile('dpod.json', json, function (err) {
          if (err) throw err
        })

        msg(`The DPOD Channel has been reset\nTo set a new one use: ${message.anyUsage('dpod set <channel>')}`)
        return
      }

      msg(`There is currently no set DPOD channel\nTo set one use: ${message.anyUsage('dpod set <channel>')}`)
    }

    if (action == 'info') {
      if (guildChannel) {
        msg(
          `The Current DPOD Channel is <#${guildChannel.channel}>\nTo reset it use:\n${message.anyUsage(
            'dpod reset'
          )}\nDPOD runs every day at [12PM UTC± 0](https://www.google.com/search?q=12pm+utc+time+zone+converter)`
        )

        return
      }

      msg(
        `There is currently no set DPOD channel to set one use:\n${message.anyUsage(
          'dpod set <Channel>'
        )}\nDPOD runs every day at [12PM UTC± 0](https://www.google.com/search?q=12pm+utc+time+zone+converter)`
      )
    }
  }
}
