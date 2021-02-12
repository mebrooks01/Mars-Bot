const Commando = require("discord.js-commando");
const mysqlProvider = require("commando-provider-mysql");
const mysql = require("mysql2/promise");
const axios = require("axios");
const schedule = require("node-schedule");
const moment = require("moment");
const chalk = require("chalk");
const path = require("path");
const config = require("./config.json");
const load = require("./load");
const dpod = require("./dpod");
const join = require("./events/join");
const leave = require("./events/leave");

const client = new Commando.CommandoClient({
  commandPrefix: config.prefix,
  owner: config.user_id.owner,
  invite: config.invite,
  unknownCommandResponse: false,
});
client.config = config;

mysql
  .createConnection({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.pwd,
    database: config.mysql.db,
  })
  .then((db) => {
    client.setProvider(new mysqlProvider(db));
  });

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ["missions", "I have info on all of there missions"],
    ["api calls", "I also have access to images for these"],
    ["utilities", "Other useful commands"],
  ])
  .registerDefaultGroups()
  .registerDefaultCommands({ unknownCommand: false })
  .registerCommandsIn(path.join(__dirname, "commands"));

client.once("ready", () => {
  client.user.setActivity(`${config.prefix}Help for help.`, {
    type: "WATCHING",
  });

  axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=${config.api_key}`)
    .then((res) => {})
    .catch(function (error) {
      console.log(error);
    });

  if (client.config.dpod == true) {
    dpod.execute();
  }
});

client.on("guildCreate", (guild) => {
  join.execute(guild);
});
client.on("guildDelete", (guild) => {
  leave.execute(guild);
});
client.on("error", console.error);
client.login(config.token);
