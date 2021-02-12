const Commando = require("discord.js-commando");
const mysqlProvider = require("commando-provider-mysql");
const mysql = require("mysql2/promise");
const axios = require("axios");
const schedule = require("node-schedule");
const moment = require("moment");
const chalk = require("chalk");
const fs = require("fs");
const path = require("path");
const config = require("./config.json");
const load = require("./load");
const dpod = require("./dpod");

const client = new Commando.CommandoClient({
  commandPrefix: config.prefix,
  owner: config.user_id.owner,
  invite: config.invite,
  unknownCommandResponse: false,
});
client.config = config;
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

mysql
  .createConnection({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.pwd,
    database: config.mysql.db,
  })
  .then((db) => {
    client.setProvider(new mysqlProvider(db));
    db_connect = true;
  });

fs.readdir("./events/", (err, files) => {
  if (error) return console.log(chalk.red(error));
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let properties = require(`./functions/${file}`);
    let functionName = file.split(".")[0];
    client.functions[functionName] = properties;
  });
});

client.once("ready", () => {
  client.user.setActivity(
    `${config.prefix}Help for help. And ${this.client.guilds.cache.size}`,
    {
      type: "WATCHING",
    }
  );
  login = true;
  axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=${config.api_key}`)
    .then((res) => {
      api = true;
      var res = res;
    })
    .catch(function (error) {
      console.log(chalk.red(error));
      api = false;
    });

  if (client.config.dpod == true) {
    dpod.execute();
  }
});
if (db_connect !== true) db_connect = false;
if (login !== true) login = false;
if (api !== true) api = false;
let info = { db: db_connect, login: login, api: api };
load.execute(info, res);
client.on("error", console.error);
client.login(config.token);
