const chalk = require('chalk')
const config = require('$root/config.json')
module.exports = {
  execute(info) {
    console.log(
      chalk.bold.blue(`----------------------------------------------------`),
    )
    console.log(chalk.bold.underline(`Discord API Connection Info`))
    console.log(
      chalk`{yellow Username:} ${info.tag}\n{yellow ID:} ${info.id}\n{yellow Servers:} ${info.server}\n{yellow Owner(s):} ${config.user_id.owner}`,
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
    console.log(
      chalk.bold.blue(`----------------------------------------------------`),
    )
  },
}
