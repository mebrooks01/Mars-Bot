module.exports = {
    name: 'phoenix',
    description: 'one more',
    execute(message, args) {
        message.channel.send({
            embed: {
                title: "Mars Phoenix", description: "Lanuched on August 4, 2007\nLaunched From Cape Canaveral Air Force Station, Florida\nLanded on May 25, 2008\nLanded at Vastitas Borealis, the arctic plains of Mars\nMission Complete, ended on November 2, 2008\nMore Info at:\nhttps://mars.nasa.gov/mars-exploration/missions/phoenix/", color: "#5A2017", image: {
                    url: "https://mars.nasa.gov/system/content_pages/main_images/383_phoenix-lander.jpg"
                }
            }
        });
    }
}