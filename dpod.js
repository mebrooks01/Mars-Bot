const axios = require("axios");
const schedule = require("node-schedule");
const moment = require("moment");
const config = require("./config.json");
module.exports = {
  execute() {
    const rule = new schedule.RecurrenceRule();
    (rule.hour = 12), (rule.minute = 00), (rule.tz = "Etc/UTC");
    const job = schedule.scheduleJob(rule, function () {
      let date = moment().utcOffset(-12).format("YYYY-M-D");
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${config.api_key}`
        )
        .then((res) => {
          this.client.channels.cache
            .get(client.config.channel_id.apod_for_main)
            .send({
              embed: {
                title: res.data.title,
                url: res.data.url,
                description: res.data.explanation,
                color: "#5A2017",
                image: {
                  url: res.data.url,
                },
              },
            });
        })
        .catch(function (error) {
          console.log(error.stack);
        });
    });
  },
};
