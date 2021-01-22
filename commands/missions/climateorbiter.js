const { Command } = require("discord.js-commando");
const moment = require("moment");
const config = require("./../../config.json");
module.exports = class ClimateOrbiter extends Command {
  constructor(client) {
    super(client, {
      name: "climateorbiter",
      group: "missions",
      aliases: ["climate-orbiter", "climate-orbiter"],
      memberName: "climate-orbiter",
      description: "",
      examples: ["=climateorbiter", "=climate-orbiter"],
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
      title: "Mars Climate Orbiter",
      url:
        "https://mars.nasa.gov/mars-exploration/missions/mars-climate-orbiter/",
      description:
        "Launched on December 11, 1998\nLanched from Cape Canaveral Air Force Station, Florida\nMission Failed, lost on arival\nMore info at:\nhttps://mars.nasa.gov/mars-exploration/missions/mars-climate-orbiter/",
      color: "#5A2017",
      image: {
        url:
          "https://mars.nasa.gov/system/content_pages/main_images/375_mco_mapping.jpg",
      },
      footer: {
        text: "Profile Photo Credit: NASA/JPL-Caltech",
        icon_url: "",
      },
    });
  }
};
