const chalk = require('chalk')
console.log(chalk.yellow('Please Stand By\nBot Starting...'))

const Commando = require('discord.js-commando')

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
const guild_add = require('$util/guildCreate')
const guild_remove = require('$util/guildRemove')

//Log promise rejections
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
  //Turn on and off default commands
  .registerDefaultCommands({
    unknownCommand: false,
    help: false
  })
  .registerCommandsIn(path.join(__dirname, 'commands'))

//Connect to MySQL server
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

//Bot Login
client.once('ready', async () => {
  await client.user.setStatus('dnd')

  await dpod.execute(client)
  //await latest.execute(client)

  await axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=${config.api_key}`)
    .then(async res => {
      load.execute(client, res)
    })
    .catch(function (error) {
      console.log(chalk.yellow(error))
    })

  if (!config.debug) {
    log.send(`${client.user.tag} logged in at ${new Date()}`, config, client)
  }

  await client.user.setActivity(`${config.prefix}Help For help`, {
    type: 'WATCHING'
  })
  await client.user.setStatus('online')
})

client.on('guildCreate', guild => {
  guild_add.execute(client, guild)
})

client.on('guildDelete', guild => {
  guild_remove.execute(client, guild)
})

if (!config.debug) {
  const ap = AutoPoster(config.dblToken, client)
}

client
  .login(config.token)
  .catch(err => console.log(chalk.red('ERROR CONNECTING TO DISCORD:\n' + err + '\n Fix connection and restart.')))
