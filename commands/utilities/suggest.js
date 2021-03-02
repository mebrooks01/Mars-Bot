const { Command } = require('discord.js-commando')
const moment = require('moment')
const config = require('$root/config.json')
module.exports = class NAME extends Command {
  constructor(client) {
    super(client, {
      name: 'suggest',
      group: 'utilities',
      aliases: ['suggestions', 'suggestion', 'ideas', 'idea'],
      memberName: 'suggest',
      description: 'Give us a suggestion',
      examples: [`${config.prefix}suggest`],
      clientPermissions: ['EMBED_LINKS'],
      throttling: config.command_throttling.utilities,
    })
  }
  run(message) {
    let info = mission.other.suggest

    message.embed({
      title: info.title,
      url: info.url,
      description: info.info + config.invite,
      color: config.embed_color,
      timestamp: new Date(),
      thumbnail: { url: client.config.pfp },
      footer: { text: mission.credit },
    })
  }
}
