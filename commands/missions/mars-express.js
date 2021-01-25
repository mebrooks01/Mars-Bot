const { Command } = require("discord.js-commando");
const moment = require("moment");
const config = require("./../../config.json");
module.exports = class MarsExpress extends Command {
  constructor(client) {
    super(client, {
      name: "mars-express",
      group: "",
      aliases: ["mars express"],
      memberName: "mars-express",
      description: "Find Information on the mars express mission",
      examples: [`${config.prefix}mars-express`],
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
      title: "Mars Express",
      url: "https://mars.nasa.gov/mars-exploration/missions/express/",
      description:
        "Launched on June 2, 2003\nLaunched from Baikonur Cosmodrome, Russia\nOrbit insertion on December 25, 2003\nMission ongoing\nMore info at:\nhttps://mars.nasa.gov/mars-exploration/missions/express/",
      color: "#5A2017",
      image: {
        url:
          "https://mars.nasa.gov/system/content_pages/main_images/369_mars-express.jpg",
      },
      footer: {
        text: "Photo Credit: NASA/JPL-Caltech",
        icon_url: "",
      },
    });
  }
};
