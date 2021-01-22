module.exports = {
  name: "perseverance",
  description: "used to test parts of the bot",
  execute(message, args) {
    message.channel.send({
      embed: {
        title: "Mars 2020 Perseverance Rover",
        description:
          "Launched on July 30, 2020\nLaunched from Cape Canaveral Air Force Station, Florida\nMission Ongoing, In route to mars arving Febuary 18th 2021\nAPI data will be available as soon as it lands\nMore Info at:\nhttps://mars.nasa.gov/mars-exploration/missions/mars-exploration-rovers/",
        color: "#5A2017",
        image: {
          url:
            "https://mars.nasa.gov/system/content_pages/main_images/374_mars2020-PIA21635.jpg",
        },
      },
    });
  },
};
