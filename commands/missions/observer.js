const { Command } = require('discord.js-commando')
const config = require('$root/config.json')
const mission = require('$root/mission.json')

module.exports = class Observer extends Command {
  constructor(client) {
    super(client, {
      name: 'observer',
      group: 'missions',
      memberName: 'observer',
      description: 'Find Information on the Observer mission',
      examples: [`${config.prefix}observer`],
      clientPermissions: ['EMBED_LINKS'],
      throttling: client.config.command_throttling.missions,
    })
  }

  run(message) {
    let info = mission.missions.observer

    message.embed({
      title: info.title,
      url: info.url,
      description: info.info,
      color: config.embed_color,
      timestamp: new Date(),
      image: { url: info.img },
      footer: { text: mission.credit },
    })
  }
}
