const { Command } = require("discord.js-commando");
const moment = require("moment");
const config = require("./../../config.json");
module.exports = class NAME extends Command {
  constructor(client) {
    super(client, {
      name: "suggest",
      group: "utilities",
      aliases: ["suggestions", "suggestion", "ideas", "idea"],
      memberName: "suggest",
      description: "Find Information on the BLANK mission",
      examples: [`${config.prefix}suggest`],
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
      title: "Suggestions?",
      url: "https://github.com/mebrooks01/Mars-Bot/issues",
      description: `If you have a suggest for Mars Bot please post it on the Git hub repository\nhttps://github.com/mebrooks01/Mars-Bot/issues\nOr join our server and talk to us about it\n${invite}`,
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
