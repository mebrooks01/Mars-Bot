module.exports = {
  name: "insight",
  description: "one more :))))",
  execute(message, args) {
    message.channel.send({
      embed: {
        title: "Insight",
        description:
          "Launched on May 5, 2018\nLaunched from Vandenberg Air Force Base, California\nLanded on November 26, 2018\nLanded at Elysium Planitia, Mars\nMission Ongoing\nMore Info at:\nhttps://mars.nasa.gov/mars-exploration/missions/insight/",
        color: "#5A2017",
        image: {
          url:
            "https://mars.nasa.gov/system/content_pages/main_images/370_insight-lander-PIA22743-16x9.jpg",
        },
      },
    });
  },
};
