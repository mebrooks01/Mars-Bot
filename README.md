# Mars Bot Documentation

Mars Bot is an oppen source discord bot devolped by [Mebrooks01#3354](https://github.com/mebrooks01)
You can add it to your server with [this link](https://discord.com/oauth2/authorize?client_id=760605516384305224&scope=bot&permissions=1141242945) if you have any questions you can join [our discord server](https://discord.gg/yKnBYJE).

## Contributations

Writen By: [Mebrooks01#3354](https://github.com/mebrooks01). Help Fixing my shitty ass code By: [MrSmarty#1732](https://github.com/Mr-Smarty), [cAtte\_#4289](https://github.com/cAttte) and [Rude Yeti, Incorporated#8600](https://github.com/rudeyeti)

## Commands

There are currently `26` commands for the bot they are split into 3 sections `missions`, `api calls` and `utilities`.
I have information on all NASA missions that have been launched as of january 2021.

```
=climate-orbitor
=exomars
=global-surveyor
=mariner
=mars-express
=maven
=mro
=observer
=odyssey
=pathfinder
=phoenix
=polar-lander
=viking
```

You will notice newer mars rovers and insight are not on that list becuse they are in the API catigory

```
=apod
=insight <'info' | 'weather'>
=curiosity <'info' | 'image'> <sol> <page number>
=opportunity <'info' | 'image'> <sol> <page number>
=spirit <'info' | 'image'> <sol> <page number>
=search <search term>
```

I have also added some other useful commands

```
=bug
=explore
=invite
=mars
=suggest
=support
```

## Self Hoasting

If you would like to hoast the bot yourself you are more than welcome if you have questions on how to do any of these steps you should not be self hoasting. and I will only be walking through it on windows. You will need Node.js and git to run this bot on your own which you can get node.js [Here](https://nodejs.org/en/download/) and git [Here](https://git-scm.com/download/win).

### Cloning and Dependency

```
$ git clone https://github.com/mebrooks01/Mars-Bot
$ cd Mars-Bot
```

Then you will need to install its dependencys with

```
$ npm install
```

### Configuration

You will need to rename `config-example.json` to `config.json` and fill in all the following information

- token: The bots token used to login to the Discord API.
- api_key: Your API key for the NASA API. You can get one from [Here](https://api.nasa.gov/)
- prefix: The prefix the bot uses
- invite: The invite to your server.
- user_id
  - owner: The dev ID of the bot owner
- server_id
  - main_server: The dev ID of the main server this is on
- channel_id
  - apod_for_main: The dev ID of the channle you want the APOD photo to be sent it every day

# Credits

Code Writen By: [Mebrooks01#3354](https://github.com/mebrooks01). Anti shitty ass code: [MrSmarty#1732](https://github.com/Mr-Smarty), [cAtte\_#4289](https://github.com/cAttte) and [Rude Yeti, Incorporated#8600](https://github.com/rudeyeti)

API Calls use [NASA's API](https://api.nasa.gov/) to pull data. The part of the API I use is mantained by [Chris Cerami](https://github.com/chrisccerami/mars-photo-api).

All photos are used via [JPL's Image Use Policy](https://www.jpl.nasa.gov/jpl-image-use-policy/) and are provided Courtesy of NASA/JPL-Caltech.

I do not own any of the photos, videos and or sensor data "Mars Bot" uses.
