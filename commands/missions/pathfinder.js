const { Command } = require('discord.js-commando')
const config = require('$root/config.json')
const mission = require('$root/mission.json')

module.exports = class Pathfinder extends Command {
  constructor(client) {
    super(client, {
      name: 'pathfinder',
      group: 'missions',
      memberName: 'pathfinder',
      description: 'Find Information on the pathfinder mission',
      examples: [`${config.prefix}pathfinder`],
      clientPermissions: ['EMBED_LINKS'],
      throttling: client.config.command_throttling.missions,
    })
  }

  run(message) {
    let info = mission.missions.pathfinder

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
