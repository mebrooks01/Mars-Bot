const { Command } = require("discord.js-commando");
const moment = require("moment");
const config = require("./../../config.json");
module.exports = class NAME extends Command {
  constructor(client) {
    super(client, {
      name: "global-surveyor",
      group: "missions",
      aliases: ["global surveyor", "globalsurveyor"],
      memberName: "global-surveyor",
      description: "Find Information on the global surveyor mission",
      examples: [`${config.prefix}global-surveyor`],
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
      title: "Mars Global Surveyor",
      url:
        "https://mars.nasa.gov/mars-exploration/missions/mars-global-surveyor/",
      description:
        "Launched on November 7, 1996\nLaunched from Cape Canaveral Air Force Station, Florida\nOrbit Insertion September 12, 1997\nMission Complete, ended on November 14, 2006\nMore info at:\nhttps://mars.nasa.gov/mars-exploration/missions/mars-global-surveyor/",
      color: "#5A2017",
      image: {
        url:
          "https://mars.nasa.gov/system/content_pages/main_images/376_marsglobalsurveyor.jpg",
      },
      footer: {
        text: "Photo Credit: NASA/JPL-Caltech",
        icon_url: "",
      },
    });
  }
};
