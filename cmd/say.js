module.exports = {
    name: "say",
    description: "used to test parts of the bot",
    execute(message, args) {
        send = message.content.slice(5)
        if (!args.length) {
            message.reply('Please provide a message to send')
            return;
        } else
            message.channel.send(send);
        console.log(message.author.toString() + ' sent ' + send)

    }
};