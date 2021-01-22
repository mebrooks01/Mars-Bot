module.exports = {
  name: "support",
  description: "need help join the discord",
  execute(message, args) {
    message.channel.send({
      embed: {
        title: "Support",
        description:
          "Join the comunity discord for advanced support with the bot and get a sneak peak into the development of this bot.\nhttps://discord.gg/RAhFPEp",
        color: "#5A2017",
      },
    });
  },
};
