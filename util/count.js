let cmdCount = 0

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export { cmdCount, sleep }
