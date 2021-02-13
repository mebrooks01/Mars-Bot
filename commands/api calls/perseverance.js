const { Command } = require('discord.js-commando')
const axios = require('axios')
const moment = require('moment')
const config = require('$root/config.json')
module.exports = class Perseverance extends Command {
  constructor(client) {
    super(client, {
      name: 'perseverance',
      group: 'api calls',
      aliases: ['perseverance'],
      memberName: 'perseverance',
      description:
        'Get info about perseverance and look up the images it has taken',
      examples: [
        `${config.prefix}perseverance`,
        `${config.prefix}perseverance <'info' | 'image'> <sol> <page number>`,
      ],
      clientPermissions: [
        'SEND_MESSAGES',
        'EMBED_LINKS',
        'ATTACH_FILES',
        'READ_MESSAGE_HISTORY',
      ],
      guildOnly: false,
      ownerOnly: false,
      throttling: {
        usages: 2,
        duration: 10,
      },
      args: [
        {
          key: 'type',
          prompt: 'Please choose if you are looking for an image or info',
          type: 'string',
          oneOf: ['info', `image`],
          default: 'info',
        },
        {
          key: 'sol',
          prompt: 'Please choose a sol to look for',
          type: 'integer',
          default: '',
        },
        {
          key: 'page_number',
          prompt: 'Please choose a page number to look for',
          type: 'integer',
          default: '',
        },
      ],
    })
  }
  run(message) {
    message.reply(
      'Currently Unavailable\nAs soon as Perseverance lands I will have info',
    )
    /*
    https://mars.nasa.gov/resources/25118/portrait-of-perseverance-and-ingenuity-artists-concept/
    if (type === "info") {
      message.embed({
        title: "",
        url: "",
        description: "",
        color: "#5A2017",
        image: {
          url: "",
        },
        footer: {
          text: "Credit: NASA/JPL-Caltech",
          icon_url: "",
        },
      });
      return;
    }
    if (type === "image") {
      if (!sol || !page_number) {
        message.reply(
          "Please choose a sol and or page number to look for\n`=curiosity image <sol> <page number>`"
        );
      } else {
        axios
          .get(`URL&api_key=${api_key}`)
          .then((res) => {
            if (!res.data.photos[page_number - 1]) {
              message.reply("No results found");
              return;
            }
            let img = res.data.photos[page_number - 1].img_src;
            let data = res.data.photos[page_number - 1];
            let cam = res.data.photos[page_number - 1].camera;
            let rover = res.data.photos[page_number - 1].rover;

            message.channel.send({
              embed: {
                title: "Photo from " + rover.name + "'s from " + cam.full_name,
                url: img,
                description: `**Rover Name:** ${rover.name}\n**Mission Status:** ${rover.status}\n**Sol:** ${data.sol}\n**Date:** ${data.earth_date}\n**Camera Name:** ${cam.full_name} (${cam.name})\n**Photo ID:** ${data.id}`,
                color: "#5A2017",
                image: {
                  url: img,
                },
                footer: {
                  text: "Photo Credit: NASA/JPL-Caltech",
                  icon_url: "",
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
    }
    */
  }
}
