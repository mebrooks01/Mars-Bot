const { Command } = require("discord.js-commando");
const moment = require("moment");
const config = require("../../config.json");
module.exports = class Invite extends Command {
  constructor(client) {
    super(client, {
      name: "invite",
      group: "utilities",
      aliases: ["join", "add", "invites"],
      memberName: "invite",
      description: "Invite me to your server",
      examples: [`${config.prefix}invite`],
      clientPermissions: [
        "SEND_MESSAGES",
        "EMBED_LINKS",
        "ATTACH_FILES",
        "READ_MESSAGE_HISTORY",
      ],
      guildOnly: false,
      ownerOnly: false,
      throttling: {
        usages: 2,
        duration: 1,
      },
    });
  }
  run(message) {
    message.embed({
      title: "Invite Me",
      url:
        "https://discord.com/oauth2/authorize?client_id=760605516384305224&scope=bot&permissions=1141242945",
      description:
        "Invite me to your discord using the following link.\nhttps://discord.com/oauth2/authorize?client_id=760605516384305224&scope=bot&permissions=1141242945",
      color: "#5A2017",
      thumbnail: {
        url:
          "https://mars.nasa.gov/system/resources/detail_files/25058_PIA23900-web.jpg",
      },
      footer: {
        text: "Photo Credit: NASA/JPL-Caltech",
        icon_url: "",
      },
    });
  }
};
