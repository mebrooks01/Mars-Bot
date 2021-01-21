module.exports = {
    name: 'bug',
    description: 'bugs?',
    execute(message, args) {
        message.channel.send({
            embed: {
                title: "Bugs?", description: "Think you found a bug join the discord server to report it so we can fix it\nhttps://discord.gg/RAhFPEp~", color: "#5A2017", image: {
                    url: ""
                }
            }
        });
    }
}