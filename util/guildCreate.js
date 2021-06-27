const config = require('$root/config.json')
const mission = require('$root/mission.json')
const count = require('$util/count')

module.exports = {
  /**
   * ran when bot is added to a new guild
   * sends welcome message + logs new join
   *
   * @param  {object} client bots client object
   * @param  {object} guild guild object
   */
  execute(client, guild) {
    //Finds Top Channel of the server
    const channel = guild.channels.cache.find(
      channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES')
    )

    //Sends Welcome info
    channel.send({
      embed: {
        title: 'Thank You for adding Mars Bot',
        url: 'https://github.com/mebrooks01/Mars-Bot/blob/main/README.md',
        description: `Thank you for adding Mars Bot to your server. For more information use ${config.prefix}help or check out my github. https://github.com/mebrooks01/Mars-Bot/blob/main/README.md`,
        color: config.embed_color,
        timestamp: new Date(),
        thumbnail: { url: config.pfp },
        footer: { text: mission.credit }
      }
    })

    //Send message in bot log channel
    client.channels.cache.get(config.log_channel).send({
      embed: {
        title: 'Mars Bot was added to a new guild.',
        description: `Guild Name: ${guild.name}\nID: ${guild.id}\nMembers: ${guild.memberCount}\nNew Server Count: ${client.guilds.cache.size}`,
        color: config.embed_color,
        timestamp: new Date(),
        thumbnail: { url: config.pfp },
        footer: { text: mission.credit }
      }
    })
    count.guildChange(guild, client)
  }
}
