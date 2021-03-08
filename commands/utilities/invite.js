const { Command } = require('discord.js-commando')
const config = require('$root/config.json')
const mission = require('$root/mission.json')

module.exports = class Invite extends Command {
  constructor(client) {
    super(client, {
      name: 'invite',
      group: 'utilities',
      aliases: ['join', 'add', 'invites'],
      memberName: 'invite',
      description: 'Invite me to your server',
      examples: [`${config.prefix}invite`],
      clientPermissions: ['EMBED_LINKS'],
      throttling: config.command_throttling.utilities,
    })
  }

  run(message) {
    let info = mission.other.invite

    message.embed({
      title: info.title,
      url: info.url,
      description: info.info,
      color: config.embed_color,
      timestamp: new Date(),
      thumbnail: { url: config.pfp },
      footer: { text: mission.credit },
    })
  }
}
