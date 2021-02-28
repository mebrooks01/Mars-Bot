const { Command } = require('discord.js-commando')
const axios = require('axios')
const moment = require('moment')

const config = require('$root/config.json')
const mission = require('$root/mission.json')

module.exports = class Perseverance extends Command {
  constructor(client) {
    super(client, {
      name: 'manifest',
      group: 'search',
      aliases: ['mission', 'missions'],
      memberName: 'manifest',
      description: '',
      examples: [`${config.prefix}`],
      clientPermissions: ['EMBED_LINKS'],
      throttling: config.command_throttling.api,
    })
  }

  run(message, {}) {}
}
