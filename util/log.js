async function send(data, config, client) {
  client.channels.cache.get(config.log_channel).send(data)
}

module.exports = { send }
