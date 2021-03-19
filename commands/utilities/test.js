const { Command } = require('discord.js-commando')
const count = require('$util/count')
const latest = require('$util/latest')

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
    count.cmdCount++
    latest.execute('curiosity', message)
  }
}
