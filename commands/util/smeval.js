const { Command } = require('discord.js-commando')
/*eslint-disable */
const axios = require('axios')
const moment = require('moment')
const chalk = require('chalk')
const fs = require('fs')
const mysqlProvider = require('commando-provider-mysql')
const mysql = require('mysql2/promise')
const path = require('path')

const config = require('$root/config.json')
const mission = require('$root/mission.json')
const count = require('$util/count')
const dpod = require('$root/dpod.json')
const log = require('$util/log')
/*eslint-enable */

module.exports = class EvalCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'smeval',
      group: 'util',
      memberName: 'smeval',
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

  async run(message, args) {
    count.cmdCount++
    /*eslint-disable */
    let msg = message
    let client = this.client
    /*eslint-enable */

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
                color: this.config.embed_color,
                description: String(res) || '\u200b'
              }
            })
            .catch(() => {})
        })
        .catch(err => {
          message.react('❌').catch(() => {})
          message.say(`Error executing code:\n\`\`\`${err.stack}\`\`\``).catch(() => {})
        })
    } catch (err) {
      await message.say(`Error executing code:\n\`\`\`${err.stack}\`\`\``).catch(() => {})
      await message.react('❌').catch(() => {})
    }
  }
}
