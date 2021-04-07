const config = require('$root/config.json')
const mission = require('$root/mission.json')

module.exports = {
  execute(client, guild) {
    client.channels.cache.get(config.log_channel).send({
      embed: {
        title: 'Mars Bot was removed from a guild.',
        description: `Guild Name: ${guild.name}\nID: ${guild.id}\nMembers: ${guild.memberCount}\nNew Server Count: ${client.guilds.cache.size}`,
        color: config.embed_color,
        timestamp: new Date(),
        thumbnail: { url: config.pfp },
        footer: { text: mission.credit }
      }
    })
  }
}
