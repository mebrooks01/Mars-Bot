const chalk = require('chalk')
console.log(chalk.yellow('Please Stand By\nBot Starting...'))

const Commando = require('discord.js-commando')

//MySQL Packages
const mysqlProvider = require('commando-provider-mysql')
const mysql = require('mysql2/promise')

//API Packages
const axios = require('axios')

//Load files
const fs = require('fs')
const path = require('path')
require('better-module-alias')(__dirname)
const config = require('$root/config.json')
const load = require('$util/load')
const dpod = require('$util/dpod')
const guild_add = require('$util/guildCreate')

//Create Discord Client
const client = new Commando.CommandoClient({
  commandPrefix: config.prefix,
  owner: config.user_id.owner,
  invite: config.invite,
  unknownCommandResponse: false,
})
client.config = config //Re Redefine Config

//Loads all the commands
client.registry
  .registerDefaultTypes()
  .registerGroups([
    [
      'missions',
      'This category has all of the older missions. IE all of the missions but the most recent rovers',
    ],
    [
      'rovers',
      'Mission info and basic photo search for the most recent mars rovers',
    ],
    [
      'search',
      'Search for an image, mission data, weather data and the Astronomy Picture of the Day',
    ],
    ['utilities', 'Other helpful commands for basic info and support'],
  ])
  .registerDefaultGroups()
  //Turn on and off default commands
  .registerDefaultCommands({
    unknownCommand: false,
  })
  .registerCommandsIn(path.join(__dirname, 'commands'))

//Connect to MySQL server
mysql
  .createConnection({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.pwd,
    database: config.mysql.db,
  })
  .then((db) => {
    client.setProvider(new mysqlProvider(db))
    console.log(chalk.green(`Database Connected Successfully`))
  })

//Bot Login
client.once('ready', () => {
  client.user.setActivity(`people use "${config.prefix}Help"`, {
    type: 'WATCHING',
  })

  //Test API Connection
  axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=${config.api_key}`)
    .then((res) => {
      console.log(chalk.green(`NASA API Connected Successfully`))
    })
    .catch(function (error) {
      console.log(chalk.yellow(error))
    })

  dpod.execute(client)
  load.execute(client)
})

//Sends a msg when added to server
client.on('guildCreate', (guild) => {
  guild_add.execute(client, guild)
})

client
  .login(config.token)
  .catch((err) =>
    console.log(
      chalk.red(
        'ERROR CONNECTING TO DISCORD:\n' +
          err +
          '\n Fix connection and restart.',
      ),
    ),
  )
