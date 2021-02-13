const { Command } = require("discord.js-commando");
const moment = require("moment");
const config = require("$root/config.json");
module.exports = class Maven extends Command {
  constructor(client) {
    super(client, {
      name: "maven",
      group: "missions",
      aliases: ["maven"],
      memberName: "maven",
      description:
        "Find Information on the Mars Atmospheric and Volatile EvolutioN (Maven) mission",
      examples: [`${config.prefix}maven`],
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
      title: "Mars Atmospheric and Volatile EvolutioN (Maven)",
      url: "https://mars.nasa.gov/mars-exploration/missions/maven/",
      description:
        "Launched on November 18, 2013\nLaunched from Cape Canaveral Air Force Station, Florida\nOrbit insertion on September 22, 2014\nMission ongoing\nMore info at:\nhttps://mars.nasa.gov/mars-exploration/missions/maven/",
      color: this.client.config.embed_color,
      timestamp: new Date(),
      image: {
        url:
          "https://mars.nasa.gov/system/content_pages/main_images/378_maven.jpg",
      },
      footer: {
        text: "Photo Credit: NASA/JPL-Caltech",
        icon_url: "",
      },
    });
  }
};
