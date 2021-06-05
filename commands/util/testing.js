const { Command } = require('discord.js-commando')
const count = require('$util/count')

module.exports = class Test extends Command {
  constructor(client) {
    super(client, {
      name: 'testing',
      group: 'util',
      aliases: ['test'],
      memberName: 'testing',
      description: 'A Command used for testing whatever I need',
      ownerOnly: true
    })
  }

  async run(message) {
    count.cmdRun(this.name, this.group, message)
    message.say('lol')
  }
}
