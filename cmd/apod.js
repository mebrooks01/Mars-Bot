const { Message } = require("discord.js");
const axios = require("axios");
const moment = require('moment');

module.exports = {
    name: "apod",
    description: "used to test parts of the bot",
    execute(message, args) {

        date = moment().utcOffset(-12).format("YYYY-M-D")
        axios
            .get(
                "https://api.nasa.gov/planetary/apod?date=" + date + "&api_key=RfChsgY4x5bxykBYjbmfyrYo7hawtVthuvietqgp"
            )
            .then((res) => {
                message.channel.send({
                    embed: {
                        title: res.data.title,
                        url: res.data.url,
                        description: res.data.explanation,
                        color: "#5A2017",
                        image: {
                            url:
                                res.data.url,
                        },
                    },
                });
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
    }
};