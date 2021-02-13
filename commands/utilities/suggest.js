const { Command } = require('discord.js-commando')
const moment = require('moment')
const config = require('$root/config.json')
module.exports = class NAME extends Command {
  constructor(client) {
    super(client, {
      name: 'suggest',
      group: 'utilities',
      aliases: ['suggestions', 'suggestion', 'ideas', 'idea'],
      memberName: 'suggest',
      description: 'Give us a suggestion',
      examples: [`${config.prefix}suggest`],
      clientPermissions: [
        'SEND_MESSAGES',
        'EMBED_LINKS',
        'ATTACH_FILES',
        'READ_MESSAGE_HISTORY',
      ],
      guildOnly: false,
      ownerOnly: false,
      throttling: {
        usages: 2,
        duration: 1,
      },
    })
  }
  run(message) {
    message.embed({
      title: 'Suggestions?',
      url: 'https://github.com/mebrooks01/Mars-Bot/issues',
      description: `If you have a suggest for Mars Bot please post it on the Git hub repository\nhttps://github.com/mebrooks01/Mars-Bot/issues\nOr join our server and talk to us about it\n${config.invite}`,
      color: this.client.config.embed_color,
      timestamp: new Date(),
      thumbnail: {
        url: this.client.config.pfp,
      },
      footer: {
        text: 'Photo Credit: NASA/JPL-Caltech',
        icon_url: '',
      },
    })
  }
}
