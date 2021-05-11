async function send(data, config, client) {
  client.channels.cache.get(config.log_channel).send(`${client.user.tag} logged in at ${new Date()}`)
}

module.exports = { send }
