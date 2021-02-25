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
        `${config.prefix}perseverance <'info' | 'image'> <sol> <result number>`,
      ],
      clientPermissions: ['EMBED_LINKS'],
      throttling: client.config.command_throttling.api,
      args: [
        {
          key: 'type',
          prompt: 'Please specify what ',
          type: 'string',
          oneOf: ['info', `image`, `manifest`],
          default: 'info',
        },
        {
          key: 'sol',
          prompt: 'Please choose a sol to look for',
          type: 'integer',
          default: '',
        },
        {
          key: 'result_number',
          prompt: 'Please choose a result number to look for',
          type: 'integer',
          default: '',
        },
      ],
    })
  }

  run(message, { type, sol, result_number }) {
    if (type === 'info') {
      axios
        .get(
          `https://api.nasa.gov/mars-photos/api/v1/manifests/perseverance?api_key=${config.api_key}`,
        )
        .then((res) => {})
        .catch(function (error) {
          console.log(error.stack)
          message.reply(
            `An API error has occurred: ${error}\nFor help solving this problem please join are support server: ${config.invite}`,
          )
        })
      return
    }
  }
}
