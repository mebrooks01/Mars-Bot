const { Command } = require('discord.js-commando')
const axios = require('axios')
const config = require('$root/config.json')
const count = require('$util/count')
let img = ''

module.exports = class APOD extends Command {
  constructor(client) {
    super(client, {
      name: 'apod',
      group: 'search',
      memberName: 'apod',
      description: 'Every day NASA publishes an "Astronomy Picture of the Day" use this command to see todays',
      clientPermissions: ['EMBED_LINKS'],
      throttling: config.command_throttling.api
    })
  }

  run(message) {
    count.cmdCount++

    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${config.api_key}`)
      .then(res => {
        if (res.data.hdurl) {
          img = res.data.hdurl
        } else {
          img = res.data.url
        }

        message.embed({
          title: res.data.title,
          url: img,
          description: res.data.explanation,
          color: config.embed_color,
          image: { url: img },
          timestamp: res.data.date,
          footer: { text: `Photo Credit: ${res.data.copyright}` }
        })
      })
      .catch(function (error) {
        message.reply(
          `An API error has occurred: ${error}\nFor help solving this problem please join are support server: ${config.invite}`
        )
      })
  }
}
