const { Command } = require('discord.js-commando')
const moment = require('moment')
const config = require('$root/config.json')
module.exports = class MarsExpress extends Command {
  constructor(client) {
    super(client, {
      name: 'mars-express',
      group: 'missions',
      aliases: ['mars express'],
      memberName: 'mars-express',
      description: 'Find Information on the mars express mission',
      examples: [`${config.prefix}mars-express`],
      clientPermissions: ['EMBED_LINKS'],
      throttling: config.command_throttling.api,
    })
  }
  run(message) {
    message.embed({
      title: 'Mars Express',
      url: 'https://mars.nasa.gov/mars-exploration/missions/express/',
      description:
        'Launched on June 2, 2003\nLaunched from Baikonur Cosmodrome, Russia\nOrbit insertion on December 25, 2003\nMission ongoing\nMore info at:\nhttps://mars.nasa.gov/mars-exploration/missions/express/',
      color: this.client.config.embed_color,
      timestamp: new Date(),
      image: {
        url:
          'https://mars.nasa.gov/system/content_pages/main_images/369_mars-express.jpg',
      },
      footer: {
        text: 'Photo Credit: NASA/JPL-Caltech',
        icon_url: '',
      },
    })
  }
}
