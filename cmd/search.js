const { Message } = require("discord.js");
const axios = require("axios");
const moment = require("moment");

module.exports = {
  name: "search",
  description: "used to test parts of the bot",
  execute(message, args) {
    if (!args.length) {
      message.channel.send(
        "Please Provide a search term \n `=search mars rover` or `=search the moon landing`"
      );
      return;
    } else if (args[0].length) {
      search_term = message.content.slice(8).replace(/\s/g,"%20");
      date = moment().utcOffset(-12).format("YYYY-M-D");
      console.log(search_term)

      axios
        .get("https://images-api.nasa.gov/search?q=" + search_term)
        .then((res) => {
          if (res.data.collection.metadata.total_hits == 0) {
            message.reply('that search term found no results')
            return
          }
          img = res.data.collection.items[1].links[0].href.replace(/\s/g,"%20");
          data = res.data.collection.items[1].data[0];

          message.channel.send({
            embed: {
              title: data.title,
              url: img,
              description:"**Taken on: **" + data.date_created.slice(0, 10).split(/ +/) + "\n" + data.description,
              color: "#5A2017",
              image: {
                url: img,
              },
            },
          });
        })
        .catch(function (error) {
          console.log(error)
          number = 1000;
          nb = Math.floor(Math.random() * (number - 1 + 1)) + 1;
          if (nb == 1) {
            message.channel.send(
              "Somethings wrong and I can feel it. If you think this is a bug use `=bug` to report it\nhttps://cdn.discordapp.com/attachments/744437045799419965/772676807795146782/fetchimage.webp"
            );
          } else message.channel.send("Something whent wrong. If you think this is a bug use `=bug` to report it");
        });
    }
  },
};
