module.exports = {
    name: 'help',
    description: 'used to test parts of the bot',
    execute(message, args) {
        message.channel.send({
            embed: {
                title: "Help", description: "My Prefix is `=` as of now this can't be changed\nMy Commands are the following\n`=help` Shows this message\n`=support` Need support with the bot this is the command for you\n`=bug` Have a bug use this command to report it\n`=suggest` Have a suggest use this to give us your oppion\n`=invite` Want me in your discord use this command to do it\n`=missions` See all of the missions I have info about", color: "#5A2017", image: {
                    url: ""
                }
            }
        });
    }
}