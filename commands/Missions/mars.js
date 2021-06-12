const { Command } = require('discord.js-commando')
const config = require('$root/config.json')
const mission = require('$root/mission.json')

module.exports = class Mars extends Command {
  constructor(client) {
    super(client, {
      name: 'mars',
      group: 'missions',
      memberName: 'mars',
      description: 'Find Information about the Red Planet',
      clientPermissions: ['EMBED_LINKS'],
      throttling: config.command_throttling.utilities
    })
  }

  run(message) {
    this.client.cmdCount.run(this.name, this.group, message)
    let info = mission.other.mars

    message.embed({
      title: info.title,
      url: info.url,
      description: info.info,
      color: config.embed_color,
      timestamp: new Date(),
      image: { url: info.img },
      footer: { text: mission.credit }
    })
  }
}
