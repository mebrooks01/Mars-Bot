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
    if (type === 'last') {
      message.reply('Currently unavailable :pensive:')
      return
    }
    message.embed({
      title: 'Mars 2020 Perseverance Rover',
      url: 'hhttps://mars.nasa.gov/mars2020/',
      description:
        '**API data available for this mission** Do `=opportunity image (sol) (page number)`\nLaunched on July 30, 2020\nLaunched from Cape Canaveral Air Force Station, Florida\nLanded on Feb. 18, 2021\nLanded at Jezero Crater, Mars\nMission Ongoing\nMore Info at:\nhttps://mars.nasa.gov/mars2020/',
      color: this.client.config.embed_color,
      timestamp: new Date(),
      image: {
        url:
          'https://mars.nasa.gov/system/resources/detail_files/25118_PIA23962-16.jpg',
      },
      footer: {
        text: 'Credit: NASA/JPL-Caltech',
        icon_url: '',
      },
    })
    return
  }
}
