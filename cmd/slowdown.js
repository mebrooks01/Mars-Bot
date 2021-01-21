module.exports = {
    name: 'slowmode',
    description: 'bugs?',
    execute(message, args) {
        if (!args.length) {
            message.channel.send({
                embed: {
                    description: "Please provide a time in sec to set the slowmode to.",
                    color: "#5A2017",
                },
            });
            return;
        }
        const amount = parseInt(args[0]);
        if (isNaN(amount)) {
            return message.reply("That does not seem to be a valid number.");
        } else if (amount < 0) {
            return message.reply("How would that work? Time travel?");
        } else {
            message.channel.setRateLimitPerUser(Math.round(amount));
            message.channel.send({
                embed: {
                    description: "Slowmode set to `" + Math.round(amount) + "sec`.",
                    color: "#5A2017",
                },
            });
        }
    }
}