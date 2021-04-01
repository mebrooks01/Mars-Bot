const { Command } = require('discord.js-commando')
const config = require('$root/config.json')
const mission = require('$root/mission.json')
const count = require('$util/count')

module.exports = class Maven extends Command {
  constructor(client) {
    super(client, {
      name: 'maven',
      group: 'missions',
      memberName: 'maven',
      description:
        'Find Information on the Mars Atmospheric and Volatile EvolutioN (Maven) mission',
      clientPermissions: ['EMBED_LINKS'],
      throttling: client.config.command_throttling.missions,
    })
  }

  run(message) {
    count.cmdCount++
    let info = mission.missions.maven

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
