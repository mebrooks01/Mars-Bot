const { Command } = require("discord.js-commando");
const moment = require("moment");
const config = require("$root/config.json");
module.exports = class MRO extends Command {
  constructor(client) {
    super(client, {
      name: "mro",
      group: "missions",
      aliases: ["mro"],
      memberName: "mro",
      description:
        "Find Information on the Mars Reconnaissance Orbiter (MRO) mission",
      examples: [`${config.prefix}mro`],
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
      title: "Mars Reconnaissance Orbiter (MRO)",
      url:
        "https://mars.nasa.gov/mars-exploration/missions/mars-reconnaissance-orbiter/",
      description:
        "Launched on August 12, 2005\nLaunched from Cape Canaveral Air Force Station, Florida\nOrbit insertion on March 10, 2006\nMission ongoing\nMore info at:\nhttps://mars.nasa.gov/mars-exploration/missions/mars-reconnaissance-orbiter/",
      color: this.client.config.embed_color,
      timestamp: new Date(),
      image: {
        url:
          "https://mars.nasa.gov/system/content_pages/main_images/366_mro20100917_PIA05490_modest.jpg",
      },
      footer: {
        text: "Photo Credit: NASA/JPL-Caltech",
        icon_url: "",
      },
    });
  }
};
