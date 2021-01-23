module.exports = {
  name: "global-surveyor",
  description: "one more :)",
  execute(message, args) {
    message.channel.send({
      embed: {
        title: "Mars Global Surveyor",
        description:
          "Launched on November 7, 1996\nLaunched from Cape Canaveral Air Force Station, Florida\nOrbit Insertion September 12, 1997\nMission Complete, ended on November 14, 2006\nMore info at:\nhttps://mars.nasa.gov/mars-exploration/missions/mars-global-surveyor/",
        color: "#5A2017",
        image: {
          url:
            "https://mars.nasa.gov/system/content_pages/main_images/376_marsglobalsurveyor.jpg",
        },
      },
    });
  },
};
