module.exports = {
  name: "mro",
  description: "used to test parts of the bot",
  execute(message, args) {
    message.channel.send({
      embed: {
        title: "Mars Reconnaissance Orbiter (MRO)",
        description:
          "Launched on August 12, 2005\nLaunched from Cape Canaveral Air Force Station, Florida\nOrbit insertion on March 10, 2006\nMission ongoing\nMore info at:\nhttps://mars.nasa.gov/mars-exploration/missions/mars-reconnaissance-orbiter/",
        color: "#5A2017",
        image: {
          url:
            "https://mars.nasa.gov/system/content_pages/main_images/366_mro20100917_PIA05490_modest.jpg",
        },
      },
    });
  },
};
