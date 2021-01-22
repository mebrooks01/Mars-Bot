const discord = require("discord.js");
const client = new discord.Client();
const fs = require("fs");
const axios = require("axios");
const moment = require("moment");
const { cpuUsage } = require("process");
const send = require("../cmd/send");
const talkedRecently = new Set();
client.config = require("../config.json");
const token = client.config.token;
const prefix = client.config.prefix;
const modfix = client.config.modfix;
const ownerid = client.config.userid.owner;
const devid = client.config.roleid.dev;
const adminid = client.config.roleid.admin;
const modid = client.config.roleid.mod;
const helperid = client.config.roleid.helper;
const main_server = client.config.serverid.main_server;
const api_key = client.config.api_key;

client.commands = new discord.Collection();

const commandFiles = fs
  .readdirSync("./cmd/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./cmd/${file}`);

  client.commands.set(command.name, command);
}

client.once("ready", () => {
  time = moment().utcOffset(-4).format("MM/DD/YY, HH:mm:SS");
  console.log(`Logged in as ${client.user.tag} at ` + time);
  client.user.setActivity(`=Help for help.`, { type: "WATCHING" });
});

var interval;
client.on("message", async (message) => {
  if (!message.content.startsWith(modfix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  time = moment().utcOffset(0).format("MM/DD/YY, HH:mm:SS ");

  if (
    message.member.roles.cache.has(helperid) ||
    message.member.roles.cache.has(modid) ||
    message.member.roles.cache.has(adminid) ||
    message.member.roles.cache.has(devid) ||
    message.author.id == ownerid
  ) {
    if (command === "slowmode") {
      client.commands.get(command).execute(message, args, client);
      console.log(
        modfix + command + " was used at " + time + "By: " + message.author.tag
      );
    }
    if (
      message.member.roles.cache.has(modid) ||
      message.member.roles.cache.has(adminid) ||
      message.member.roles.cache.has(devid) ||
      message.author.id == ownerid
    ) {
      if (
        message.member.roles.cache.has(adminid) ||
        message.member.roles.cache.has(devid) ||
        message.author.id == ownerid
      ) {
        if (
          message.member.roles.cache.has(devid) ||
          message.author.id == ownerid
        ) {
          if (command === "stats") {
            message.channel.send(
              "I am on " + client.guilds.cache.size + " servers."
            );
          }
          if (command === "start") {
            client.commands.get("dpod").execute(message, args, client);
            message.reply("DAPOD Started");
            interval = setInterval(function () {
              client.commands.get("dpod").execute(message, args, client);
            }, 86400000);
          } else if (command === "stop") {
            clearInterval(interval);
            message.reply("DAPOD Stopped");
          }
          if (command === "say") {
            message.delete();
            client.commands.get(command).execute(message, args, client, send);
            console.log(
              modfix +
                command +
                " was used at " +
                time +
                "By: " +
                message.author.tag
            );
          }
          if (command === "send") {
            message.delete();
            sending = message.content.slice(
              modfix.length + command.length + args[0].length + 2
            );
            client.commands
              .get(command)
              .execute(message, args, client, sending, modfix, command);
            console.log(
              modfix +
                command +
                " was used at " +
                time +
                "By: " +
                message.author.tag
            );
          }
          if (
            message.author.id === ownerid &&
            message.guild.id === main_server
          ) {
            if (command === "eval") {
              const clean = (text) => {
                if (typeof text === "string")
                  return text
                    .replace(/`/g, "`" + String.fromCharCode(8203))
                    .replace(/@/g, "@" + String.fromCharCode(8203));
                else return text;
              };
              try {
                const code = args.join(" ");
                let = eval(code);

                if (typeof evaled !== "string")
                  evaled = require("util").inspect(evaled);

                message.channel.send(clean(evaled), { code: "xl" });
              } catch (err) {
                message.channel.send(
                  `\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``
                );
              }
            }
          }
        }
      }
    }
  }
});

client.on("message", async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  time = moment().utcOffset(-4).format("MM/DD/YY, HH:mm:SS ");

  if (command == "ping") {
    if (talkedRecently.has(message.author.id)) {
      message.reply("Please wait 10 seconds before using a command again.");
    } else {
      message.channel.send(
        `My Ping is ${Date.now() - message.createdTimestamp}ms.`
      );
      console.log(
        prefix + command + " was used at " + time + "By: " + message.author.tag
      );
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 10000);
    }
  }
  if (command == "help") {
    if (talkedRecently.has(message.author.id)) {
      message.reply("Please wait 10 seconds before using a command again.");
    } else {
      client.commands.get(command).execute(message, args);
      console.log(
        "=" + command + " was used at " + time + "By: " + message.author.tag
      );
      //complete
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 10000);
    }
  }
  if (command == "support") {
    if (talkedRecently.has(message.author.id)) {
      message.reply("Please wait 10 seconds before using a command again.");
    } else {
      client.commands.get(command).execute(message, args);
      console.log(
        "=" + command + " was used at " + time + "By: " + message.author.tag
      );
      //complete
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 10000);
    }
  }
  if (command == "invite") {
    if (talkedRecently.has(message.author.id)) {
      message.reply("Please wait 10 seconds before using a command again.");
    } else {
      client.commands.get(command).execute(message, args);
      console.log(
        "=" + command + " was used at " + time + "By: " + message.author.tag
      );
      //complete
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 10000);
    }
  }
  if (command == "missions") {
    if (talkedRecently.has(message.author.id)) {
      message.reply("Please wait 10 seconds before using a command again.");
    } else {
      client.commands.get(command).execute(message, args);
      console.log(
        "=" + command + " was used at " + time + "By: " + message.author.tag
      );
      //complete
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 10000);
    }
  }
  if (command == "mars") {
    if (talkedRecently.has(message.author.id)) {
      message.reply("Please wait 10 seconds before using a command again.");
    } else {
      client.commands.get(command).execute(message, args);
      console.log(
        "=" + command + " was used at " + time + "By: " + message.author.tag
      );
      //complete
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 10000);
    }
  }
  if (command == "pathfinder") {
    if (talkedRecently.has(message.author.id)) {
      message.reply("Please wait 10 seconds before using a command again.");
    } else {
      client.commands.get(command).execute(message, args);
      console.log(
        "=" + command + " was used at " + time + "By: " + message.author.tag
      );
      //complete
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 10000);
    }
  }
  if (command == "polar-lander") {
    if (talkedRecently.has(message.author.id)) {
      message.reply("Please wait 10 seconds before using a command again.");
    } else {
      client.commands.get(command).execute(message, args);
      console.log(
        "=" + command + " was used at " + time + "By: " + message.author.tag
      );
      //complete
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 10000);
    }
  }
  if (command == "phoenix") {
    if (talkedRecently.has(message.author.id)) {
      message.reply("Please wait 10 seconds before using a command again.");
    } else {
      client.commands.get(command).execute(message, args);
      console.log(
        "=" + command + " was used at " + time + "By: " + message.author.tag
      );
      //complete
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 10000);
    }
  }
  if (command == "viking") {
    if (talkedRecently.has(message.author.id)) {
      message.reply("Please wait 10 seconds before using a command again.");
    } else {
      client.commands.get(command).execute(message, args);
      console.log(
        "=" + command + " was used at " + time + "By: " + message.author.tag
      );
      //complete
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 10000);
    }
  }
  if (command == "climate-orbiter") {
    if (talkedRecently.has(message.author.id)) {
      message.reply("Please wait 10 seconds before using a command again.");
    } else {
      client.commands.get(command).execute(message, args);
      console.log(
        "=" + command + " was used at " + time + "By: " + message.author.tag
      );
      //complete
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 10000);
    }
  }
  if (command == "global-surveyor") {
    if (talkedRecently.has(message.author.id)) {
      message.reply("Please wait 10 seconds before using a command again.");
    } else {
      client.commands.get(command).execute(message, args);
      console.log(
        "=" + command + " was used at " + time + "By: " + message.author.tag
      );
      //complete
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 10000);
    }
  }
  if (command == "observer") {
    if (talkedRecently.has(message.author.id)) {
      message.reply("Please wait 10 seconds before using a command again.");
    } else {
      client.commands.get(command).execute(message, args);
      console.log(
        "=" + command + " was used at " + time + "By: " + message.author.tag
      );
      //complete
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 10000);
    }
  }
  if (command == "mariner") {
    if (talkedRecently.has(message.author.id)) {
      message.reply("Please wait 10 seconds before using a command again.");
    } else {
      client.commands.get(command).execute(message, args);
      console.log(
        "=" + command + " was used at " + time + "By: " + message.author.tag
      );
      //complete
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 10000);
    }
  }
  if (command == "exomars") {
    if (talkedRecently.has(message.author.id)) {
      message.reply("Please wait 10 seconds before using a command again.");
    } else {
      client.commands.get(command).execute(message, args);
      console.log(
        "=" + command + " was used at " + time + "By: " + message.author.tag
      );
      //complete
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 10000);
    }
  }
  if (command == "maven") {
    if (talkedRecently.has(message.author.id)) {
      message.reply("Please wait 10 seconds before using a command again.");
    } else {
      client.commands.get(command).execute(message, args);
      console.log(
        "=" + command + " was used at " + time + "By: " + message.author.tag
      );
      //complete
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 10000);
    }
  }
  if (command == "mro") {
    if (talkedRecently.has(message.author.id)) {
      message.reply("Please wait 10 seconds before using a command again.");
    } else {
      client.commands.get(command).execute(message, args);
      console.log(
        "=" + command + " was used at " + time + "By: " + message.author.tag
      );
      //complete
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 10000);
    }
  }
  if (command == "mars-express") {
    if (talkedRecently.has(message.author.id)) {
      message.reply("Please wait 10 seconds before using a command again.");
    } else {
      client.commands.get(command).execute(message, args);
      console.log(
        "=" + command + " was used at " + time + "By: " + message.author.tag
      );
      //complete
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 10000);
    }
  }
  if (command == "odyssey") {
    if (talkedRecently.has(message.author.id)) {
      message.reply("Please wait 10 seconds before using a command again.");
    } else {
      client.commands.get(command).execute(message, args);
      console.log(
        "=" + command + " was used at " + time + "By: " + message.author.tag
      );
      //complete
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 10000);
    }
  }
  if (command == "perseverance") {
    if (talkedRecently.has(message.author.id)) {
      message.reply("Please wait 10 seconds before using a command again.");
    } else {
      client.commands.get(command).execute(message, args);
      console.log(
        "=" + command + " was used at " + time + "By: " + message.author.tag
      );
      //complete
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 10000);
    }
  }
  if (command == "curiosity") {
    if (talkedRecently.has(message.author.id)) {
      message.reply("Please wait 10 seconds before using a command again.");
    } else {
      client.commands.get(command).execute(message, args);
      console.log(
        "=" + command + " was used at " + time + "By: " + message.author.tag
      );
      //complete
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 10000);
    }
  }
  if (command == "opportunity") {
    if (talkedRecently.has(message.author.id)) {
      message.reply("Please wait 10 seconds before using a command again.");
    } else {
      client.commands.get(command).execute(message, args);
      console.log(
        "=" + command + " was used at " + time + "By: " + message.author.tag
      );
      //complete
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 10000);
    }
  }
  if (command == "spirit") {
    if (talkedRecently.has(message.author.id)) {
      message.reply("Please wait 10 seconds before using a command again.");
    } else {
      client.commands.get(command).execute(message, args);
      console.log(
        "=" + command + " was used at " + time + "By: " + message.author.tag
      );
      //complete
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 10000);
    }
  }
  if (command == "insight") {
    if (talkedRecently.has(message.author.id)) {
      message.reply("Please wait 10 seconds before using a command again.");
    } else {
      client.commands.get(command).execute(message, args);
      console.log(
        "=" + command + " was used at " + time + "By: " + message.author.tag
      );
      //complete
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 10000);
    }
  }
  if (command == "bug") {
    if (talkedRecently.has(message.author.id)) {
      message.reply("Please wait 10 seconds before using a command again.");
    } else {
      client.commands.get(command).execute(message, args);
      console.log(
        "=" + command + " was used at " + time + "By: " + message.author.tag
      );
      //complete
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 10000);
    }
  }
  if (command == "suggest") {
    if (talkedRecently.has(message.author.id)) {
      message.reply("Please wait 10 seconds before using a command again.");
    } else {
      client.commands.get(command).execute(message, args);
      console.log(
        "=" + command + " was used at " + time + "By: " + message.author.tag
      );
      //complete
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 10000);
    }
  }
  if (command == "search") {
    if (talkedRecently.has(message.author.id)) {
      message.reply("Please wait 10 seconds before using a command again.");
    } else {
      client.commands.get(command).execute(message, args);
      console.log(
        "=" + command + " was used at " + time + "By: " + message.author.tag
      );
      //complete
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 10000);
    }
  }
  if (command == "mission") {
    if (talkedRecently.has(message.author.id)) {
      message.reply("Please wait 10 seconds before using a command again.");
    } else {
      client.commands.get(command).execute(message, args);
      console.log(
        "=" + command + " was used at " + time + "By: " + message.author.tag
      );
      //complete
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 10000);
    }
  }
  if (command == "apod") {
    if (talkedRecently.has(message.author.id)) {
      message.reply("Please wait 10 seconds before using a command again.");
    } else {
      client.commands.get(command).execute(message, args);
      console.log(
        "=" + command + " was used at " + time + "By: " + message.author.tag
      );
      //complete
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 10000);
    }
  }
  if (command == "explore") {
    if (talkedRecently.has(message.author.id)) {
      message.reply("Please wait 10 seconds before using a command again.");
    } else {
      client.commands.get(command).execute(message, args);
      console.log(
        "=" + command + " was used at " + time + "By: " + message.author.tag
      );
      //complete
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 10000);
    }
  }
});
client.on("message", (message) => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") {
    client.channels.cache
      .get("788527431920123906")
      .send(
        "**From:** `" +
          message.author.tag +
          "(" +
          message.author.id +
          ")`\n**Message:\n**" +
          message.content
      );
  }
  if (!message.content.startsWith(modfix)) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (
    message.member.roles.cache.has(helperid) ||
    message.member.roles.cache.has(modid) ||
    message.member.roles.cache.has(adminid) ||
    message.member.roles.cache.has(devid) ||
    message.author.id == ownerid
  ) {
    if (command === "r") {
      sending = message.content.slice(
        modfix.length + command.length + args[0].length + 2
      );
      client.users.cache
        .get(args[0])
        .send("**From the mars bot team:** " + sending);
      message.channel.send("**" + message.author.tag + ":** " + sending);
    }
  }
});
client.login(token);
