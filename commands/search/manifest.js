const { Command } = require('discord.js-commando')
const axios = require('axios')
const config = require('$root/config.json')
const mission = require('$root/mission.json')
const count = require('$util/count')

module.exports = class Manifest extends Command {
  constructor(client) {
    super(client, {
      name: 'manifest',
      group: 'search',
      aliases: ['mission', 'missions'],
      memberName: 'manifest',
      description: 'Coming soon',
      examples: [`${config.prefix}`],
      clientPermissions: ['EMBED_LINKS'],
      throttling: config.command_throttling.api,
    })
  }

  run(message, {}) {
    count.cmdCount++
  }
}
