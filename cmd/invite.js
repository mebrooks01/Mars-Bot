module.exports = {
    name: 'invite',
    description: 'invite me to your discord',
    execute(message, args) {
        message.channel.send({ embed: { title: "Invite", description: "Invite me to your discord using the following link.\nhttps://discord.com/oauth2/authorize?client_id=760605516384305224&scope=bot&permissions=1141242945", color: "#5A2017" } })
    }
}