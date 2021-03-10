const { Command } = require('discord.js-commando')
const count = require('$util/count')

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
    message.say(count.cmdCount)
    count.cmdCount++
    message.say(count.cmdCount)
  }
}
