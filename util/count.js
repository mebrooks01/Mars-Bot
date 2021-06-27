const fs = require('fs')
const chalk = require('chalk')

// shitty ass code beacuse javascript is wack as fuck
class CmdCount {
  constructor() {
    this.count = 0
  }

  /**
   * adds info to csv when run
   *
   * @param  {string} name the name of the command run
   * @param  {object} group the group object of a command being run
   * @param  {object} message the message object of a command being run
   */
  run(name, group, message) {
    fs.appendFile(
      'cmd.csv',
      `\n${name},${group.name},${message.author.id},${message.guild?.id},${+new Date()}`,
      err => {
        if (err) {
          console.log(err)
        }
      }
    )
    this.count++
  }
}

/**
 * sends message to log channel when run & adds info the the guild csv
 *
 * @param  {object} guild the guild object of the guild being added/removed from
 * @param  {object} client the client object of the discord bot
 */
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

/**
 * sleep function used to pause a for loop
 *
 * @param  {number} ms number of ms to wait
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * run on bot start to check cmd.csv & guild.csv. Creates them if needed
 */
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

module.exports = { guildChange, sleep, start, CmdCount }
