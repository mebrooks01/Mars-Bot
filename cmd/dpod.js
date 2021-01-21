const { Message } = require("discord.js");
const axios = require("axios");
const moment = require('moment');

module.exports = {
    name: "dpod",
    description: "used to test parts of the bot",
    execute(message, args, client) {
        if (message.guild.id == client.config.serverid.main_server) {
            channelid = client.config.channelid.apod_for_main
        }

        date = moment().utcOffset(-12).format("YYYY-M-D")
        axios
            .get(
                "https://api.nasa.gov/planetary/apod?date=" + date + "&api_key=RfChsgY4x5bxykBYjbmfyrYo7hawtVthuvietqgp"
            )
            .then((res) => {
                client.channels.cache.get(channelid).send({
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
                reply.send('daily apod fail check console for more')
            })
    }
};