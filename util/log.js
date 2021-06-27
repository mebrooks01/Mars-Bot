/**
 * sends data to the discord log channel
 *
 * @param  {string} data string to be logged
 * @param  {object} config config file var
 * @param  {object} client bot client object
 */
async function send(data, config, client) {
  client.channels.cache.get(config.log_channel).send(data)
}

module.exports = { send }
