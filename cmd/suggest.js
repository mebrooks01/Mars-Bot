module.exports = {
    name: 'suggest',
    description: 'used to test parts of the bot',
    execute(message, args) {
        message.channel.send({
            embed: {
                title: "Suggestions", description: "Have an idea? Join are discord server to giver us your ideas\nhttps://discord.gg/RAhFPEp", color: "#5A2017", image: {
                    url: ""
                }
            }
        });
    }
}