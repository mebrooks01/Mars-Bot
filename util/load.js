const chalk = require('chalk')
const config = require('$root/config.json')
const header1 = chalk.bold.blue.strikethrough
const header2 = chalk.bold.underline
const info = chalk.yellow
const embed = chalk.hex(config.embed_color)

module.exports = {
  /**
   * runs on bot start to log debug info to console.
   *
   * @param  {object} client bot client object
   * @param  {object} res response from NASA API
   */
  execute(client, res) {
    if (config.debug) {
      return console.log(
        header1(`----------------------------------------------------`),

        header2(`\nDiscord API Connection Info`),
        info(`\nUsername: `) + client.user.tag,
        info(`\nID: `) + client.user.id,
        info(`\nServers: `) + client.guilds.cache.size,
        info(`\nOwner(s): `) + config.user_id.owner,

        header2(`\nDatabase Connection Info`),
        info(`\nHost: `) + config.mysql.host,
        info(`\nUser: `) + config.mysql.user,
        info(`\nDatabase Name: `) + config.mysql.db,

        header2(`\nNASA API Connection Info`),
        info(`\nStatus `) + `${res.status} (${res.statusText})`,
        info(`\nDate: `) + res.headers.date,
        info(`\nRate Limit Max: `) + res.headers[`x-ratelimit-limit`],
        info(`\nRate Limit Remaining: `) + res.headers[`x-ratelimit-remaining`],

        header2(`\nOther Info`),
        info(`\nPrefix: `) + config.prefix,
        info(`\nInvite: `) + config.invite,
        info(`\nEmbed Color: `) + embed(config.embed_color),
        info(`\nDaily APOD Channel: `) + config.channel_id.dpod,

        header2(`\nCommand Slowdown`),
        info(`\nAPI: `) +
          `Run ${config.command_throttling.api.usages} times over ${config.command_throttling.api.duration} seconds`,
        info(`\nMission: `) +
          `Run ${config.command_throttling.missions.usages} times over ${config.command_throttling.missions.duration} seconds`,
        info(`\nUtilities: `) +
          `Run ${config.command_throttling.utilities.usages} times over ${config.command_throttling.utilities.duration} seconds`,

        header1(`\n----------------------------------------------------`)
      )
    }

    //logs no debug info if not in debug mode
    console.log(chalk.green(`${client.user.tag} logged in at ${new Date()}`))
  }
}
