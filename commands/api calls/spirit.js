const { Command } = require('discord.js-commando')
const axios = require('axios')
const moment = require('moment')

const config = require('$root/config.json')

module.exports = class NAME extends Command {
  constructor(client) {
    super(client, {
      name: 'spirit',
      group: 'api calls',
      aliases: ['spirit'],
      memberName: 'spirit',
      description: 'Get info about spirit and look up the images it has taken',
      examples: [
        `${config.prefix}spirit`,
        `${config.prefix}spirit <'info' | 'image'> <sol> <page number>`,
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

  run(message, { type, sol, page_number }) {
    if (type === 'info') {
      message.embed({
        title: 'Mars Exploration Rover Spirit',
        url:
          'https://mars.nasa.gov/mars-exploration/missions/mars-exploration-rovers/',
        description:
          '**API data available for this mission** Do `=spirit image (sol) (page number)`\nLaunched on June 10, 2003\nLaunched from Cape Canaveral Air Force Station, Florida\nLanded on January 4, 2004\nLanded at Gusev Crater\nMission Complete, ended on March 22, 2010\nMore Info at:\nhttps://mars.nasa.gov/mars-exploration/missions/mars-exploration-rovers/',
        color: this.client.config.embed_color,
        timestamp: new Date(),
        image: {
          url:
            'https://mars.nasa.gov/resources/3904/artists-concept-of-rover-on-mars/',
        },
        footer: {
          text: 'Credit: NASA/JPL-Caltech',
          icon_url: '',
        },
      })
      return
    }
    if (type === 'image') {
      if (!sol || !page_number) {
        message.reply(
          'Please choose a sol and or page number to look for\n`=spirit image <sol> <page number>`',
        )
      } else {
        axios
          .get(
            `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=${sol}&api_key=${config.api_key}`,
          )
          .then((res) => {
            if (!res.data.photos[page_number - 1]) {
              message.reply('No results found')
              return
            }
            let img = res.data.photos[page_number - 1].img_src
            let data = res.data.photos[page_number - 1]
            let cam = res.data.photos[page_number - 1].camera
            let rover = res.data.photos[page_number - 1].rover

            message.channel.send({
              embed: {
                title: 'Photo from ' + rover.name + "'s from " + cam.full_name,
                url: img,
                description: `**Rover Name:** ${rover.name}\n**Mission Status:** ${rover.status}\n**Sol:** ${data.sol}\n**Date:** ${data.earth_date}\n**Camera Name:** ${cam.full_name} (${cam.name})\n**Photo ID:** ${data.id}`,
                color: this.client.config.embed_color,
                timestamp: new Date(),
                image: {
                  url: img,
                },
                footer: {
                  text: 'Photo Credit: NASA/JPL-Caltech',
                  icon_url: '',
                },
              },
            })
          })
          .catch(function (error) {
            console.log(error.stack)
            message.reply(
              `An API error has occurred: ${error}\nFor help solving this problem please join are support server: ${config.invite}`,
            )
          })
      }
    }
  }
}
