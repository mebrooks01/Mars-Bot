const { Command } = require('discord.js-commando')
const axios = require('axios')
const config = require('$root/config.json')
const mission = require('$root/mission.json')

module.exports = class Image extends Command {
  constructor(client) {
    super(client, {
      name: 'image',
      group: 'search',
      aliases: ['random'],
      memberName: 'manifest',
      description: 'Coming soon',
      examples: [`${config.prefix}`],
      clientPermissions: ['EMBED_LINKS'],
      throttling: config.command_throttling.api,
    })
  }

  run(message, {}) {
    message.reply('Coming Soon:tm:')
  }
}
