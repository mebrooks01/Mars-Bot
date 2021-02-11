const { Command } = require("discord.js-commando");
const moment = require("moment");
const config = require("./../../config.json");
module.exports = class Odyssey extends Command {
  constructor(client) {
    super(client, {
      name: "odyssey",
      group: "missions",
      aliases: ["odyssey"],
      memberName: "odyssey",
      description: "Find Information on the odyssey mission",
      examples: [`${config.prefix}pathfinder`],
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
      title: "Mars Odyssey",
      url:
        "https://mars.nasa.gov/system/content_pages/main_images/380_odyssey-PIA04816.jpg",
      description:
        "Launched on April 7, 2001\nLaunched from Cape Canaveral Air Force Station, Florida\nOrbit insertion on October 24, 2001\nMission ongoing\nMore info at:\nhttps://mars.nasa.gov/mars-exploration/missions/odyssey/",
      color: this.client.config.embed_color,
      timestamp: new Date(),
      thumbnail: {
        url: this.client.config.pfp,
      },
      image: {
        url:
          "https://mars.nasa.gov/system/content_pages/main_images/380_odyssey-PIA04816.jpg",
      },
      footer: {
        text: "Photo Credit: NASA/JPL-Caltech",
        icon_url: "",
      },
    });
  }
};
