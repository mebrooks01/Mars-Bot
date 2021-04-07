const chalk = require('chalk')
console.log(chalk.yellow('Please Stand By\nBot Starting...'))

const Commando = require('discord.js-commando')

//MySQL Packages
const mysqlProvider = require('commando-provider-mysql')
const mysql = require('mysql2/promise')

//API Packages
const axios = require('axios')

//Load files
const path = require('path')
require('better-module-alias')(__dirname)
const config = require('$root/config.json')
const load = require('$util/load')
const dpod = require('$util/dpod')
const guild_add = require('$util/guildCreate')
const guild_remove = require('$util/guildRemove')

//Create Discord Client
const client = new Commando.CommandoClient({
  commandPrefix: config.prefix,
  owner: config.user_id.owner,
  invite: config.invite,
  unknownCommandResponse: false
})
client.config = config //Re Redefine Config

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

  await client.channels.cache.get(config.log_channel).send(`${client.user.tag} logged in at ${new Date()}`)

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

client
  .login(config.token)
  .catch(err => console.log(chalk.red('ERROR CONNECTING TO DISCORD:\n' + err + '\n Fix connection and restart.')))
