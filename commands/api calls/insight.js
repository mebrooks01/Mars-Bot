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
          let sol_keys = res.data.sol_keys;
          let array_length = res.data.sol_keys.length;
          //sol 1 data checks
          let sol1 = sol_keys[array_length - 1];
          let sol1_data = res.data[Object.keys(res.data)[array_length - 1]];
          //check to see if temp data available
          if (!sol1_data.AT.av) {
            var sol1_av_temp = "NA";
          } else var sol1_av_temp = sol1_data.AT.av + "°C";
          if (!sol1_data.AT.mn) {
            var sol1_mn_temp = "NA";
          } else var sol1_mn_temp = sol1_data.AT.mn + "°C";
          if (!sol1_data.AT.mx) {
            var sol1_mx_temp = "NA";
          } else var sol1_mx_temp = sol1_data.AT.mx + "°C";
          //checks for wind data
          if (!sol1_data.HWS.av) {
            var sol1_av_wind = "NA";
          } else var sol1_av_wind = sol1_data.HWS.av + "m/s";
          if (!sol1_data.HWS.mn) {
            var sol1_mn_wind = "NA";
          } else var sol1_mn_wind = sol1_data.HWS.mn + "m/s";
          if (!sol1_data.HWS.mx) {
            var sol1_mx_wind = "NA";
          } else var sol1_mx_wind = sol1_data.HWS.mx + "m/s";
          //checks pr data
          if (!sol1_data.PRE.av) {
            var sol1_av_pr = "NA";
          } else var sol1_av_pr = sol1_data.PRE.av + "Pa";
          if (!sol1_data.PRE.mn) {
            var sol1_mn_pr = "NA";
          } else var sol1_mn_pr = sol1_data.PRE.mn + "Pa";
          if (!sol1_data.PRE.mx) {
            var sol1_mx_pr = "NA";
          } else var sol1_mx_pr = sol1_data.PRE.mx + "Pa";
          let sol2 = sol_keys[array_length - 1];
          let sol2_data = res.data[Object.keys(res.data)[array_length - 1]];
          //check to see if temp data available
          if (!sol2_data.AT.av) {
            var sol2_av_temp = "NA";
          } else var sol2_av_temp = sol2_data.AT.av + "°C";
          if (!sol2_data.AT.mn) {
            var sol2_mn_temp = "NA";
          } else var sol2_mn_temp = sol2_data.AT.mn + "°C";
          if (!sol2_data.AT.mx) {
            var sol2_mx_temp = "NA";
          } else var sol2_mx_temp = sol2_data.AT.mx + "°C";
          //checks for wind data
          if (!sol2_data.HWS.av) {
            var sol2_av_wind = "NA";
          } else var sol2_av_wind = sol2_data.HWS.av + "m/s";
          if (!sol2_data.HWS.mn) {
            var sol2_mn_wind = "NA";
          } else var sol2_mn_wind = sol2_data.HWS.mn + "m/s";
          if (!sol2_data.HWS.mx) {
            var sol2_mx_wind = "NA";
          } else var sol2_mx_wind = sol2_data.HWS.mx + "m/s";
          //checks pr data
          if (!sol2_data.PRE.av) {
            var sol2_av_pr = "NA";
          } else var sol2_av_pr = sol2_data.PRE.av + "Pa";
          if (!sol2_data.PRE.mn) {
            var sol2_mn_pr = "NA";
          } else var sol2_mn_pr = sol2_data.PRE.mn + "Pa";
          if (!sol2_data.PRE.mx) {
            var sol2_mx_pr = "NA";
          } else var sol2_mx_pr = sol2_data.PRE.mx + "Pa";
          let sol3 = sol_keys[array_length - 1];
          let sol3_data = res.data[Object.keys(res.data)[array_length - 1]];
          //check to see if temp data available
          if (!sol3_data.AT.av) {
            var sol3_av_temp = "NA";
          } else var sol3_av_temp = sol3_data.AT.av + "°C";
          if (!sol3_data.AT.mn) {
            var sol3_mn_temp = "NA";
          } else var sol3_mn_temp = sol3_data.AT.mn + "°C";
          if (!sol3_data.AT.mx) {
            var sol3_mx_temp = "NA";
          } else var sol3_mx_temp = sol3_data.AT.mx + "°C";
          //checks for wind data
          if (!sol3_data.HWS.av) {
            var sol3_av_wind = "NA";
          } else var sol3_av_wind = sol3_data.HWS.av + "m/s";
          if (!sol3_data.HWS.mn) {
            var sol3_mn_wind = "NA";
          } else var sol3_mn_wind = sol3_data.HWS.mn + "m/s";
          if (!sol3_data.HWS.mx) {
            var sol3_mx_wind = "NA";
          } else var sol3_mx_wind = sol3_data.HWS.mx + "m/s";
          //checks pr data
          if (!sol3_data.PRE.av) {
            var sol3_av_pr = "NA";
          } else var sol3_av_pr = sol3_data.PRE.av + "Pa";
          if (!sol3_data.PRE.mn) {
            var sol3_mn_pr = "NA";
          } else var sol3_mn_pr = sol3_data.PRE.mn + "Pa";
          if (!sol3_data.PRE.mx) {
            var sol3_mx_pr = "NA";
          } else var sol3_mx_pr = sol3_data.PRE.mx + "Pa";

          message.channel.send({
            embed: {
              title: "Whether on mars for the last 3 days",
              url: "https://mars.nasa.gov/insight/weather/",
              description: ``,
              fields: [
                {
                  name: `Weather From Sol: ${sol1}`,
                  value: `**Average Temp:** ${sol1_av_temp} **Min:** ${sol1_mn_temp} **Max:** ${sol1_mx_temp}\n**Average Wind Speed:** ${sol1_av_wind} **Min:** ${sol1_mn_wind} **Max:** ${sol1_mx_wind}\n**Average Air Pressure :** ${sol1_av_pr} **Min:** ${sol1_mn_pr} **Max:** ${sol1_mx_pr}`,
                },
                {
                  name: `Weather From Sol: ${sol2}`,
                  value: `**Average Temp:** ${sol2_av_temp} **Min:** ${sol2_mn_temp} **Max:** ${sol2_mx_temp}\n**Average Wind Speed:** ${sol2_av_wind} **Min:** ${sol2_mn_wind} **Max:** ${sol1_mx_wind}\n**Average Air Pressure :** ${sol2_av_pr} **Min:** ${sol2_mn_pr} **Max:** ${sol2_mx_pr}`,
                },
                {
                  name: `Weather From Sol: ${sol3}`,
                  value: `**Average Temp:** ${sol3_av_temp} **Min:** ${sol3_mn_temp} **Max:** ${sol3_mx_temp}\n**Average Wind Speed:** ${sol3_av_wind} **Min:** ${sol3_mn_wind} **Max:** ${sol3_mx_wind}\n**Average Air Pressure :** ${sol3_av_pr} **Min:** ${sol3_mn_pr} **Max:** ${sol3_mx_pr}`,
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
