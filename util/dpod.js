const axios = require('axios')
const schedule = require('node-schedule')
const chalk = require('chalk')
const config = require('$root/config.json')
const dpod = require('$root/dpod.json')
let img = ''
let delay = 1000
let i

module.exports = {
  async execute(client) {
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }

    console.log(chalk.green('Daily APOD Started'))

    const rule = new schedule.RecurrenceRule()
    rule.hour = 12
    rule.minute = 00
    rule.tz = 'Etc/UTC'

    const job = schedule.scheduleJob(rule, async function () {
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

          for (i = 0; i < dpod.length; i++) {
            client.channels.cache.get(dpod[i].channel).send({ embed })

            await sleep(delay)
          }
        })
        .catch(function (error) {
          console.log(error.stack)
        })
    })
  }
}
