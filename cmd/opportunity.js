const { Message } = require("discord.js");
const axios = require("axios");
const moment = require('moment');

module.exports = {
  name: "opportunity",
  description: "used to test parts of the bot",
  execute(message, args) {
    date = moment().utcOffset(-12).format("YYYY-M-D")
    if (!args.length) {
      message.channel.send({
        embed: {
          title: "Mars Exploration Rover Opportunity",
          description: "**API data available for this mission** Do `=opportunity image (sol) (page number)`\nLaunched on July 8, 2003\nLaunched from Cape Canaveral Air Force Station, Florida\nLanded on January 25, 2004\nLanded at Meridiani Planum\nMission Complete, ended on February 13, 2019\nMore Info at:\nhttps://mars.nasa.gov/mars-exploration/missions/mars-exploration-rovers/",
          color: "#5A2017",
          image: {
            url:
              "https://mars.nasa.gov/system/content_pages/main_images/365_MER-1280.jpg",
          },
        },
      });
      return;
    } else if (args[0] === "last") {
      message.channel.send({
        embed: {
          title: "Opportunitys last message",
          description: "My batterys are low and its getting dark",
          color: "#5A2017",
          image: {
            url:
              "https://mars.nasa.gov/mer/gallery/all/1/p/5111/1P581919922EFFD2FCP2682L8M1-BR.JPG",
          },
        },
      });
      return;
    } else if (args[0] === "image") {
      if (!args[1]) {
        message.reply('please provide a sol you want to search for\n`=opportunity image (sol) (page number)`')
        return
      }
      if (!args[2]) {
        message.reply('please provide a page number you want to search for\n`=opportunity image (sol) (page number)`')
        return
      }
      const amount = parseInt(args[1]);
      if (isNaN(amount)) {
        return message.reply("that does not seem to be a valid number. Please provide a sol to search for");
      } else if (amount < 1 || amount > 51111) {
        return message.reply("There are no photos for that sol please choose a number between 1 and 5111");
      }
      const amount1 = parseInt(args[2]);
      if (isNaN(amount1)) {
        return message.reply("that does not seem to be a valid number. Please provide a page number to look for");
      }
      sol = amount
      pgnb = amount1
      axios
        .get("https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=" + sol + "&api_key=RfChsgY4x5bxykBYjbmfyrYo7hawtVthuvietqgp")
        .then((res) => {
          img = res.data.photos[pgnb - 1].img_src
          data = res.data.photos[pgnb - 1]
          cam = res.data.photos[pgnb - 1].camera
          rover = res.data.photos[pgnb - 1].rover

          message.channel.send({
            embed: {
              title: "Photo from " + rover.name + "'s from " + cam.full_name,
              url: img,
              description: "**Rover Name: **" + rover.name + "\n**Mission Status: **" + rover.status + "**\nSol: **" + data.sol + "\n**Date: **" + data.earth_date + "\n**Camera Name: **" + cam.full_name + " (" + cam.name + ")\n**Photo ID: **" + data.id,
              color: "#5A2017",
              image: {
                url: img,
              },
            },
          })

        })
        .catch(function (error) {
          number = 1000;
          nb = Math.floor(Math.random() * (number - 1 + 1)) + 1;
          if (nb == 1) {
            message.channel.send("Somethings wrong and I can feel it. If you think this is a bug use `=bug` to report it\nhttps://cdn.discordapp.com/attachments/744437045799419965/772676807795146782/fetchimage.webp")
          } else
            message.channel.send('Something whent wrong. If you think this is a bug use `=bug` to report it')
        })

    } else
      message.reply("Unknown argument please use `=opportunity` for info about the mission and `=opportunity image (sol)` to find an search an image from a soul (sol must be a number)");
  },
};