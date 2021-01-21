module.exports = {
    name: 'explore',
    description: 'one more :))))',
    execute(message, args) {
        message.channel.send({
            embed: {
              title: "Explore all the nasa missions",
              description: "You can see where all the missions are here\nhttps://mars.nasa.gov/explore/mars-now/",
              color: "#5A2017",
              image: {
                url:
                  "",
              },
            },
          });
    }
}