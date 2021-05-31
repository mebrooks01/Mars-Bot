const axios = require('axios')
const schedule = require('node-schedule')
const chalk = require('chalk')
const config = require('$root/config.json')

let delay = 1000

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const dpod = async function () {
  let img = ''
  await axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=${config.api_key}`)
    .then(async res => {
      if (res.data.hdurl) {
        img = res.data.hdurl
      } else {
        img = res.data.url
      }

      let embed = {
        title: res.data.title,
        url: img,
        description: res.data.explanation,
        color: config.embed_color,
        image: { url: img },
        timestamp: res.data.date,
        footer: { text: `Photo Credit: ${res.data.copyright}` }
      }

      let channels = []
      this.guilds.cache.each(guild => {
        if (this.provider.get(guild, 'dpod', false)) channels.push(this.provider.get(guild, 'dpod'))
      })

      for (let channel of channels) {
        this.channels.cache
          .get(channel)
          .send({ embed })
          .catch(() => {})

        await sleep(delay)
      }
    })
    .catch(function (error) {
      console.log(error.stack)
    })
}

module.exports = {
  async execute(client) {
    console.log(chalk.green('Daily APOD Started'))

    const rule = new schedule.RecurrenceRule()
    rule.hour = 12
    rule.minute = 0
    rule.tz = 'Etc/UTC'

    /*eslint-disable */
    const job = schedule.scheduleJob(rule, dpod.bind(client))
  },
  dpod
}
