const config = require("./../config.json");
module.exports = async (client, guild) => {
  client.user.setActivity(
    `${config.prefix}Help for help. And ${this.client.guilds.cache.size}`,
    {
      type: "WATCHING",
    }
  );
};
