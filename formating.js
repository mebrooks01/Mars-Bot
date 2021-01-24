//api calls
const { Command } = require("discord.js-commando");
const axios = require("axios");
const moment = require("moment");
const config = require("./../../config.json");
module.exports = class NAME extends Command {
  constructor(client) {
    super(client, {
      name: "",
      group: "",
      aliases: [""],
      memberName: "",
      description: "",
      examples: [""],
      guildOnly: false,
      ownerOnly: false,
      throttling: {
        usages: 2,
        duration: 1,
      },
      args: [
        {
          key: "type",
          prompt: "Please choose if you are looking for an image or info",
          type: "string",
          oneOf: ["info", `image`],
          default: "info",
        },
        {
          key: "sol",
          prompt: "Please choose a sol to look for",
          type: "integer",
          default: "",
        },
        {
          key: "page_number",
          prompt: "Please choose a page number to look for",
          type: "integer",
          default: "",
        },
      ],
    });
  }
  run(message) {
    if (type === "info") {
      message.embed({
        title: "",
        url: "",
        description: "",
        color: "#5A2017",
        image: {
          url: "",
        },
        footer: {
          text: "Credit: NASA/JPL-Caltech",
          icon_url: "",
        },
      });
      return;
    }
    if (type === "image") {
      if (!sol || !page_number) {
        message.reply(
          "Please choose a sol and or page number to look for\n`=curiosity image <sol> <page number>`"
        );
      } else {
        axios
          .get(`URL&api_key=${api_key}`)
          .then((res) => {
            if (!res.data.photos[page_number - 1]) {
              message.reply("No results found");
              return;
            }
            let img = res.data.photos[page_number - 1].img_src;
            let data = res.data.photos[page_number - 1];
            let cam = res.data.photos[page_number - 1].camera;
            let rover = res.data.photos[page_number - 1].rover;

            message.channel.send({
              embed: {
                title: "Photo from " + rover.name + "'s from " + cam.full_name,
                url: img,
                description: `**Rover Name:** ${rover.name}\n**Mission Status:** ${rover.status}\n**Sol:** ${data.sol}\n**Date:** ${data.earth_date}\n**Camera Name:** ${cam.full_name} (${cam.name})\n**Photo ID:** ${data.id}`,
                color: "#5A2017",
                image: {
                  url: img,
                },
                footer: {
                  text: "Photo Credit: NASA/JPL-Caltech",
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
  }
};

//missions
const { Command } = require("discord.js-commando");
const moment = require("moment");
const config = require("./../../config.json");
module.exports = class NAME extends Command {
  constructor(client) {
    super(client, {
      name: "",
      group: "",
      aliases: [""],
      memberName: "",
      description: "Find Information on the BLANK mission",
      examples: [`${config.prefix}`],
      guildOnly: false,
      ownerOnly: false,
      throttling: {
        usages: 2,
        duration: 1,
      },
    });
  }
  run(message) {
    message.embed({
      title: "",
      url: "",
      description: "",
      color: "#5A2017",
      image: {
        url: "",
      },
      footer: {
        text: "Photo Credit: NASA/JPL-Caltech",
        icon_url: "",
      },
    });
  }
};

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
