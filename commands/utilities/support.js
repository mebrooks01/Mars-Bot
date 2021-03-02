const { Command } = require('discord.js-commando')
const moment = require('moment')
const config = require('$root/config.json')
module.exports = class Support extends Command {
  constructor(client) {
    super(client, {
      name: 'support',
      group: 'utilities',
      aliases: ['support'],
      memberName: 'support',
      description: 'Get Help',
      examples: [`${config.prefix}support`],
      clientPermissions: ['EMBED_LINKS'],
      throttling: config.command_throttling.utilities,
    })
  }
  run(message) {
    let info = mission.other.support

    message.embed({
      title: info.title,
      url: config.invite,
      description: info.info + config.invite,
      color: config.embed_color,
      timestamp: new Date(),
      thumbnail: { url: client.config.pfp },
      footer: { text: mission.credit },
    })
  }
}
