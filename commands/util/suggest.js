const { Command } = require('discord.js-commando')
const config = require('$root/config.json')
const mission = require('$root/mission.json')

module.exports = class NAME extends Command {
  constructor(client) {
    super(client, {
      name: 'suggest',
      group: 'util',
      aliases: ['suggestions', 'suggestion', 'ideas', 'idea'],
      memberName: 'suggest',
      description: 'Give us a suggestion',
      clientPermissions: ['EMBED_LINKS'],
      throttling: config.command_throttling.utilities
    })
  }
  run(message) {
    this.client.cmdCount.run(this.name, this.group, message)
    let info = mission.other.suggest

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
