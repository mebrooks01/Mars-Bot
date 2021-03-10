const { Command } = require('discord.js-commando')
const axios = require('axios')
const config = require('$root/config.json')
const count = require('$util/count')

module.exports = class Search extends Command {
  constructor(client) {
    super(client, {
      name: 'search',
      group: 'search',
      memberName: 'search',
      description: 'Look for an image in the NASA image library.',
      examples: [`${config.prefix}search <search term>`],
      clientPermissions: ['EMBED_LINKS'],
      throttling: config.command_throttling.api,
      args: [
        {
          key: 'search_term',
          prompt: 'Please choose a search term to look for',
          type: 'string',
        },
      ],
    })
  }

  run(message, { search_term }) {
    axios
      .get('https://images-api.nasa.gov/search?q=' + search_term)
      .then((res) => {
        if (res.data.collection.metadata.total_hits == 0)
          return message.reply('that search term found no results')

        let img = res.data.collection.items[1].links[0].href.replace(
          /\s/g,
          '%20',
        )
        let data = res.data.collection.items[1].data[0]

        message.channel.send({
          embed: {
            title: data.title,
            url: img,
            description: `**Taken on:** ${data.date_created
              .slice(0, 10)
              .split(/ +/)}\n${data.description}`,
            color: config.embed_color,
            timestamp: new Date(),
            image: { url: img },
          },
        })
      })
      .catch(function (error) {
        console.log(error.stack)
        message.reply(
          `An API error has occurred: ${error}\nFor help solving this problem please join are support server: ${config.invite}`,
        )
      })
  }
}
