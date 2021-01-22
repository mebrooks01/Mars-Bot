const { Command } = require("discord.js-commando");
const axios = require("axios");
const moment = require("moment");
const config = require("./../../config.json");
const api_key = config.api_key;
const invite = config.invite;
module.exports = class APOD extends Command {
  constructor(client) {
    super(client, {
      name: "apod",
      group: "api calls",
      aliases: ["apod"],
      memberName: "apod",
      description:
        "Astronomy Picture of the Day. Get NASA's Picture of the Day right to your discord",
      examples: ["=apod"],
      guildOnly: false,
      ownerOnly: false,
      throttling: {
        usages: 2,
        duration: 10,
      },
    });
  }
  run(message) {
    let apod_date = moment().utcOffset(-12).format("YYYY-M-D");

    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=${apod_date}&api_key=${api_key}`
      )
      .then((res) => {
        message.embed({
          title: res.data.title,
          url: res.data.url,
          description: res.data.explanation,
          color: "#5A2017",
          image: {
            url: res.data.url,
          },
          footer: {
            text: "Profile Photo Credit: NASA/JPL-Caltech",
            icon_url: "",
          },
        });
      })
      .catch(function (error) {
        console.log(error.stack);
        message.say(
          `An error occurred while running the command: ${error}\nFor help solving this problem please join are support server: ${invite}`
        );
      });
  }
};
