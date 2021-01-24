const { Command } = require("discord.js-commando");
const axios = require("axios");
const moment = require("moment");
const config = require("./../../config.json");
const api_key = config.api_key;
const invite = config.invite;
module.exports = class Insight extends Command {
  constructor(client) {
    super(client, {
      name: "insight",
      group: "api calls",
      aliases: ["insight", "weather"],
      memberName: "insight",
      description: "Get info about insight and look up the images it has taken",
      examples: [
        `${config.prefix}insight`,
        `${config.prefix}insight <'info' | 'weather'>`,
      ],
      guildOnly: false,
      ownerOnly: false,
      throttling: {
        usages: 2,
        duration: 10,
      },
      args: [
        {
          key: "type",
          prompt: "Please choose if you are looking for an image or info",
          type: "string",
          oneOf: ["info", `weather`],
          default: "info",
        },
      ],
    });
  }
  run(message, { type }) {
    if (type === "info") {
      message.embed({
        title: "Insight",
        url: "https://mars.nasa.gov/mars-exploration/missions/insight/",
        description:
          "Launched on May 5, 2018\nLaunched from Vandenberg Air Force Base, California\nLanded on November 26, 2018\nLanded at Elysium Planitia, Mars\nMission Ongoing\nMore Info at:\nhttps://mars.nasa.gov/mars-exploration/missions/insight/",
        color: "#5A2017",
        image: {
          url:
            "https://mars.nasa.gov/system/content_pages/main_images/370_insight-lander-PIA22743-16x9.jpg",
        },
        footer: {
          text: "Credit: NASA/JPL-Caltech",
          icon_url: "",
        },
      });
      return;
    }
    if (type === "weather") {
      axios
        .get(
          `https://api.nasa.gov/insight_weather/?api_key=${api_key}&feedtype=json`
        )
        .then((res) => {
          console.log(res.data);
          let sol_keys = res.data.sol_keys;

          message.embed({
            title: "",
            url: "",
            description: ``,
            color: "#5A2017",
            image: {
              url: "",
            },
            footer: {
              text: "Credit: NASA/JPL-Caltech",
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
  }
};
