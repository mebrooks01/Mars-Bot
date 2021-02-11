const { Command } = require("discord.js-commando");
const moment = require("moment");
const config = require("./../../config.json");
module.exports = class ClimateOrbiter extends Command {
  constructor(client) {
    super(client, {
      name: "climate-orbiter",
      group: "missions",
      aliases: ["climate-orbiter"],
      memberName: "climateorbiter",
      description: "Find Information on the climate orbiter mission",
      examples: [
        `${config.prefix}climateorbiter`,
        `${config.prefix}climate-orbiter`,
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
        "Launched on December 11, 1998\nLaunched from Cape Canaveral Air Force Station, Florida\nMission Failed, lost on arrival\nMore info at:\nhttps://mars.nasa.gov/mars-exploration/missions/mars-climate-orbiter/",
      color: this.client.config.embed_color,
      timestamp: new Date(),
      image: {
        url:
          "https://mars.nasa.gov/system/content_pages/main_images/375_mco_mapping.jpg",
      },
      footer: {
        text: "Photo Credit: NASA/JPL-Caltech",
        icon_url: "",
      },
    });
  }
};
