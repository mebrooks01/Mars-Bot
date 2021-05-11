const { Command } = require('discord.js-commando')
const config = require('$root/config.json')
const mission = require('$root/mission.json')
const count = require('$util/count')

module.exports = class MRO extends Command {
  constructor(client) {
    super(client, {
      name: 'mro',
      group: 'missions',
      memberName: 'mro',
      description: 'Find Information on the Mars Reconnaissance Orbiter (MRO) mission',
      clientPermissions: ['EMBED_LINKS'],
      throttling: config.command_throttling.missions
    })
  }

  run(message) {
    count.cmdCount++
    let info = mission.missions.mro

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
