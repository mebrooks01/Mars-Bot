const { Command } = require('discord.js-commando')
const moment = require('moment')
const config = require('$root/config.json')
module.exports = class ExoMars extends Command {
  constructor(client) {
    super(client, {
      name: 'exomars',
      group: 'missions',
      aliases: ['exo mars', 'exo-mars'],
      memberName: 'exomars',
      description: 'Find Information on the exo mars mission',
      examples: [`${config.prefix}exomars`],
      clientPermissions: [
        'SEND_MESSAGES',
        'EMBED_LINKS',
        'ATTACH_FILES',
        'READ_MESSAGE_HISTORY',
      ],
      guildOnly: false,
      ownerOnly: false,
      throttling: {
        usages: 2,
        duration: 1,
      },
    })
  }
  run(message) {
    message.embed({
      title: 'ExoMars 2016 Mission',
      url:
        'https://mars.nasa.gov/mars-exploration/missions/esa-exomars-2016-tgo/',
      description:
        'Launched on March 14, 2016\nLaunched from Baikonur Cosmodrome, Russia\n**Trance Gas Orbiter**\nOrbit Insertion on October 19, 2016\nMission Ongoing\n**Schiaparelli Landing Demo**\nReleased from orbiter on October 16, 2016\nMission Failed, lost on descent\nMore info at:\nhttps://mars.nasa.gov/mars-exploration/missions/esa-exomars-2016-tgo/',
      color: this.client.config.embed_color,
      timestamp: new Date(),
      image: {
        url:
          'https://mars.nasa.gov/system/content_pages/main_images/367_esa-exomars-2016-tgo.jpg',
      },
      footer: {
        text: 'Photo Credit: NASA/JPL-Caltech',
        icon_url: '',
      },
    })
  }
}
