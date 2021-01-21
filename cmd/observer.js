module.exports = {
    name: 'observer',
    description: 'another one',
    execute(message, args) {
        message.channel.send({
            embed: {
                title: "Mars Observer", description: "Launched on September 25, 1992\nlanuched from Cape Canaveral Air Force Station, Florida\nMission Failed, Communication lost prior to orbit insertion\nMore info at:\nhttps://mars.nasa.gov/mars-exploration/missions/mars-observer/", color: "#5A2017", image: {
                    url: "https://mars.nasa.gov/system/content_pages/main_images/377_mars_observer.jpg"
                }
            }
        });
    }
}