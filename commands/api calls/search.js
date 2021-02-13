const { Command } = require("discord.js-commando");
const axios = require("axios");
const moment = require("moment");
const config = require("$root/config.json");
module.exports = class Search extends Command {
  constructor(client) {
    super(client, {
      name: "search",
      group: "api calls",
      aliases: ["image", "images", "lookup", "photo", "photos"],
      memberName: "search",
      description: "Look for an image in the NASA image library.",
      examples: [`${config.prefix}search <search term>`],
      clientPermissions: [
        "SEND_MESSAGES",
        "EMBED_LINKS",
        "ATTACH_FILES",
        "READ_MESSAGE_HISTORY",
      ],
      guildOnly: false,
      ownerOnly: false,
      throttling: {
        usages: 3,
        duration: 10,
      },
      args: [
        {
          key: "search_term",
          prompt: "Please choose a search term to look for",
          type: "string",
        },
      ],
    });
  }
  run(message, { search_term }) {
    let date = moment().utcOffset(-12).format("YYYY-M-D");

    axios
      .get("https://images-api.nasa.gov/search?q=" + search_term)
      .then((res) => {
        if (res.data.collection.metadata.total_hits == 0) {
          message.reply("that search term found no results");
          return;
        }
        let img = res.data.collection.items[1].links[0].href.replace(
          /\s/g,
          "%20"
        );
        let data = res.data.collection.items[1].data[0];

        message.channel.send({
          embed: {
            title: data.title,
            url: img,
            description: `**Taken on:** ${data.date_created
              .slice(0, 10)
              .split(/ +/)}\n${data.description}`,
            color: this.client.config.embed_color,
            timestamp: new Date(),
            image: {
              url: img,
            },
          },
        });
      })
      .catch(function (error) {
        console.log(error.stack);
        message.say(
          `An error occurred while running the command: ${error}\nFor help solving this problem please join are support server: ${invite}`
        );
      });
  }
};
