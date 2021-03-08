const { Command } = require('discord.js-commando')
const config = require('$root/config.json')
const mission = require('$root/mission.json')

module.exports = class Bug extends Command {
  constructor(client) {
    super(client, {
      name: 'bug',
      group: 'utilities',
      aliases: ['report', 'bugs'],
      memberName: 'bug',
      description: 'Report any and all bugs here',
      examples: [`${config.prefix}bug`],
      clientPermissions: ['EMBED_LINKS'],
      throttling: config.command_throttling.utilities,
    })
  }

  run(message) {
    let info = mission.other.bug

    message.embed({
      title: info.title,
      url: info.url,
      description: info.info + config.invite,
      color: config.embed_color,
      timestamp: new Date(),
      thumbnail: { url: config.pfp },
      footer: { text: mission.credit },
    })
  }
}
