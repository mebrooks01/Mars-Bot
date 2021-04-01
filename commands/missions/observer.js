const { Command } = require('discord.js-commando')
const config = require('$root/config.json')
const mission = require('$root/mission.json')
const count = require('$util/count')

module.exports = class Observer extends Command {
  constructor(client) {
    super(client, {
      name: 'observer',
      group: 'missions',
      memberName: 'observer',
      description: 'Find Information on the Observer mission',
      clientPermissions: ['EMBED_LINKS'],
      throttling: client.config.command_throttling.missions,
    })
  }

  run(message) {
    count.cmdCount++
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
