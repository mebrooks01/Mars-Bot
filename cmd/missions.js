module.exports = {
    name: 'missions',
    aliases: ['mission'],
    description: 'list all the active missions',
    execute(message, args) {
        message.channel.send({
            embed: {
                title: "Missions", description: "I have information on the following missions\nPathfinder: `=pathfinder`\nPolar Lander: `=polar-lander`\nPhoenix: `=phoenix`\nViking: `=viking`\nClimate Orbiter: `=climate-orbiter`\nGlobal Surveyor: `=global-surveyor`\nObserver: `=observer`\nMariner: `=mariner`\nExoMars: `=exomars`\nMars Atmosphere and Volatile EvolutioN: `=maven`\nMars Reconnaissance Orbiter: `=mro`\nMars Express: `=mars-express`\nOdyssey: `=odyssey`\nInSight: `=insight`\nUse `=mission name/tag` to get info about it\n------------------------------\nI also have info and API data for the following missions\nDo `=(mission name) image (sol) (page number)` to pullup images from it.\nTo pull up the first photo from sol 200 of spirits stay on mars do `=spirit image 200 1`\nPerseverance: `=perseverance`\nCuriosity: `=curiosity`\nOpportunity: `=opportunity`\nSpirit: `=spirit`\nIf any of the commands don't work use the `=support` command to report bugs and get help", color: "#5A2017", image: {
                    url: ""
                }
            }
        });
    }
}