const { Command } = require("discord.js-commando");
const { RichEmbed } = require("discord.js");

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
      description: "Get info about insight and find weather data",
      examples: [
        `${config.prefix}insight`,
        `${config.prefix}insight <'info' | 'weather'>`,
      ],
      clientPermissions: [
        "SEND_MESSAGES",
        "EMBED_LINKS",
        "ATTACH_FILES",
        "READ_MESSAGE_HISTORY",
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
            "https://mars.nasa.gov/system/resources/detail_files/22116_PIA22743-16x9.jpg",
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
          let sol_keys = res.data.sol_keys;
          let array_length = res.data.sol_keys.length;
          //sol 1 data checks
          let sol1 = sol_keys[array_length - 1];
          let sol1_data = res.data[Object.keys(res.data)[array_length - 1]];
          if (!sol1_data.AT) {
            var sol1_av_temp = "NA";
            var sol1_mn_temp = "NA";
            var sol1_mx_temp = "NA";
          } else {
            var sol1_av_temp = sol1_data.AT.av + "°C";
            var sol1_mn_temp = sol1_data.AT.mn + "°C";
            var sol1_mx_temp = sol1_data.AT.mx + "°C";
          }
          if (!sol1_data.HWS) {
            var sol1_av_wind = "NA";
            var sol1_mn_wind = "NA";
            var sol1_mx_wind = "NA";
          } else {
            var sol1_av_wind = sol1_data.HWS.av + " m/s";
            var sol1_mn_wind = sol1_data.HWS.mn + " m/s";
            var sol1_mx_wind = sol1_data.HWS.mx + " m/s";
          }
          if (!sol1_data.PRE) {
            var sol1_av_pr = "NA";
            var sol1_mn_pr = "NA";
            var sol1_mx_pr = "NA";
          } else {
            var sol1_av_pr = sol1_data.PRE.av + " Pa";
            var sol1_mn_pr = sol1_data.PRE.mn + " Pa";
            var sol1_mx_pr = sol1_data.PRE.mx + " Pa";
          }
          //sol 2 data checks
          let sol2 = sol_keys[array_length - 2];
          let sol2_data = res.data[Object.keys(res.data)[array_length - 2]];
          if (!sol2_data.AT) {
            var sol2_av_temp = "NA";
            var sol2_mn_temp = "NA";
            var sol2_mx_temp = "NA";
          } else {
            var sol2_av_temp = sol2_data.AT.av + "°C";
            var sol2_mn_temp = sol2_data.AT.mn + "°C";
            var sol2_mx_temp = sol2_data.AT.mx + "°C";
          }
          if (!sol2_data.HWS) {
            var sol2_av_wind = "NA";
            var sol2_mn_wind = "NA";
            var sol2_mx_wind = "NA";
          } else {
            var sol2_av_wind = sol2_data.HWS.av + " m/s";
            var sol2_mn_wind = sol2_data.HWS.mn + " m/s";
            var sol2_mx_wind = sol2_data.HWS.mx + " m/s";
          }
          if (!sol2_data.PRE) {
            var sol2_av_pr = "NA";
            var sol2_mn_pr = "NA";
            var sol2_mx_pr = "NA";
          } else {
            var sol2_av_pr = sol2_data.PRE.av + " Pa";
            var sol2_mn_pr = sol2_data.PRE.mn + " Pa";
            var sol2_mx_pr = sol2_data.PRE.mx + " Pa";
          }
          message.channel.send({
            embed: {
              title: "Whether on mars for the last 2 days",
              url: "https://mars.nasa.gov/insight/weather/",
              description: ``,
              fields: [
                {
                  name: `Weather From Sol: ${sol1}`,
                  value: `__**Temperature  Info**__\nAverage: ${sol1_av_temp}\nMax: ${sol1_mx_temp}\nMin: ${sol1_mn_temp}\n__**Wind Speed Info**__\nAverage: ${sol1_av_wind}\nMax: ${sol1_mx_wind}\nMin: ${sol1_mn_wind}\n__**Air Pressure Info**__\nAverage: ${sol1_av_pr}\nMax: ${sol1_mx_pr}\nMin: ${sol1_mn_pr}\n**Season:** ${sol1_data.Season}`,
                },
                {
                  name: `Weather From Sol: ${sol2}`,
                  value: `__**Temperature  Info**__\nAverage: ${sol2_av_temp}\nMax: ${sol2_mx_temp}\nMin: ${sol2_mn_temp}\n__**Wind Speed Info**__\nAverage: ${sol2_av_wind}\nMax: ${sol2_mx_wind}\nMin: ${sol2_mn_wind}\n__**Air Pressure Info**__\nAverage: ${sol2_av_pr}\nMax: ${sol2_mx_pr}\nMin: ${sol2_mn_pr}\n**Season:** ${sol2_data.Season}`,
                },
              ],
              color: "#5A2017",
              image: {
                url: "",
              },
              footer: {
                text: "Credit: NASA/JPL-Caltech",
                icon_url: "",
              },
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
