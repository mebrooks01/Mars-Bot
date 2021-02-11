const { Command } = require("discord.js-commando");
const moment = require("moment");
const config = require("./../../config.json");
const prettyMilliseconds = require("pretty-ms");

module.exports = class Stats extends Command {
  constructor(client) {
    super(client, {
      name: "stats",
      group: "utilities",
      aliases: ["stats"],
      memberName: "stats",
      description: "Find Information about the Red Planet",
      examples: [`${config.prefix}`],
      clientPermissions: [
        "SEND_MESSAGES",
        "EMBED_LINKS",
        "ATTACH_FILES",
        "READ_MESSAGE_HISTORY",
      ],
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
      title: "Mars Bot's Statistics",
      url: "",
      description:
        "**Client Info**\n```asciidoc\n" +
        `Servers   :: ${
          this.client.guilds.cache.size
        }\nWS Ping   :: ${Math.round(
          this.client.ws.ping
        )}ms\nUptime    :: ${prettyMilliseconds(this.client.uptime)}` +
        "```",
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
