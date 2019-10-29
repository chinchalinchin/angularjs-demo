
module.exports = {
    log: log
}

function log(msg, route){
    const now = new Date().toLocaleTimeString()
    console.log(`app.js: ${now}: ${route}: ${msg}`)
  };