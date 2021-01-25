const { Command } = require("discord.js-commando");
const moment = require("moment");
const config = require("./../../config.json");
module.exports = class Observer extends Command {
  constructor(client) {
    super(client, {
      name: "observer",
      group: "missions",
      aliases: ["observer"],
      memberName: "observer",
      description: "Find Information on the Observer mission",
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
      title: "Mars Observer",
      url: "https://mars.nasa.gov/mars-exploration/missions/mars-observer/",
      description:
        "Launched on September 25, 1992\nlanuched from Cape Canaveral Air Force Station, Florida\nMission Failed, Communication lost prior to orbit insertion\nMore info at:\nhttps://mars.nasa.gov/mars-exploration/missions/mars-observer/",
      color: "#5A2017",
      image: {
        url:
          "https://mars.nasa.gov/system/content_pages/main_images/377_mars_observer.jpg",
      },
      footer: {
        text: "Photo Credit: NASA/JPL-Caltech",
        icon_url: "",
      },
    });
  }
};
