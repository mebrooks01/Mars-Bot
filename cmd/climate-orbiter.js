module.exports = {
    name: 'climate-orbiter',
    description: 'used to test parts of the bot',
    execute(message, args) {
        message.channel.send({
            embed: {
                title: "Mars Climate Orbiter", description: "Launched on December 11, 1998\nLanched from Cape Canaveral Air Force Station, Florida\nMission Failed, lost on arival\nMore info at:\nhttps://mars.nasa.gov/mars-exploration/missions/mars-climate-orbiter/", color: "#5A2017", image: {
                    url: "https://mars.nasa.gov/system/content_pages/main_images/375_mco_mapping.jpg"
                }
            }
        });
    }
}