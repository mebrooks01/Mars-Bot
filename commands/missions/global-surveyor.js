const { Command } = require('discord.js-commando')
const config = require('$root/config.json')
const count = require('$util/count')

module.exports = class globalsurveyor extends Command {
  constructor(client) {
    super(client, {
      name: 'global-surveyor',
      group: 'missions',
      aliases: ['global surveyor'],
      memberName: 'global-surveyor',
      description: 'Find Information on the global surveyor mission',
      examples: [`${config.prefix}global-surveyor`],
      clientPermissions: ['EMBED_LINKS'],
      throttling: client.config.command_throttling.missions,
    })
  }

  run(message) {
    count.cmdCount++
    let info = mission.missions.global_surveyor

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
