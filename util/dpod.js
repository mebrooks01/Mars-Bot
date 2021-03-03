const axios = require('axios')
const schedule = require('node-schedule')
const moment = require('moment')
const chalk = require('chalk')
const config = require('$root/config.json')

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
      let date = moment().utcOffset(-12).format('YYYY-M-D')

      axios
        .get(
          `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${config.api_key}`,
        )
        .then((res) => {
          client.channels.cache
            .get(client.config.channel_id.apod_for_main)
            .send({
              embed: {
                title: res.data.title,
                url: res.data.url,
                description: res.data.explanation,
                color: config.embed_color,
                image: { url: res.data.url },
              },
            })
        })
        .catch(function (error) {
          console.log(error.stack)
        })
    })
  },
}
