const { Command } = require("discord.js-commando");
const moment = require("moment");
const config = require("./../../config.json");
module.exports = class Stats extends Command {
  constructor(client) {
    super(client, {
      name: "stats",
      group: "utilities",
      aliases: ["stats"],
      memberName: "stats",
      description: "Find Information about the Red Planet",
      examples: [`${config.prefix}`],
      guildOnly: false,
      ownerOnly: false,
      hidden: true,
      throttling: {
        usages: 2,
        duration: 1,
      },
    });
  }
  run(message) {
    message.embed({
      title: "Mars Bot Stats",
      url: "",
      description: `I am on ${this.client.guilds.cache.size} servers.\n`,
      color: "#5A2017",
      thumbnail: {
        url:
          "https://mars.nasa.gov/system/resources/detail_files/25058_PIA23900-web.jpg",
      },
      footer: {
        text: "Photo Credit: NASA/JPL-Caltech",
        icon_url: "",
      },
    });
  }
};
