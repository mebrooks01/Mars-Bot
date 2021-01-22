module.exports = {
  name: "test",
  description: "used to test parts of the bot",
  execute(message, args) {
    message.channel.send("tested\nand it worked");
  },
};
