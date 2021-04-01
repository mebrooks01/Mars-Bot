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
      examples: [`${config.prefix}test`],
      ownerOnly: false,
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
    if (command !== '') {
      let cmdValid = false
      command = command

      await this.client.registry.commands.forEach(async (cmd) => {
        if (cmd.name == command || cmd.aliases.includes(command)) {
          cmdValid = true
          console.log(cmd)

          await message.embed({
            title: `Mars Bot "${command}" command info`,
            url: 'https://github.com/mebrooks01/Mars-Bot/blob/main/README.md',
            description: cmd.description,
            color: config.embed_color,
            timestamp: new Date(),
            thumbnail: { url: config.pfp },
          })
        }
      })

      if (cmdValid !== true) {
        message.reply(
          `No command found under the name "${command}"\nPlease use the help command to view a list of commands`,
        )
      }
      return
    }

    await this.client.registry.groups.forEach(async (group) => {
      let cmdList = ''

      await group.commands.forEach(async (command) => {
        if (command.hidden === true) return
        if (
          command.ownerOnly === true &&
          config.user_id.owner.includes(message.author.id) === false
        )
          return
        cmdList += '•`' + command.name + '`'
        if (command.guildOnly === true) cmdList += `⚠️`
        if (command.nsfw === true) cmdList += `🔞`
        cmdList += ` ${command.description}\n`
      })

      await fields.push({ name: `**__${group.name}__**`, value: cmdList })
    })

    await message.embed({
      title: 'Mars Bot Help',
      url: 'https://github.com/mebrooks01/Mars-Bot/blob/main/README.md',
      description:
        "**Key**:\n⚠️ Guild Only\nArgument names enclosed in `[square brackets]` are optional. Ones enclosed in `<angle brackets>` are required. Ones enclosed in `['single quotes']` mean that you should type their name to toggle an option (instead of providing a value of your own). Ones separated by `<vertical | bars>` mean you can choose between one of them (this also applies to quoted arguments).\nPS Thx catte for the arguments explanation",
      fields,
      color: config.embed_color,
      timestamp: new Date(),
      thumbnail: { url: config.pfp },
    })
  }
}
