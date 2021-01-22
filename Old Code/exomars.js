module.exports = {
  name: "exomars",
  description: "used to test parts of the bot",
  execute(message, args) {
    message.channel.send({
      embed: {
        title: "ExoMars 2016 Mission",
        description:
          "Launched on March 14, 2016\nLanuched from Baikonur Cosmodrome, Russia\n**Trance Gas Orbiter**\nOrbit Insertion on October 19, 2016\nMission Ongoing\n**Schiaparelli Landing Demo**\nReleased from orbiter on October 16, 2016\nMission Failed, lost on descent\nMore info at:\nhttps://mars.nasa.gov/mars-exploration/missions/esa-exomars-2016-tgo/",
        color: "#5A2017",
        image: {
          url:
            "https://mars.nasa.gov/system/content_pages/main_images/367_esa-exomars-2016-tgo.jpg",
        },
      },
    });
  },
};
