const { Command } = require('discord.js-commando')
const config = require('$root/config.json')
const mission = require('$root/mission.json')
const prettyMilliseconds = require('pretty-ms')
const pjson = require('$root/package.json')
const git = require('git-last-commit')
const si = require('systeminformation')
let memberCount = 0

module.exports = class Stats extends Command {
  constructor(client) {
    super(client, {
      name: 'stats',
      group: 'util',
      memberName: 'stats',
      description: 'Find Information about the Red Planet',
      clientPermissions: ['EMBED_LINKS'],
      throttling: config.command_throttling.utilities
    })
  }

  async run(message) {
    this.client.cmdCount.run(this.name, this.group, message)

    this.client.guilds.cache.forEach(guild => {
      memberCount += guild.memberCount
    })

    let fields = [
      {
        name: 'Client Info',
        value:
          `\`\`\`asciidoc` +
          `\nServers    :: ${this.client.guilds.cache.size}` +
          `\nUsers      :: ${memberCount}` +
          `\nWS Ping    :: ${Math.round(this.client.ws.ping)}ms` +
          `\nUptime     :: ${prettyMilliseconds(this.client.uptime)}` +
          `\nCmds Run   :: ${this.client.cmdCount.count} (since last restart)` +
          `\n\`\`\``
      }
    ]

    if (config.user_id.owner.includes(message.author.id)) {
      message.reply('Working on it...')
      let cpu = await si.cpu()
      let os = await si.osInfo()
      let ram = await si.mem()

      fields.push({
        name: 'System Info',
        value:
          `\`\`\`asciidoc` +
          `\nOS         :: ${os.platform} (${os.distro})` +
          `\nCPU        :: ${cpu.brand}` +
          `\nGHz        :: ${cpu.speed}` +
          `\nCores      :: ${cpu.cores}` +
          `\nRAM Usage  :: ${Math.round((ram.used / 1048576) * 100) / 100}/${Math.round(ram.total / 1048576)} Mb` +
          `\nVPS Uptime :: ${prettyMilliseconds(si.time().uptime * 1000)}` +
          `\n\`\`\``
      })
      await git.getLastCommit(function (err, commit) {
        fields.push({
          name: 'Version Info',
          value:
            `\`\`\`asciidoc` +
            `\nVersion    :: ${pjson.version}` +
            `\nGit Hash   :: ${commit.shortHash}` +
            `\nTitle      :: ${commit.subject}` +
            `\nAuthor     :: ${commit.author.name}` +
            `\n\`\`\``
        })
        embed(fields)
        memberCount = 0
        return
      })
    } else {
      memberCount = 0
      embed(fields)
    }

    function embed(fields) {
      message.embed({
        title: "Mars Bot's Statistics",
        fields,
        color: config.embed_color,
        timestamp: new Date(),
        thumbnail: { url: config.pfp },
        footer: { text: mission.credit }
      })
    }
  }
}
