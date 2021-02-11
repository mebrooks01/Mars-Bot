const { Command } = require("discord.js-commando");
const moment = require("moment");
const config = require("./../../config.json");
module.exports = class NAME extends Command {
  constructor(client) {
    super(client, {
      name: "pathfinder",
      group: "missions",
      aliases: ["pathfinder"],
      memberName: "pathfinder",
      description: "Find Information on the pathfinder mission",
      examples: [`${config.prefix}`],
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
      title: "Mars Pathfinder",
      url: "https://mars.nasa.gov/mars-exploration/missions/pathfinder/",
      description:
        "Launched on December 4, 1996.\nLaunched from Cape Canaveral Air Force Station, Florida.\nLanded on July 4, 1997.\nLanded at Ares Vallis, Mars\nMission Complete, ended on September 27, 1997.\nMore info at:\nhttps://mars.nasa.gov/mars-exploration/missions/pathfinder/",
      color: this.client.config.embed_color,
      timestamp: new Date(),
      thumbnail: {
        url: this.client.config.pfp,
      },
      image: {
        url:
          "https://mars.nasa.gov/system/content_pages/main_images/384_pathfinder.jpg",
      },
      footer: {
        text: "Photo Credit: NASA/JPL-Caltech",
        icon_url: "",
      },
    });
  }
};
