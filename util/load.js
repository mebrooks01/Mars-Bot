const chalk = require('chalk')
const config = require('$root/config.json')

module.exports = {
  execute(client) {
    console.log(
      chalk.bold.blue(`----------------------------------------------------`),
    )
    console.log(chalk.bold.underline(`Discord API Connection Info`))
    console.log(
      chalk`{yellow Username:} ${client.user.tag}\n{yellow ID:} ${client.user.id}\n{yellow Servers:} ${client.guilds.cache.size}\n{yellow Owner(s):} ${config.user_id.owner}`,
    )
    console.log(chalk.bold.underline(`Database Connection Info`))
    console.log(
      chalk`{yellow Host:} ${config.mysql.host}\n{yellow User:} ${config.mysql.user}\n{yellow Database Name:} ${config.mysql.db}`,
    )
    console.log(chalk.bold.underline(`NASA API Connection Info`))
    console.log(chalk`{yellow API Key:} ${config.api_key}`)
    console.log(chalk.bold.underline(`Other Info`))
    console.log(
      chalk`{yellow Prefix:} ${config.prefix}\n{yellow Invite:} ${config.invite}\n{yellow Embed Color:}` +
        chalk.hex(config.embed_color)(` ${config.embed_color}`) +
        chalk`\n{yellow Main Server:} ${config.server_id.main_server}\n{yellow Daily APOD Channel:} ${config.channel_id.apod_for_main}\n{yellow Daily APOD:} ${config.dpod}`,
    )
    console.log(chalk.bold.underline(`Command Slowdown`))
    console.log(
      chalk`{yellow API:} Run ${config.command_throttling.api.usages} times over ${config.command_throttling.api.duration} seconds\n{yellow Mission:} Run ${config.command_throttling.missions.usages} times over ${config.command_throttling.missions.duration} seconds\n{yellow Utilities:} Run ${config.command_throttling.utilities.usages} times over ${config.command_throttling.utilities.duration} seconds`,
    )
    console.log(
      chalk.bold.blue(`----------------------------------------------------`),
    )
  },
}
