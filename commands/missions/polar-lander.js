const { Command } = require("discord.js-commando");
const moment = require("moment");
const config = require("./../../config.json");
module.exports = class NAME extends Command {
  constructor(client) {
    super(client, {
      name: "polar-lander",
      group: "missions",
      aliases: ["polar lander", "deep space", "deep-space"],
      memberName: "polar-lander",
      description:
        "Find Information on the Mars Polar Lander/Deep Space 2 mission",
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
      title: "Mars Polar Lander/Deep Space 2",
      url: "https://mars.nasa.gov/mars-exploration/missions/polar-lander/",
      description:
        "Launched on January 3, 1999\nLaunched from Cape Canaveral Air Force Station, Florida\nMission Failed, lost on arrival(December 3, 1999)\nMore info at:\nhttps://mars.nasa.gov/mars-exploration/missions/polar-lander/",
      color: "#5A2017",
      image: {
        url:
          "https://mars.nasa.gov/system/content_pages/main_images/381_mpl_shadow.jpg",
      },
      footer: {
        text: "Photo Credit: NASA/JPL-Caltech",
        icon_url: "",
      },
    });
  }
};
