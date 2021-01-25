const { Command } = require("discord.js-commando");
const moment = require("moment");
const config = require("./../../config.json");
module.exports = class NAME extends Command {
  constructor(client) {
    super(client, {
      name: "viking",
      group: "",
      aliases: ["viking 1", "viking 2"],
      memberName: "viking",
      description: "Find Information on the Viking 1 & 2 missions",
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
      title: "Viking 1 & 2",
      url: "https://mars.nasa.gov/mars-exploration/missions/viking-1-2/",
      description:
        "Launched on August 20, 1975 UTC and September 9, 1975 UTC\nLaunched from Cape Canaveral Air Force Station, Florida\nLanded on July 20, 1976 and September 3, 1976\nLanded at Chryse Planitia and Utopia Planitia\nMission Complete, ended on November 13, 1982 and April 11, 1980\nMore Info at:\nhttps://mars.nasa.gov/mars-exploration/missions/viking-1-2/",
      color: "#5A2017",
      image: {
        url:
          "https://mars.nasa.gov/system/content_pages/main_images/382_viking-lander-PIA09703.jpg",
      },
      footer: {
        text: "Photo Credit: NASA/JPL-Caltech",
        icon_url: "",
      },
    });
  }
};
