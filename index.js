const Commando = require('discord.js-commando');
const path = require('path');
const config = require("./config.json")
/*
const axios = require("axios");
const moment = require("moment");
*/

const client = new Commando.CommandoClient({
    commandPrefix: config.prefix,
    owner: config.user_id.owner,
    invite: config.invite,
});
client.config = config

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['missions', 'I have info on all of there missions'],
        ['api calls', 'I also have access to images for these'],
        ['utilities', 'Other useful commands'],
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

    
client.once('ready', () => {
    let now =Date();
    console.log(`Logged in as ${client.user.tag} at ${now}`);
    client.user.setActivity(`=Help for help.`, { type: "WATCHING" });
});
client.on('error', console.error);
client.login(client.config.token);