module.exports = {
    name: 'mars',
    description: 'info about the red planet',
    execute(message, args) {
        message.channel.send({
            embed: {
                title: "Mars", description: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet". The latter refers to the effect of the iron oxide prevalent on Mars surface, which gives it a reddish appearance distinctive among the astronomical bodies visible to the naked eye. Mars is a terrestrial planet with a thin atmosphere, with surface features reminiscent of the impact craters of the Moon and the valleys, deserts and polar ice caps of Earth.\nSources:\nhttps://en.wikipedia.org/wiki/Mars\nhttps://mars.nasa.gov/', color: "#5A2017", image: {
                    url: "https://solarsystem.nasa.gov/internal_resources/3841/"
                }
            }
        });
    }
}