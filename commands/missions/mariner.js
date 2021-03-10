const { Command } = require('discord.js-commando')
const config = require('$root/config.json')
const mission = require('$root/mission.json')
const count = require('$util/count')

module.exports = class mariner extends Command {
  constructor(client) {
    super(client, {
      name: 'mariner',
      group: 'missions',
      aliases: ['mariner'],
      memberName: 'mariner',
      description: 'Find Information on the Mariner 3-9 missions',
      examples: [`${config.prefix}mariner`],
      clientPermissions: ['EMBED_LINKS'],
      throttling: client.config.command_throttling.missions,
    })
  }

  run(message) {
    count.cmdCount++
    let info = mission.missions.mariner

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
