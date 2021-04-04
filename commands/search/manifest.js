const { Command } = require('discord.js-commando')
const axios = require('axios')
const config = require('$root/config.json')
const mission = require('$root/mission.json')
const count = require('$util/count')

module.exports = class Manifest extends Command {
  constructor(client) {
    super(client, {
      name: 'manifest',
      group: 'search',
      aliases: ['mission', 'missions'],
      memberName: 'manifest',
      description: 'Get detailed Info on rovers and there stats',
      format: `<'curiosity' | 'opportunity' | 'perseverance' | 'spirit'> [sol]`,
      clientPermissions: ['EMBED_LINKS'],
      throttling: config.command_throttling.api,
      args: [
        {
          key: 'rover',
          prompt: 'Please select the rover you would like to search for',
          type: 'string',
          oneOf: ['curiosity', 'opportunity', 'perseverance', 'spirit']
        },
        {
          key: 'sol',
          prompt: 'Please provide a sol to get more info about',
          type: 'string',
          default: ''
        }
      ]
    })
  }

  run(message, { rover, sol }) {
    count.cmdCount++

    axios
      .get(`https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=${config.api_key}`)
      .then(res => {
        let manifest = res.data.photo_manifest

        if (sol <= '0' || sol >= manifest.max_sol) return message.reply('Please provide a valid sol')

        if (!sol) {
          message.embed({
            title: `${manifest.name} Mission Manifest`,
            description: `Launched: ${manifest.launch_date}\nLanded: ${manifest.landing_date}\nMission Status: ${manifest.status}\nTotal Sols: ${manifest.max_sol}\nLatest Date: ${manifest.max_date}\nTotal Photos: ${manifest.total_photos}`,
            fields: [
              {
                name: 'All Cameras',
                value: mission.cams[rover].join('\n')
              }
            ],
            color: config.embed_color,
            timestamp: new Date(),
            thumbnail: { url: config.pfp },
            footer: { text: mission.credit }
          })
          return
        }
        let photos = manifest.photos.filter(obj => obj.sol == sol)

        message.embed({
          title: `${manifest.name} Mission Manifest & Photo Info for sol ${sol}`,
          description: `Launched: ${manifest.launch_date}\nLanded: ${manifest.landing_date}\nMission Status: ${manifest.status}\nTotal Sols: ${manifest.max_sol}\nLatest Date: ${manifest.max_date}\nTotal Photos: ${manifest.total_photos}`,
          fields: [
            {
              name: `Sol ${photos[0].sol} info`,
              value: `Date: ${photos[0].earth_date}\nTotal Photos: ${
                photos[0].total_photos
              }\nCameras Used: ${photos[0].cameras.join(', ')}`
            }
          ],
          color: config.embed_color,
          timestamp: new Date(),
          image: { url: mission.rover[rover].img },
          footer: { text: mission.credit }
        })
      })
      .catch(function (error) {
        console.log(error.stack)
        message.reply(
          `An API error has occurred: ${error}\nFor help solving this problem please join are support server: ${config.invite}`
        )
      })
  }
}
