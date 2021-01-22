const Commando = require("discord.js-commando");
const path = require("path");
const config = require("./config.json");
const axios = require("axios");
const moment = require("moment");
const token = config.token;
const api_key = config.api_key;
const prefix = config.prefix;
const invite = config.invite;
const owner_id = config.user_id.owner;

const client = new Commando.CommandoClient({
  commandPrefix: prefix,
  owner: owner_id,
  invite: invite,
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
  .registerDefaultCommands()
  .registerCommandsIn(path.join(__dirname, "commands"));

client.once("ready", () => {
  let now = Date();
  console.log(`Logged in as ${client.user.tag} at ${now}`);
  client.user.setActivity(`=Help for help.`, { type: "WATCHING" });
  console.log(client.config);
  axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)
    .then((res) => {
      console.log(res.headers);
    })
    .catch(function (error) {
      console.log(error);
    });
});
client.on("error", console.error);
client.login(token);
