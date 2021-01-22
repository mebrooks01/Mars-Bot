const { Command } = require("discord.js-commando");
const axios = require("axios");
const moment = require("moment");
module.exports = class Test extends Command {
  constructor(client) {
    super(client, {
      name: "test",
      group: "utilities",
      aliases: ["testing"],
      memberName: "testing",
      description: "A Command used for testing the bot",
      examples: ["=test"],
      guildOnly: false,
      ownerOnly: true,
      throttling: {
        usages: 2,
        duration: 1,
      },
    });
  }
  run(message) {
    message.say("tested");
  }
};
