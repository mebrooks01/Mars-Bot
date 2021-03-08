const { Command } = require('discord.js-commando')
const config = require('$root/config.json')
const mission = require('$root/mission.json')
const prettyMilliseconds = require('pretty-ms')

module.exports = class Stats extends Command {
  constructor(client) {
    super(client, {
      name: 'stats',
      group: 'utilities',
      aliases: ['stats'],
      memberName: 'stats',
      description: 'Find Information about the Red Planet',
      examples: [`${config.prefix}`],
      clientPermissions: ['EMBED_LINKS'],
      throttling: config.command_throttling.utilities,
    })
  }

  run(message) {
    message.embed({
      title: "Mars Bot's Statistics",
      url: '',
      description:
        '**Client Info**\n```asciidoc\n' +
        `Servers   :: ${
          this.client.guilds.cache.size
        }\nWS Ping   :: ${Math.round(
          this.client.ws.ping,
        )}ms\nUptime    :: ${prettyMilliseconds(this.client.uptime)}` +
        '```',
      color: config.embed_color,
      timestamp: new Date(),
      thumbnail: { url: config.pfp },
      footer: { text: mission.credit },
    })
  }
}
