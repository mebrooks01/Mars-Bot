const Commando = require("discord.js-commando");
const path = require("path");
const config = require("./config.json");
const axios = require("axios");
const moment = require("moment");
const schedule = require("node-schedule");
const sqlite = require("sqlite");
const { CommandoClient } = require("discord.js-commando");
const mysql = require("mysql2/promise");
const mysqlProvider = require("commando-provider-mysql");
const prettyMilliseconds = require("pretty-ms");
const token = config.token;
const api_key = config.api_key;
const prefix = config.prefix;
const invite = config.invite;
const owner_id = config.user_id.owner;

const client = new Commando.CommandoClient({
  commandPrefix: prefix,
  owner: owner_id,
  invite: invite,
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
    console.log(
      `Successfully successfully to mysql\nDB Host: ${config.mysql.host}\nDB User: ${config.mysql.user}\nDB Name: ${config.mysql.db}`
    );
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
  let now = Date();
  console.log(`Logged in as ${client.user.tag} at ${now}`);
  client.user.setActivity(`${prefix}Help for help.`, { type: "WATCHING" });
  axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)
    .then((res) => {
      console.log(res.headers);
    })
    .catch(function (error) {
      console.log(error);
    });

  const rule = new schedule.RecurrenceRule();
  (rule.hour = 12), (rule.minute = 00), (rule.tz = "Etc/UTC");

  const job = schedule.scheduleJob(rule, function () {
    let date = moment().utcOffset(-12).format("YYYY-M-D");
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${api_key}`
      )
      .then((res) => {
        client.channels.cache.get(client.config.channel_id.apod_for_main).send({
          embed: {
            title: res.data.title,
            url: res.data.url,
            description: res.data.explanation,
            color: "#5A2017",
            image: {
              url: res.data.url,
            },
          },
        });
      })
      .catch(function (error) {
        console.log(error.stack);
      });
  });
});
client.on("error", console.error);
client.login(token);
