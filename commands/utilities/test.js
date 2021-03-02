const { Command } = require('discord.js-commando')
module.exports = class Test extends Command {
  constructor(client) {
    super(client, {
      name: 'test',
      group: 'utilities',
      aliases: ['testing'],
      memberName: 'testing',
      description: 'A Command used for testing whatever I need',
      examples: ['=test'],
      ownerOnly: true,
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
