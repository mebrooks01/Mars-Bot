const { Command } = require("discord.js-commando");
const moment = require("moment");
const config = require("./../../config.json");
module.exports = class Mars extends Command {
  constructor(client) {
    super(client, {
      name: "mars",
      group: "utilities",
      aliases: ["mars"],
      memberName: "mars",
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
      image: {
        url: "https://solarsystem.nasa.gov/internal_resources/3841/",
      },
      footer: {
        text: "Photo Credit: NASA/JPL-Caltech",
        icon_url: "",
      },
    });
  }
};
