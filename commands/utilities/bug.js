const { Command } = require("discord.js-commando");
const config = require("./../../config.json");
const invite = config.invite;
module.exports = class Bug extends Command {
  constructor(client) {
    super(client, {
      name: "bug",
      group: "utilities",
      aliases: ["report", "bugs"],
      memberName: "bug",
      description: "Report any and all bugs here",
      examples: ["=bug"],
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
      title: "Bugs?",
      url: "https://github.com/mebrooks01/Mars-Bot/issues",
      description: `If you found a bug in Mars Bot please report it on the Git hub repository\nhttps://github.com/mebrooks01/Mars-Bot/issues\nOr join our server and talk to us about it\n${invite}`,
      color: "#5A2017",
      image: {
        url:
          "https://mars.nasa.gov/system/resources/detail_files/25058_PIA23900-web.jpg",
      },
      footer: {
        text: "Profile Photo Credit: NASA/JPL-Caltech",
        icon_url: "",
      },
    });
  }
};
