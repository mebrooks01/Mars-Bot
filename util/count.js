const fs = require('fs')
const chalk = require('chalk')

let cmdCount = 0

function cmdRun(name, group, message) {
  cmdCount++

  fs.appendFile('cmd.csv', `\n${name},${group.name},${message.author.id},${message.guild.id},${+new Date()}`, err => {
    if (err) {
      console.log(err)
    }
  })
}

function guildChange(guild, client) {
  fs.appendFile(
    'guild.csv',
    `\n${guild.name},${guild.memberCount},${guild.id},${client.guilds.cache.size},${+new Date()}`,
    err => {
      if (err) {
        console.log(err)
      }
    }
  )
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function start() {
  try {
    if (!fs.existsSync('cmd.csv')) {
      console.log(chalk.yellow('No command CSV, creating one'))
      fs.writeFile('cmd.csv', 'Name,Group,Author ID, Guild ID,Timestamp', err => {
        console.log(chalk.green('Created cmd.csv'))
        if (err) {
          console.log(err)
        }
      })
    }

    if (!fs.existsSync('guild.csv')) {
      console.log(chalk.yellow('No guild CSV, creating one'))
      fs.writeFile('guild.csv', 'Name,Member Count,Guild ID,Server Count,Timestamp', err => {
        console.log(chalk.green('Created guild.csv'))
        if (err) {
          console.log(err)
        }
      })
    }
  } catch (err) {
    console.error(err)
  }
}

module.exports = { cmdCount, cmdRun, guildChange, sleep, start }
