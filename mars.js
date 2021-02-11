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
const chalk = require("chalk");
const error_log = chalk.red;
const warning_log = chalk.yellow;
const success_log = chalk.green;
const token = config.token;
const api_key = config.api_key;
const prefix = config.prefix;
const invite = config.invite;
const owner_id = config.user_id.owner;
const host = config.mysql.host;
const user = config.mysql.user;
const pwd = config.mysql.pwd;
const database = config.mysql.db;

const client = new Commando.CommandoClient({
  commandPrefix: prefix,
  owner: owner_id,
  invite: invite,
  unknownCommandResponse: false,
});
client.config = config;

mysql
  .createConnection({
    host: host,
    user: user,
    password: pwd,
    database: database,
  })
  .then((db) => {
    client.setProvider(new mysqlProvider(db));
    console.log(success_log(`Successfully successfully to mysql`));
    console.log(
      chalk.bold(`Username: `) + user + chalk.bold(`\nDB Name: `) + database
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
      if (res.headers) {
      } else console.log();
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

client.on("guildCreate", (guild) => {
  console.log("added to server");
  const channel = guild.channels.cache.find(
    (channel) =>
      channel.type === "text" &&
      channel.permissionsFor(guild.me).has("SEND_MESSAGES")
  );
  channel.send({
    embed: {
      title: "Thank You for adding Mars Bot",
      url: "https://github.com/mebrooks01/Mars-Bot/blob/main/README.md",
      description: `Thank you for adding Mars Bot to your server. For more information use ${prefix}help or check out my github. https://github.com/mebrooks01/Mars-Bot/blob/main/README.md`,
      color: "#5A2017",
      thumbnail: {
        url:
          "https://mars.nasa.gov/system/resources/detail_files/25058_PIA23900-web.jpg",
      },
      footer: {
        text: "Photo Credit: NASA/JPL-Caltech",
        icon_url: "",
      },
    },
  });
});
client.on("guildDelete", (guild) => {
  console.log("removed");
});
client.on("error", console.error);
client.login(token);
