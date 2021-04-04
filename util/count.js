module.exports.cmdCount = 0

module.exports = {
  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  },
}
