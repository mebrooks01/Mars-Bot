const { Command } = require('discord.js-commando')
const config = require('$root/config.json')

module.exports = class Help extends Command {
  constructor(client) {
    super(client, {
      name: 'lol',
      group: 'util',
      aliases: ['command', 'cmds'],
      memberName: 'bug',
      description:
        'Displays a list of available commands, or detailed information for a specified command.',
      examples: [`${config.prefix}help [command]`],
      clientPermissions: ['EMBED_LINKS'],
      nsfw: true,
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
  run(message, command) {
    let cmd = command.toLowerCase()
    if (cmd !== '') {
      return
    }
  }
}
