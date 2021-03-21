const axios = require('axios')
const schedule = require('node-schedule')
const chalk = require('chalk')
const config = require('$root/config.json')
let img = ''

module.exports = {
  execute(client) {
    console.log(chalk.green('Daily APOD Started'))

    //How Often to run APOD
    const rule = new schedule.RecurrenceRule()
    rule.hour = 12
    rule.minute = 00
    rule.tz = 'Etc/UTC'

    //Apod Cron Function
    const job = schedule.scheduleJob(rule, function () {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=${config.api_key}`)
        .then((res) => {
          config.channel_id.forEach(async (channel) => {
            console.log(channel)
          })

          if (res.data.hdurl) {
            img = res.data.hdurl
          } else {
            img = res.data.url
          }

          client.channels.cache.get(client.config.channel_id.dpod).send({
            embed: {
              title: res.data.title,
              url: img,
              description: res.data.explanation,
              color: config.embed_color,
              image: { url: img },
              timestamp: res.data.date,
              footer: { text: `Photo Credit: ${res.data.copyright}` },
            },
          })
        })
        .catch(function (error) {
          console.log(error.stack)
        })
    })
  },
}
