module.exports = {
    name: 'mariner',
    description: 'one more :))))',
    execute(message, args) {
        message.channel.send({
            embed: {
                title: "Mariner 3-9", description: "Launched Between November 28, 1964 and May 30, 1971\nLanuched from Cape Canaveral Air Force Station, Florida\nMissions complete between, December 21, 1967 and October 27, 1972\nMore info at:\nhttps://mars.nasa.gov/mars-exploration/missions/mariner-3-4/\nhttps://mars.nasa.gov/mars-exploration/missions/mariner-6-7/\nhttps://mars.nasa.gov/mars-exploration/missions/mariner-8-9/", color: "#5A2017", image: {
                    url: "https://mars.nasa.gov/system/content_pages/main_images/373_mariner9.jpg"
                }
            }
        });
    }
}