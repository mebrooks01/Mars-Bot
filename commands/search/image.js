const { Command } = require('discord.js-commando')
const axios = require('axios')
const moment = require('moment')
const config = require('$root/config.json')
const mission = require('$root/mission.json')
let url = ''
const count = require('$util/count')

module.exports = class Image extends Command {
  constructor(client) {
    super(client, {
      name: 'image',
      group: 'search',
      aliases: ['images', 'lookup', 'rover'],
      memberName: 'image',
      description: 'Coming soon',
      examples: [`${config.prefix}`],
      clientPermissions: ['EMBED_LINKS'],
      throttling: config.command_throttling.api,
      args: [
        {
          key: 'rover',
          prompt: 'Please select the rover you would like to search for',
          type: 'string',
          oneOf: ['curiosity', 'opportunity', 'perseverance', 'spirit'],
        },
        {
          key: 'date',
          prompt: 'Earth day or sol (for earth day use `yyyy/mm/dd` format )',
          type: 'string',
          validate: (date) => {
            if (
              moment(date, 'YYYY/M/D', true).isValid() ||
              isNaN(date) === false
            )
              return true
          },
        },
        {
          key: 'camera',
          prompt:
            'Please select the camera to look for. Or `all` for all cams\nTo get a list of all cam names please use the manifest command',
          type: 'string',
          validate: (camera) => {
            if (
              mission.cams.all.includes(camera.toLowerCase()) ||
              camera === 'all'
            )
              return true
          },
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

  run(message, { rover, date, camera, result_number }) {
    count.cmdCount++

    if (
      rover === 'curiosity' &&
      !mission.cams.curiosity.includes(camera) &&
      camera !== 'all'
    )
      return message.reply(
        `Please provide a valid camera name for the ${rover} rover.`,
      )
    if (
      rover === 'opportunity' &&
      !mission.cams.opportunity.includes(camera) &&
      camera !== 'all'
    )
      return message.reply(
        `Please provide a valid camera name for the ${rover} rover.`,
      )
    if (
      rover === 'perseverance' &&
      !mission.cams.perseverance.includes(camera) &&
      camera !== 'all'
    )
      return message.reply(
        `Please provide a valid camera name for the ${rover} rover.`,
      )
    if (
      rover === 'spirit' &&
      !mission.cams.spirit.includes(camera) &&
      camera !== 'all'
    )
      return message.reply(
        `Please provide a valid camera name for the ${rover} rover.`,
      )

    if (moment(date, 'YYYY/M/D', true).isValid()) {
      let date_mod = date.replace('/', '-')
      if (camera === 'all') {
        url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date_mod}&api_key=${config.api_key}`
      } else {
        url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date_mod}&camera=${camera}&api_key=${config.api_key}`
      }
    } else {
      if (camera === 'all') {
        url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${date}&api_key=${config.api_key}`
      } else {
        url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${date}&camera=${camera}&api_key=${config.api_key}`
      }
    }

    axios
      .get(url)
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
  }
}
