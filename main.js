const discord = require("discord.js");
const client = new discord.Client();
const fs = require("fs");
const axios = require("axios");
const moment = require("moment");
const { CommandoClient } = require('discord.js-commando');
const path = require('path');
client.config = require("./config.json")
const token = client.config.token
const prefix = client.config.prefix
const invite = client.config.invite
const ownerid = client.config.userid.owner
const devid = client.config.roleid.dev
const adminid = client.config.roleid.admin
const modid = client.config.roleid.mod
const helperid = client.config.roleid.helper
const main_server = client.config.serverid.main_server
const api_key = client.config.api_key

const client = new CommandoClient({
    commandPrefix: prefix,
    owner: ownerid,
    invite: invite,
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

client.login(token);