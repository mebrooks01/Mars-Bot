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
      memberName: 'testing',
      description: 'A Command used for testing whatever I need',
      examples: [`${config.prefix}test`],
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
  async run(message, command) {
    await this.client.registry.groups.forEach(async (group) => {
      let cmdList = ''

      await group.commands.forEach(async (command) => {
        if (command.hidden === true) return
        cmdList += '•`' + command.name + '`'
        if (command.guildOnly === true) cmdList += `⚠️`
        if (command.nsfw === true) cmdList += `🔞`
        cmdList += ` ${command.description}\n`
      })

      await fields.push({ name: `**__${group.name}__**`, value: cmdList })
    })
    message.embed({
      title: 'Mars Bot Help',
      url: 'https://github.com/mebrooks01/Mars-Bot/blob/main/README.md',
      description: '**Key**:\n🔞: NSFW Command\n⚠️: Guild Only',
      fields,
      color: config.embed_color,
      timestamp: new Date(),
      thumbnail: { url: config.pfp },
    })
  }
}
