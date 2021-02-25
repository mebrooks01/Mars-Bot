const { Command } = require('discord.js-commando')
module.exports = class Test extends Command {
  constructor(client) {
    super(client, {
      name: 'test',
      group: 'utilities',
      aliases: ['testing'],
      memberName: 'testing',
      description: 'A Command used for testing the bot',
      examples: ['=test'],
      clientPermissions: [
        'SEND_MESSAGES',
        'EMBED_LINKS',
        'ATTACH_FILES',
        'READ_MESSAGE_HISTORY',
      ],
      guildOnly: false,
      ownerOnly: true,
      throttling: {
        usages: 2,
        duration: 1,
      },
    })
  }
  run(message) {
    try {
      message.say('tested')
    } catch (err) {
      message.say('failed')
    }
  }
}
