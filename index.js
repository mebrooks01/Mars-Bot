const chalk = require('chalk')
console.log(chalk.yellow('Please Stand By\nBot Starting...'))

//Discord.js
const Commando = require('discord.js-commando')
const Discord = require('discord.js')
const fs = require('fs')

//MySQL Packages
const mysqlProvider = require('commando-provider-mysql')
const mysql = require('mysql2/promise')

//API Packages
const axios = require('axios')
const AutoPoster = require('topgg-autoposter')

//Load files
const path = require('path')
require('better-module-alias')(__dirname)
const config = require('$root/config.json')
const load = require('$util/load')
const dpod = require('$util/dpod')
const log = require('$util/log')
const count = require('$util/count')
const guild_add = require('$util/guildCreate')
const guild_remove = require('$util/guildRemove')
const cmdErrYaml = require('$util/commandErrorYaml')

//Log promise rejections to log channel
process.on('unhandledRejection', async err => {
  try {
    client.channels.cache.get(config.log_channel).send({
      embed: {
        title: 'Unhandled Promise Rejection',
        description: `**${err.message || err}**\n\`\`\`${err.stack || err}\`\`\``,
        color: config.embed_color,
        timestamp: new Date()
      }
    })
  } catch (e) {
    console.log(chalk.red('ERROR LOGGING PROMISE REJECTION\n' + e.stack + 'PROMISE REJECTION\n' + (err.stack || err)))
  }
})

//Create Discord Client
const client = new Commando.CommandoClient({
  commandPrefix: config.prefix,
  owner: config.user_id.owner,
  invite: config.invite,
  unknownCommandResponse: false
})

//Loads all the commands
client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['missions', 'Mission Info'],
    ['rovers', 'Rover Info'],
    ['search', 'Image Search']
  ])
  .registerDefaultGroups()
  .registerDefaultCommands({
    unknownCommand: false,
    help: false
  })
  .registerCommandsIn(path.join(__dirname, 'commands'))

//Connect to MySQL server and log to console
mysql
  .createConnection({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.pwd,
    database: config.mysql.db
  })
  .then(db => {
    client.setProvider(new mysqlProvider(db))
    console.log(chalk.green(`Database Connected Successfully`))
  })

//Start bot functions
client.once('ready', async () => {
  await client.user.setStatus('dnd')

  // Start daily apod and command count
  dpod.execute(client)
  count.start()

  //Check ability to make API requests to NASA
  await axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=${config.api_key}`)
    .then(async res => {
      load.execute(client, res)
    })
    .catch(function (error) {
      console.log(chalk.yellow(error))
    })

  //logs the login of the bot to the console if no debug is present in config
  if (!config.debug) {
    log.send(`${client.user.tag} logged in at ${new Date()}`, config, client)
  }

  await client.user.setActivity(`${config.prefix}Help For help`, {
    type: 'WATCHING'
  })
  await client.user.setStatus('online')

  //CMD count class shananigans
  client.cmdCount = new count.CmdCount()
})

//logs to bot log when bot joins/leaves new server
client.on('guildCreate', guild => {
  guild_add.execute(client, guild)
})
client.on('guildDelete', guild => {
  guild_remove.execute(client, guild)
})

//Log to bot-log channels when an error happens
client.on('commandError', async (command, err, message) => {
  try {
    let log = true
    await fs.writeFile(
      './tempCommandError.yaml',
      cmdErrYaml(command, message).replace(/(undefined)|(null)|(\[((undefined)|(null))?\])/g, '-'),
      err => {
        if (err) (log = false), console.log(chalk.red('ERROR CREATING LOG FILE:\n' + err))
      }
    )
    await client.channels.cache.get(config.log_channel).send({
      embed: {
        title: 'Unhandled Command Error',
        description: `**Command:** ${command.name}\n**${err.message || err}**\n\`\`\`${err.stack || err}\`\`\``,
        color: config.embed_color,
        timestamp: new Date()
      }
    })
    if (log)
      client.channels.cache
        .get(config.log_channel)
        .send({ files: [new Discord.MessageAttachment('./tempCommandError.yaml')] })
    else client.channels.cache.get(config.log_channel).send('There was an error creating the command info yaml')
  } catch (e) {
    console.log(chalk.red('ERROR LOGGING COMMAND ERROR\n' + e.stack + 'COMMAND ERROR\n' + (err.stack || err)))
  }
})
client.on('error', async err => {
  try {
    client.channels.cache.get(config.log_channel).send({
      embed: {
        title: 'Unhandled Client Error',
        description: `**${err.message || err}**\n\`\`\`${err.stack || err}\`\`\``,
        color: config.embed_color,
        timestamp: new Date()
      }
    })
  } catch (e) {
    console.log(chalk.red('ERROR LOGGING CLIENT ERROR\n' + e.stack + 'CLIENT ERROR\n' + (err.stack || err)))
  }
})

// Post top.gg stats if not in debug mode
if (!config.debug) {
  const ap = AutoPoster(config.dblToken, client)
}

// If you dont know what this is why are you even looking at this code?
client
  .login(config.token)
  .catch(err => console.log(chalk.red('ERROR CONNECTING TO DISCORD:\n' + err + '\n Fix connection and restart.')))
