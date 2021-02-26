const { Command } = require('discord.js-commando')
const config = require('$root/config.json')
const mission = require('$root/missions.json')

module.exports = class ClimateOrbiter extends Command {
  constructor(client) {
    super(client, {
      name: 'climate-orbiter',
      group: 'missions',
      aliases: 'climate orbiter',
      memberName: 'climateorbiter',
      description: 'Find Information about the climate orbiter mission',
      examples: `${config.prefix}climateorbiter`,
      clientPermissions: 'EMBED_LINKS',
      throttling: client.config.command_throttling.missions,
    })
  }

  run(message) {
    let info = mission.missions.climate_orbiter

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
