const { Command } = require('discord.js-commando')
const config = require('$root/config.json')
const mission = require('$root/mission.json')
const count = require('$util/count')

module.exports = class EvalCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'eval',
      group: 'util',
      memberName: 'eval',
      description: 'Executes JavaScript code.',
      details: 'Only the bot owner(s) may use this command.',
      ownerOnly: true,
      args: [
        {
          key: 'script',
          prompt: 'What code would you like to evaluate?',
          type: 'string'
        }
      ]
    })
  }

  async run(msg, args) {
    count.cmdCount++
    let message = msg
    let client = this.client

    if (args.script.startsWith('```') && args.script.endsWith('```')) {
      args.script = args.script.replace(/(^.*?\s)|(\n.*$)/g, '')
    }

    try {
      const code = args.script
      let response = eval(code)
      await Promise.resolve(response)
        .then(res => {
          message.react('✅').catch(() => {})
          message.channel
            .send({
              embed: {
                title: 'Response:',
                color: this.client.config.embed_color,
                description: String(res) || '\u200b'
              }
            })
            .catch(() => {})
        })
        .catch(err => {
          message.react('❌').catch(() => {})
          message.channel.send(`Error executing code:\n\`\`\`${err.stack}\`\`\``).catch(() => {})
        })
    } catch (err) {
      await message.channel.send(`Error executing code:\n\`\`\`${err.stack}\`\`\``).catch(() => {})
      await message.react('❌').catch(() => {})
    }
  }
}
