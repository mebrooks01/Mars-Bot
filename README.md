# Mars Bot Documentation

Mars Bot is an open-source discord bot developed by [Mebrooks01#3354](https://github.com/mebrooks01)\
You can add it to your server with [this link](https://discord.com/oauth2/authorize?client_id=760605516384305224&scope=bot&permissions=1141242945). If you have any questions you can join [our discord server](https://discord.gg/yKnBYJE).

Mars Bot uses NASA's API and other sources to give you plenty of cool information about missions and even look at the weather on Mars (when NASA/JPL-Caltech decides to give the data to the API).

## Contributions

Written By: [Mebrooks01#3354](https://github.com/mebrooks01).\
Help Fixing my shitty ass code By: [MrSmarty#1732](https://github.com/Mr-Smarty), [cAtte\_#4289](https://github.com/cAttte),[XboxBedrock#6958](https://github.com/XboxBedrock) and [Rude Yeti, Incorporated#8600](https://github.com/rudeyeti)

## Commands

There are currently `26` commands for the bot they are split into 3 sections `missions`, `api calls` and `utilities`.\
I have information on all NASA missions that have been launched as of January 2021.

### Missions

`=climate-orbiter` Find information on the Mars Climate Orbiter mission.\
`=exomars` Find information on the ExoMars 2016 Mission.\
`=global-surveyor` Find information on the Mars Global Surveyor mission.\
`=mariner` Find information on the Mariner 3-9 missions.\
`=mars-express` Find information on the Mars Express mission.\
`=maven` Find information on the **M**ars **A**tmospheric & **V**olatile **E**volutio**N** (**MAVEN**) mission.\
`=mro` Find information on the **M**ars **R**econnaissance **O**rbiter (**MRO**) mission.\
`=observer` Find information on the Mars Observer mission.\
`=odyssey` Find information on the Mars Odyssey mission.\
`=pathfinder` Find information on the Mars Pathfinder mission.\
`=phoenix` Find information on the Mars Phoenix mission.\
`=polar-lander` Find information on the Mars Polar Lander/Deep Space 2 missions.\
`=viking` Find information on the Viking 1 & Viking 2 missions.

### API Calls

`=apod` Every day NASA publishes an "Astronomy Picture of the Day." Use this command to see today's picture.\
`=insight <'info' | 'weather'>` Get information about Insight and find weather data.\
`=curiosity <'info' | 'image'> [sol] [page number]` Get information about the Curiosity rover and look up the images it has taken.\
`=opportunity <'info' | 'image'> [sol] [page number]` Get information about the Opportunity rover and look up the images it has taken.\
`=spirit <'info' | 'image'> [sol] [page number]` Get information about the Spirit rover and look up the images it has taken.\
`=search <search term>` Look for an image in the NASA image library.

### Other Commands

`=bug` Report a bug.\
`=explore` Look at where all the Mars missions are.\
`=invite` Add the bot to your server.\
`=mars` Information about Mars.\
`=suggest` Suggest a new feature or change to be added to the bot.\
`=support` Get support for the bot.

For more information on a command use `=help <command>`

## Self Hosting

If you would like to host the bot yourself, you are more than welcome. If you have questions on how to do any of these steps, you should not be self hosting. I will only be walking through the process for Windows 10. You will need **node.js** and **git** to run this bot on your own. You can get node.js [here](https://nodejs.org/en/download/) and git [here](https://git-scm.com/download/win).

### Cloning and Dependency

Open a new terminal (CMD, Powershell, etc) in a folder.\
Clone the repository and navigate to it.

```
$ git clone https://github.com/mebrooks01/Mars-Bot
$ cd Mars-Bot
```

Then install its dependencies.

```
$ npm install
```

### Configuration

You will need to rename `config-example.json` to `config.json` and fill in all the following information

- token: The bot's token used to login to the Discord API.
- api_key: Your API key for the NASA API. You can get one from [here](https://api.nasa.gov/)
- prefix: The prefix the bot uses.
- invite: The invite to your Discord server.
- user_id
  - owner: The user ID of the bot application owner(can have multiple in an array).
- server_id
  - main_server: The guild ID of the main server the bot is on.
- channel_id
  - apod_for_main: The channel ID of the channel you want the APOD photo to be sent to each day.

# Credits

Code Written By: [Mebrooks01#3354](https://github.com/mebrooks01).\
Anti shitty-ass code: [MrSmarty#1732](https://github.com/Mr-Smarty), [cAtte\_#4289](https://github.com/cAttte),[XboxBedrock#6958](https://github.com/XboxBedrock) and [Rude Yeti, Incorporated#8600](https://github.com/rudeyeti)

API calls use [NASA's API](https://api.nasa.gov/) to pull data. The part of the API I use is maintained by [Chris Cerami](https://github.com/chrisccerami/mars-photo-api).

All photos are used via [JPL's Image Use Policy](https://www.jpl.nasa.gov/jpl-image-use-policy/) and are provided Courtesy of NASA/JPL-Caltech.

I do not own any of the photos, videos, and/or sensor data "Mars Bot" uses.
