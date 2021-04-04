const { Command } = require('discord.js-commando')
const prettyMilliseconds = require('pretty-ms')
const config = require('$root/config.json')
const count = require('$util/count')
errCount = 0
delay = 1000
let i

module.exports = class Test extends Command {
  constructor(client) {
    super(client, {
      name: 'push-update',
      group: 'util',
      memberName: 'push-update',
      description: 'Notify Of new Features/Versions',
      ownerOnly: true,
      args: [
        {
          key: 'ver',
          prompt: 'Please Provide The New Version',
          type: 'string'
        },
        {
          key: 'info',
          prompt: 'Please Provide the update info',
          type: 'string'
        }
      ]
    })
  }

  async run(message, { ver, info }) {
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }

    count.cmdCount++
    let guilds = this.client.guilds.cache.array()
    let time = prettyMilliseconds(this.client.guilds.cache.size * delay)
    let embedInfo = {
      title: 'New Mars Bot Update!!',
      description: info,
      fields: [{ name: `Version`, value: `\`${ver}\`` }],
      color: config.embed_color,
      timestamp: new Date(),
      thumbnail: { url: config.pfp }
    }

    message.reply(
      `Notifying ${this.client.guilds.cache.size} Servers of a new update\nVersion: \`${ver}\`\nThis may take some time (${time})`
    )
    message.embed(embedInfo)

    for (i = 0; i < guilds.length; i++) {
      try {
        const channel = guilds[i].channels.cache
          .sort(function (a, b) {
            return a.rawPosition - b.rawPosition
          })
          .find(
            channel =>
              channel.type === 'text' &&
              channel.permissionsFor(guilds[i].me).has('SEND_MESSAGES') &&
              channel.permissionsFor(guilds[i].roles.everyone).has('SEND_MESSAGES')
          )

        await channel.send({ embed: embedInfo })
      } catch (error) {
        errCount++
      }

      await sleep(delay)
    }

    message.reply(`Done!\nUpdated \`${this.client.guilds.cache.size - errCount}/${this.client.guilds.cache.size}\``)
  }
}
