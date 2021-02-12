const chalk = require("chalk");
const config = require("./config.json");
module.exports = {
  execute(info, res) {
    console.log(
      chalk.bold.blue(`----------------------------------------------------`)
    );
    console.log(chalk.bold.underline(`Discord API Connection Info`));
    console.log(
      chalk.yellow(`Username: `) +
        `${info.tag}\n` +
        chalk.yellow(`ID: `) +
        `${info.id}\nOn ${info.server} Server(s)\n` +
        chalk.yellow(`Owner(s): `) +
        `${config.user_id.owner}`
    );
    console.log(chalk.bold.underline(`Database Connection Info`));
    console.log(
      chalk.yellow(`Host: `) +
        `${config.mysql.host}\n` +
        chalk.yellow(`User: `) +
        `${config.mysql.user}\n` +
        chalk.yellow(`Database Name: `) +
        `${config.mysql.db}`
    );
    console.log(chalk.bold.underline(`NASA API Connection Info`));
    console.log(chalk.yellow(`API Key: `) + `${config.api_key}`);
    console.log(chalk.bold.underline(`Other Info`));
    console.log(
      chalk.yellow(`Prefix: `) +
        `${config.prefix}\n` +
        chalk.yellow(`Invite: `) +
        `${config.invite}\n` +
        chalk.yellow(`Embed Color: `) +
        `${config.embed_color}\n` +
        chalk.yellow(`Main Server: `) +
        `${config.server_id.main_server}\n` +
        chalk.yellow(`Daily APOD Channel: `) +
        `${config.channel_id.apod_for_main}\n` +
        chalk.yellow(`Daily APOD: `) +
        `${config.dpod}`
    );
    console.log(
      chalk.bold.blue(`----------------------------------------------------`)
    );
  },
};
