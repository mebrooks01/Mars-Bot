const { Command } = require('discord.js-commando')
const axios = require('axios')
const moment = require('moment')
const config = require('$root/config.json')

module.exports = class APOD extends Command {
  constructor(client) {
    super(client, {
      name: 'apod',
      group: 'search',
      memberName: 'apod',
      description:
        'Every day NASA publishes an "Astronomy Picture of the Day" use this command to see todays',
      examples: [`${config.prefix}apod`],
      clientPermissions: ['EMBED_LINKS'],
      throttling: config.command_throttling.api,
    })
  }

  run(message) {
    let apod_date = moment().utcOffset(-12).format('YYYY-M-D')

    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=${apod_date}&api_key=${config.api_key}`,
      )
      .then((res) => {
        message.embed({
          title: res.data.title,
          url: res.data.url,
          description: res.data.explanation,
          color: config.embed_color,
          timestamp: new Date(),
          image: { url: res.data.url },
          footer: { text: `Photo Credit: ${res.data.copyright}` },
        })
      })
      .catch(function (error) {
        message.reply(
          `An API error has occurred: ${error}\nFor help solving this problem please join are support server: ${config.invite}`,
        )
      })
  }
}
