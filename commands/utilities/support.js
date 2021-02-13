const { Command } = require('discord.js-commando')
const moment = require('moment')
const config = require('$root/config.json')
module.exports = class Support extends Command {
  constructor(client) {
    super(client, {
      name: 'support',
      group: 'utilities',
      aliases: ['support'],
      memberName: 'support',
      description: 'Get Help',
      examples: [`${config.prefix}support`],
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
      title: 'Support?',
      description: `Join the community discord for advanced support with the bot and get a sneak peak into the development of this bot.\n${config.invite}`,
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

module.exports = {
  name: '',
  description: 'need help join the discord',
  execute(message, args) {
    message.channel.send({
      embed: {
        title: 'Support',
        description:
          'Join the comunity discord for advanced support with the bot and get a sneak peak into the development of this bot.\nhttps://discord.gg/RAhFPEp',
        color: '#5A2017',
      },
    })
  },
}
