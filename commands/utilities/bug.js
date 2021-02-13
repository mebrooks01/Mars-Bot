const { Command } = require("discord.js-commando");
const config = require("$root/config.json");
const invite = config.invite;
module.exports = class Bug extends Command {
  constructor(client) {
    super(client, {
      name: "bug",
      group: "utilities",
      aliases: ["report", "bugs"],
      memberName: "bug",
      description: "Report any and all bugs here",
      examples: [`${config.prefix}bug`],
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
      title: "Bugs?",
      url: "https://github.com/mebrooks01/Mars-Bot/issues",
      description: `If you found a bug in Mars Bot please report it on the Git hub repository\nhttps://github.com/mebrooks01/Mars-Bot/issues\nOr join our server and talk to us about it\n${invite}`,
      color: this.client.config.embed_color,
      timestamp: new Date(),
      thumbnail: {
        url: this.client.config.pfp,
      },
      footer: {
        text: "Photo Credit: NASA/JPL-Caltech",
        icon_url: "",
      },
    });
  }
};
