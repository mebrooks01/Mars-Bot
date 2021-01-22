const { Client } = require("discord.js");

module.exports = {
  name: "send",
  description: "used to test parts of the bot",
  execute(message, args, client) {
    if (!args.length) {
      message.reply("Please provide a message to send and where to send it");
      return;
    } else {
      client.channels.cache.get(args[0]).send(sending);
    }
  },
};
