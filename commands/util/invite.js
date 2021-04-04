const { Command } = require('discord.js-commando')
const config = require('$root/config.json')
const mission = require('$root/mission.json')
const count = require('$util/count')

module.exports = class Invite extends Command {
  constructor(client) {
    super(client, {
      name: 'invite',
      group: 'util',
      aliases: ['join', 'add', 'invites'],
      memberName: 'invite',
      description: 'Invite me to your server',
      clientPermissions: ['EMBED_LINKS'],
      throttling: config.command_throttling.utilities
    })
  }

  run(message) {
    count.cmdCount++
    let info = mission.other.invite

    message.embed({
      title: info.title,
      url: info.url,
      description: info.info,
      color: config.embed_color,
      timestamp: new Date(),
      thumbnail: { url: config.pfp },
      footer: { text: mission.credit }
    })
  }
}
