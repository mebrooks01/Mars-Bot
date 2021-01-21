module.exports = {
    name: 'polar-lander',
    description: 'another mission',
    execute(message, args) {
        message.channel.send({
            embed: {
                title: "Mars Polar Lander/Deep Space 2", description: "Launched on January 3, 1999\nLaunched from Cape Canaveral Air Force Station, Florida\nMission Failed, lost on arival(December 3, 1999)\nMore info at:\nhttps://mars.nasa.gov/mars-exploration/missions/polar-lander/", color: "#5A2017", image: {
                    url: "https://mars.nasa.gov/system/content_pages/main_images/381_mpl_shadow.jpg"
                }
            }
        });
    }
}