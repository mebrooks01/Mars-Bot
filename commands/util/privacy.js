const { Command } = require('discord.js-commando')
const config = require('$root/config.json')
const mission = require('$root/mission.json')
const count = require('$util/count')

module.exports = class Privacy extends Command {
  constructor(client) {
    super(client, {
      name: 'privacy',
      group: 'util',
      aliases: ['data'],
      memberName: 'privacy',
      description: 'Report any and all bugs here',
      clientPermissions: ['EMBED_LINKS'],
      throttling: config.command_throttling.utilities
    })
  }

  run(message) {
    count.cmdRun(this.name, this.group, message)

    let info = mission.other.privacy

    message.embed({
      title: info.title,
      url: info.url,
      description: info.info + config.invite,
      color: config.embed_color,
      timestamp: new Date(),
      thumbnail: { url: config.pfp },
      footer: { text: mission.credit }
    })
  }
}
