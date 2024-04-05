import Http from "http"
import Events from "events"

const event = new Events()

function onData() {
  const items = []

  setInterval(() => items.push(Date.now()))
}

Http.createServer((req, res) => {
  event.on('data', onData)

  event.emit('data', Date.now())

  res.end("ok")
}).listen(3000, () => console.log("Running on 3000"))
