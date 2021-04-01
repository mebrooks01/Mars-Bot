const { Command } = require('discord.js-commando')
const config = require('$root/config.json')
const count = require('$util/count')
let fields = []

module.exports = class Test extends Command {
  constructor(client) {
    super(client, {
      name: 'test',
      group: 'utilities',
      aliases: ['testing'],
      memberName: 'test',
      description: 'A Command used for testing whatever I need',
      ownerOnly: true,
      args: [
        {
          key: 'command',
          prompt: 'Which command would you like to view the help for?',
          type: 'string',
          default: '',
        },
      ],
    })
  }

  async run(message, { command }) {
    count.cmdCount++
  }
}
