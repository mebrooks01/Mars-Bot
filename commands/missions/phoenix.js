const { Command } = require("discord.js-commando");
const moment = require("moment");
const config = require("./../../config.json");
module.exports = class NAME extends Command {
  constructor(client) {
    super(client, {
      name: "phoenix",
      group: "missions",
      aliases: ["phoenix"],
      memberName: "phoenix",
      description: "Find Information on the phoenix mission",
      examples: [`${config.prefix}phoenix`],
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
      title: "Mars Phoenix",
      url: "https://mars.nasa.gov/mars-exploration/missions/phoenix/",
      description:
        "Launched  on August 4, 2007\nLaunched From Cape Canaveral Air Force Station, Florida\nLanded on May 25, 2008\nLanded at Vastitas Borealis, the arctic plains of Mars\nMission Complete, ended on November 2, 2008\nMore Info at:\nhttps://mars.nasa.gov/mars-exploration/missions/phoenix/",
      color: this.client.config.embed_color,
      timestamp: new Date(),
      thumbnail: {
        url: this.client.config.pfp,
      },
      image: {
        url:
          "https://mars.nasa.gov/system/content_pages/main_images/383_phoenix-lander.jpg",
      },
      footer: {
        text: "Photo Credit: NASA/JPL-Caltech",
        icon_url: "",
      },
    });
  }
};
