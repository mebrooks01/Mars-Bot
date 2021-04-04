const { Command } = require('discord.js-commando')
const config = require('$root/config.json')
const count = require('$util/count')

module.exports = class Test extends Command {
  constructor(client) {
    super(client, {
      name: 'test',
      group: 'util',
      aliases: ['testing'],
      memberName: 'test',
      description: 'A Command used for testing whatever I need',
      ownerOnly: true
    })
  }

  async run(message) {
    count.cmdCount++
  }
}
