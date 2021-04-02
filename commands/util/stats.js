const { Command } = require('discord.js-commando')
const config = require('$root/config.json')
const mission = require('$root/mission.json')
const prettyMilliseconds = require('pretty-ms')
const count = require('$util/count')

module.exports = class Stats extends Command {
  constructor(client) {
    super(client, {
      name: 'stats',
      group: 'util',
      memberName: 'stats',
      description: 'Find Information about the Red Planet',
      clientPermissions: ['EMBED_LINKS'],
      throttling: config.command_throttling.utilities,
    })
  }

  run(message) {
    count.cmdCount++
    message.embed({
      title: "Mars Bot's Statistics",
      url: '',
      description:
        '**Client Info**\n```asciidoc\n' +
        `Servers   :: ${
          this.client.guilds.cache.size
        }\nWS Ping   :: ${Math.round(
          this.client.ws.ping,
        )}ms\nUptime    :: ${prettyMilliseconds(
          this.client.uptime,
        )}\nCmds Run  :: ${count.cmdCount} (since last restart)` +
        '```',
      color: config.embed_color,
      timestamp: new Date(),
      thumbnail: { url: config.pfp },
      footer: { text: mission.credit },
    })
  }
}
