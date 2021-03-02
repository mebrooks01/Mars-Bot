const { Command } = require('discord.js-commando')
const axios = require('axios')
const config = require('$root/config.json')
const mission = require('$root/mission.json')

module.exports = class NAME extends Command {
  constructor(client) {
    super(client, {
      name: 'spirit',
      group: 'rovers',
      memberName: 'spirit',
      description: 'Get info about spirit and look up the images it has taken',
      examples: [
        `${config.prefix}spirit`,
        `${config.prefix}spirit <'info' | 'image'> <sol> <result number>`,
      ],
      clientPermissions: ['EMBED_LINKS'],
      throttling: config.command_throttling.api,
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
          key: 'result_number',
          prompt: 'Please choose a result number to look for',
          type: 'integer',
          default: '',
        },
      ],
    })
  }

  run(message, { type, sol, result_number }) {
    let info = mission.rover.spirit

    if (type === 'image') {
      if (!sol)
        return message.reply(
          'Please choose a sol to look for\n`=spirit image <sol> <result number>`',
        )
      if (!result_number)
        return message.reply(
          'Please choose a result number to look for\n`=spirit image <sol> <result number>`',
        )

      axios
        .get(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=${sol}&api_key=${config.api_key}`,
        )
        .then((res) => {
          if (!res.data.photos[result_number - 1])
            return message.reply('No results found')

          let img = res.data.photos[result_number - 1].img_src
          let data = res.data.photos[result_number - 1]
          let cam = res.data.photos[result_number - 1].camera
          let rover = res.data.photos[result_number - 1].rover

          message.channel.send({
            embed: {
              title: `Photo from ${rover.name}'s from ${cam.full_name}`,
              url: img,
              description: `**Rover Name:** ${rover.name}\n**Mission Status:** ${rover.status}\n**Sol:** ${data.sol}\n**Date:** ${data.earth_date}\n**Camera Name:** ${cam.full_name} (${cam.name})\n**Photo ID:** ${data.id}`,
              color: this.client.config.embed_color,
              timestamp: new Date(),
              image: { url: img },
              footer: { text: mission.credit },
            },
          })
        })
        .catch(function (error) {
          console.log(error.stack)
          message.reply(
            `An API error has occurred: ${error}\nFor help solving this problem please join are support server: ${config.invite}`,
          )
        })
      return
    }

    message.embed({
      title: info.title,
      url: info.url,
      description:
        '**API data available for this mission** Do `=spirit image <sol> <result number>`\n' +
        info.info,
      color: config.embed_color,
      timestamp: new Date(),
      image: { url: info.img },
      footer: { text: mission.credit },
    })
  }
}
