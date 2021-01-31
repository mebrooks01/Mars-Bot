const { Command } = require("discord.js-commando");
const moment = require("moment");
const config = require("./../../config.json");
module.exports = class NAME extends Command {
  constructor(client) {
    super(client, {
      name: "mariner",
      group: "missions",
      aliases: ["mariner"],
      memberName: "mariner",
      description: "Find Information on the Mariner 3-9 missions",
      examples: [`${config.prefix}mariner`],
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
      title: "Mariner 3-9",
      url: "https://mars.nasa.gov/mars-exploration/missions/mariner-8-9/",
      description:
        "Launched Between November 28, 1964 and May 30, 1971\nLaunched from Cape Canaveral Air Force Station, Florida\nMissions complete between, December 21, 1967 and October 27, 1972\nMore info at:\nhttps://mars.nasa.gov/mars-exploration/missions/mariner-3-4/\nhttps://mars.nasa.gov/mars-exploration/missions/mariner-6-7/\nhttps://mars.nasa.gov/mars-exploration/missions/mariner-8-9/",
      color: "#5A2017",
      image: {
        url:
          "https://mars.nasa.gov/system/content_pages/main_images/373_mariner9.jpg",
      },
      footer: {
        text: "Photo Credit: NASA/JPL-Caltech",
        icon_url: "",
      },
    });
  }
};
