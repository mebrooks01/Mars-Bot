const { Message } = require("discord.js");
const axios = require("axios");
const moment = require('moment');

module.exports = {
    name: "curiosity",
    description: "used to test parts of the bot",
    execute(message, args) {
        date = moment().format("YYYY-M-D")
        date2 = moment().format("YYYY/M/D")
        firstDate = new Date("6/6/2012"),
            secondDate = new Date(date2),
            timeDifference = Math.abs(secondDate.getTime() - firstDate.getTime());
        differentDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
        sol_passed = differentDays * 0.9732442967141608

        if (!args.length) {
            message.channel.send({
                embed: {
                    title: "Mars Science Laboratory Curiosity",
                    description: "**API data available for this mission** Do `=curiosity image (sol) (page number)`\nLaunched on November 26, 2011\nLaunched from Cape Canaveral Air Force Station, Florida\nLanded on August 6, 2012\nLanded at Gale Crater, Mars\nMission Ongoing\nMore Info at:\nhttps://mars.nasa.gov/mars-exploration/missions/mars-science-laboratory/",
                    color: "#5A2017",
                    image: {
                        url:
                            "https://mars.nasa.gov/system/content_pages/main_images/365_MER-1280.jpg",
                    },
                },
            });
            return;
        } else if (args[0] === "image") {
            if (!args[1]) {
                message.reply('please provide a sol you want to search for\n`=curiosity image (sol) (page number)`')
                return
            }
            if (!args[2]) {
                message.reply('please provide a page number you want to search for\n`=curiosity image (sol) (page number)`')
                return
            }
            const amount = parseInt(args[1]);
            if (isNaN(amount)) {
                return message.reply("that does not seem to be a valid number. Please provide a sol to search for");
            }
            const amount1 = parseInt(args[2]);
            if (isNaN(amount1)) {
                return message.reply("that does not seem to be a valid number. Please provide a page number to look for");
            }
            sol = amount
            pgnb = amount1
            axios
                .get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=" + sol + "&api_key=RfChsgY4x5bxykBYjbmfyrYo7hawtVthuvietqgp")
                .then((res) => {
                    if (!res.data.photos[pgnb - 1]) {
                        message.reply('No results found')
                        return
                    }
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
                    console.log(error)
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
