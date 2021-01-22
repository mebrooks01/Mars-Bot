module.exports = {
  name: "viking",
  description: "one more",
  execute(message, args) {
    message.channel.send({
      embed: {
        title: "Viking 1 & 2",
        description:
          "Launched on August 20, 1975 UTC and September 9, 1975 UTC\nLanched from Cape Canaveral Air Force Station, Florida\nLanned on July 20, 1976 and September 3, 1976\nLanded at Chryse Planitia and Utopia Planitia\nMission Complete, ended on November 13, 1982 and April 11, 1980\nMore Info at:\nhttps://mars.nasa.gov/mars-exploration/missions/viking-1-2/",
        color: "#5A2017",
        image: {
          url:
            "https://mars.nasa.gov/system/content_pages/main_images/382_viking-lander-PIA09703.jpg",
        },
      },
    });
  },
};
