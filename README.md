# Mars Bot Documentation

[![Status](https://top.gg/api/widget/status/760605516384305224.svg)](https://top.gg/bot/760605516384305224) ![Discord](https://img.shields.io/discord/760662877563650048?label=Discord) ![contributors](https://img.shields.io/github/all-contributors/mebrooks01/Mars-Bot?label=contributors) ![lines](https://img.shields.io/tokei/lines/github/mebrooks01/Mars-Bot)

Mars Bot is an open-source discord bot developed by [Mebrooks01#3354](https://github.com/mebrooks01)\
You can add it to your server with [this link](https://discord.com/oauth2/authorize?client_id=760605516384305224&scope=bot&permissions=3288726593). If you have any questions you can join [our discord server](https://discord.gg/yKnBYJE).

Mars Bot uses NASA's API and other sources to give you plenty of cool information about missions and even look at the weather on Mars (when NASA/JPL-Caltech decides to give the data to the API).

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/mebrooks01"><img src="https://avatars.githubusercontent.com/u/39204478?v=4?s=128" width="128px;" alt=""/><br /><sub><b>Malachi Brooks</b></sub></a><br /><a href="https://github.com/mebrooks01/Mars-Bot/commits?author=mebrooks01" title="Code">💻</a> <a href="#projectManagement-mebrooks01" title="Project Management">📆</a> <a href="https://github.com/mebrooks01/Mars-Bot/commits?author=mebrooks01" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Mr-Smarty"><img src="https://avatars.githubusercontent.com/u/69656599?v=4?s=128" width="128px;" alt=""/><br /><sub><b>Mr-Smarty</b></sub></a><br /><a href="https://github.com/mebrooks01/Mars-Bot/commits?author=Mr-Smarty" title="Code">💻</a> <a href="https://github.com/mebrooks01/Mars-Bot/commits?author=Mr-Smarty" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/XboxBedrock"><img src="https://avatars.githubusercontent.com/u/68715625?v=4?s=128" width="128px;" alt=""/><br /><sub><b>Xbox</b></sub></a><br /><a href="https://github.com/mebrooks01/Mars-Bot/commits?author=XboxBedrock" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/rudeyeti"><img src="https://avatars.githubusercontent.com/u/67293473?v=4?s=128" width="128px;" alt=""/><br /><sub><b>Rude Yeti</b></sub></a><br /><a href="https://github.com/mebrooks01/Mars-Bot/commits?author=rudeyeti" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/vaporrrr"><img src="https://avatars.githubusercontent.com/u/74574116?v=4?s=128" width="128px;" alt=""/><br /><sub><b>VapoR</b></sub></a><br /><a href="https://github.com/mebrooks01/Mars-Bot/commits?author=Vaporrrr" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/cAttte"><img src="https://avatars.githubusercontent.com/u/26514199?v=4?s=128" width="128px;" alt=""/><br /><sub><b>cattte</b></sub></a><br /><a href="https://github.com/mebrooks01/Mars-Bot/commits?author=cattte" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Command Info

There are currently `35` commands for the bot they are split into 5 sections `Mission Info`, `Rover Info`, `Commands` and `Utility`.\
I have information on all NASA missions that have been launched as of January 2021.

### Mission Info

•`climate-orbiter` Find information on the Mars Climate Orbiter mission.\
•`exomars` Find information on the ExoMars 2016 Mission.\
•`global-surveyor` Find information on the Mars Global Surveyor mission.\
•`mariner` Find information on the Mariner 3-9 missions.\
•`mars-express` Find information on the Mars Express mission.\
•`maven` Find information on the **M**ars **A**tmospheric & **V**olatile **E**volutio**N** (**MAVEN**) mission.\
•`mro` Find information on the **M**ars **R**econnaissance **O**rbiter (**MRO**) mission.\
•`observer` Find information on the Mars Observer mission.\
•`odyssey` Find information on the Mars Odyssey mission.\
•`pathfinder` Find information on the Mars Pathfinder mission.\
•`phoenix` Find information on the Mars Phoenix mission.\
•`polar-lander` Find information on the Mars Polar Lander/Deep Space 2 missions.\
•`viking` Find information on the Viking 1 & Viking 2 missions.\
•`mars` Information about Mars.(In here because its best fit)

### Rover Info

•`curiosity` Get information about the Curiosity rover and look up the images it has taken.\
•`opportunity` Get information about the Opportunity rover and look up the images it has taken.\
•`perseverance` Get information about the Perseverance rover and look up the images it has taken.\
•`spirit` Get information about the Spirit rover and look up the images it has taken.

### Image Search

•`apod` Every day NASA publishes an "Astronomy Picture of the Day." Use this command to see today's picture.\
•`image` Search for images from rovers with more freedom and look per camera.\
•`insight` Get information about Insight and find weather data.\
•`manifest` Get detailed Info on rovers and there stats\
•`search` Look for an image in the NASA image library.

### Commands

•`group` Lists all command groups.\
•`enable` Enables a command or command group.\
•`disable` Disables a command or command group.

### Utility

•`prefix` Shows or sets the command prefix.\
•`ping` Checks the bot's ping to the Discord server.\
•`bug` Report a bug.\
•`help` Displays a list of available commands, or detailed information for a specified command.\
•`explore` Look at where all the Mars missions are.\
•`invite` Add the bot to your server.\
•`mars` Information about Mars.\
•`suggest` Suggest a new feature or change to be added to the bot.\
•`support` Get support for the bot.

For more information on a command use `help <command>`

## Self Hosting

If you would like to host the bot yourself, you are more than welcome. If you have questions on how to do any of these steps, you should not be self hosting. I will only be walking through the process for Windows 10. You will need **node.js** and **git** to run this bot on your own. You can get node.js [here](https://nodejs.org/en/download/) and git [here](https://git-scm.com/download/win).

### Cloning and Dependency

Open a new terminal (CMD, Powershell, etc) in a folder.\
Clone the repository and navigate to it.

```cmd
git clone https://github.com/mebrooks01/Mars-Bot
cd Mars-Bot
```

Then install its dependencies.

```cmd
npm install
```

### Configuration

You will need to rename `config-example.json` to `config.json` and fill in all the following information

#### Config

- token: The bots token used to login to the Discord API.
- api_key: Your API key for the NASA API. You can get one from [here](https://api.nasa.gov/)
- prefix: The prefix the bot uses.
- invite: The invite to your Discord server.
- embed_color: what color you want the embeds to be
- pfp: the link for the pfp you are using
- log_channel: The channel ID of the bot logs
- mysql
  - host: The database host address
  - user: The username of the database
  - pwd: The database password
  - db: the database name
- user_id
  - owner: The user ID of the bot application owner(can have multiple in an array).
- command_throttling
  - api
    - usages: By default its set to 2
    - duration: By default its set to 10
  - missions
    - usages: By default its set to 4
    - duration: By default its set to 2
  - utilities
    - usages: By default its set to 2
    - duration: By default its set to 1

#### DPOD

This file contains an array of Objects with guild and channel ID's to send the Daily Astronomy Pic of The Day to.

```json
[{ "guild": "<Guild ID>", "Channel": "<Channel ID>" }]
```

## Credits

Code Written By: [Mebrooks01#3354](https://github.com/mebrooks01). lol\
Anti shitty-ass code: [MrSmarty#1732](https://github.com/Mr-Smarty), [cAtte\_#4289](https://github.com/cAttte), [XboxBedrock#6958](https://github.com/XboxBedrock) and [Rude Yeti, Incorporated#8600](https://github.com/rudeyeti)

API calls use [NASA's API](https://api.nasa.gov/) to pull data. The part of the API I use is maintained by [Chris Cerami](https://github.com/chrisccerami/mars-photo-api).

All photos are used via [JPL's Image Use Policy](https://www.jpl.nasa.gov/jpl-image-use-policy/) and are provided Courtesy of NASA/JPL-Caltech.

I do not own any of the photos, videos, and/or sensor data "Mars Bot" uses.
