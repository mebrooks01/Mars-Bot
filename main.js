const discord = require("discord.js");
const client = new discord.Client();
const fs = require("fs");
const axios = require("axios");
const moment = require("moment");
const { CommandoClient } = require('discord.js-commando');
const path = require('path');
client.config = require("./config.json")

const client = new CommandoClient({
    commandPrefix: client.config.prefix,
    owner: client.config.user_id.owner,
    invite: client.config.invite,
});

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
    console.log(`Logged in as ${client.user.tag} at ${Date}`);
    client.user.setActivity(`=Help for help.`, { type: "WATCHING" });
});
client.on('error', console.error);

client.login(client.config.token);