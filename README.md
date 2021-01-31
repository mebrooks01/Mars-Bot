# Mars Bot Documentation

Mars Bot is an open source discord bot developed by [Mebrooks01#3354](https://github.com/mebrooks01)<br/>
You can add it to your server with [this link](https://discord.com/oauth2/authorize?client_id=760605516384305224&scope=bot&permissions=1141242945) if you have any questions you can join [our discord server](https://discord.gg/yKnBYJE).

Mars bot uses NASA's API and other sources to give you plenty of cool info about missions and even look at the weather on mars (when NASA/JPL-Caltech decide to give the data to the api).

## Contributions

Written By: [Mebrooks01#3354](https://github.com/mebrooks01). Help Fixing my shitty ass code By: [MrSmarty#1732](https://github.com/Mr-Smarty), [cAtte\_#4289](https://github.com/cAttte) and [Rude Yeti, Incorporated#8600](https://github.com/rudeyeti)

## Commands

There are currently `26` commands for the bot they are split into 3 sections `missions`, `api calls` and `utilities`.<br/>
I have information on all NASA missions that have been launched as of January 2021.

### Missions

`=climate-orbiter` Find Information on the Mars Climate Orbiter mission.<br/>
`=exomars` Find Information on ExoMars 2016 Mission the mission.<br/>
`=global-surveyor` Find Information on the Mars Global Surveyor mission.<br/>
`=mariner` Find Information on the Mariner 3-9 missions.<br/>
`=mars-express` Find Information on the Mars Express mission.<br/>
`=maven` Find Information on the Mars Atmospheric and Volatile EvolutioN (Maven) mission.<br/>
`=mro` Find Information on the Mars Reconnaissance Orbiter (MRO) mission.<br/>
`=observer` Find Information on the Mars Observer mission.<br/>
`=odyssey` Find Information on the Mars Odyssey mission.<br/>
`=pathfinder` Find Information on the Mars Pathfinder mission.<br/>
`=phoenix` Find Information on the Mars Phoenix mission.<br/>
`=polar-lander` Find Information on the Mars Polar Lander/Deep Space 2 missions.<br/>
`=viking` Find Information on the Find Information on the Viking 1 & 2 missions missions.<br/>

### API Calls

`=apod` Every day NASA publishes an "Astronomy Picture of the Day" use this command to see today's.<br/>
`=insight <'info' | 'weather'>` Get info about insight and find weather data.<br/>
`=curiosity <'info' | 'image'> [sol] [page number]` Get info about curiosity and look up the images it has taken.<br/>
`=opportunity <'info' | 'image'> [sol] [page number]` Get info about opportunity and look up the images it has taken.<br/>
`=spirit <'info' | 'image'> [sol] [page number]` Get info about spirit and look up the images it has taken.<br/>
`=search <search term>` Look for an image in the NASA image library.<br/>

### Other Commands

`=bug` Report a Bug.<br/>
`=explore` Look at where all the Mars missions are.<br/>
`=invite` Add it to your server.<br/>
`=mars` Info about Mars.<br/>
`=suggest` Suggest something to be added.<br/>
`=support` Get support with the bot.<br/>

For more info on a command use `=help <Command>`

## Self Hosting

If you would like to host the bot yourself you are more than welcome if you have questions on how to do any of these steps you should not be self hosting. and I will only be walking through it on windows. You will need Node.js and git to run this bot on your own which you can get node.js [Here](https://nodejs.org/en/download/) and git [Here](https://git-scm.com/download/win).

### Cloning and Dependency

```
$ git clone https://github.com/mebrooks01/Mars-Bot
$ cd Mars-Bot
```

Then you will need to install its dependency with

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
  - apod_for_main: The dev ID of the channel you want the APOD photo to be sent it every day

# Credits

Code Written By: [Mebrooks01#3354](https://github.com/mebrooks01).<br/>
Anti shitty ass code: [MrSmarty#1732](https://github.com/Mr-Smarty), [cAtte\_#4289](https://github.com/cAttte) and [Rude Yeti, Incorporated#8600](https://github.com/rudeyeti)

API Calls use [NASA's API](https://api.nasa.gov/) to pull data. The part of the API I use is maintained by [Chris Cerami](https://github.com/chrisccerami/mars-photo-api).

All photos are used via [JPL's Image Use Policy](https://www.jpl.nasa.gov/jpl-image-use-policy/) and are provided Courtesy of NASA/JPL-Caltech.

I do not own any of the photos, videos and or sensor data "Mars Bot" uses.
