const { Command } = require('discord.js-commando')
const axios = require('axios')
const moment = require('moment')

const config = require('$root/config.json')

module.exports = class Perseverance extends Command {
  constructor(client) {
    super(client, {
      name: 'perseverance',
      group: 'api calls',
      aliases: ['perseverance'],
      memberName: 'perseverance',
      description:
        'Get info about perseverance and look up the images it has taken',
      examples: [
        `${config.prefix}perseverance`,
        `${config.prefix}perseverance <'info' | 'image'> <sol> <page number>`,
      ],
      clientPermissions: ['EMBED_LINKS'],
      throttling: client.config.command_throttling.api,
      args: [
        {
          key: 'type',
          prompt: 'Please choose if you are looking for an image or info',
          type: 'string',
          oneOf: ['info', `image`],
          default: 'info',
        },
        {
          key: 'sol',
          prompt: 'Please choose a sol to look for',
          type: 'integer',
          default: '',
        },
        {
          key: 'page_number',
          prompt: 'Please choose a page number to look for',
          type: 'integer',
          default: '',
        },
      ],
    })
  }

  run(message) {
    message.reply(
      'Currently Unavailable\nAs soon as Perseverance lands I will have info',
    )
  }
}
