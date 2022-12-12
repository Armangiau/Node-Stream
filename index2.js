import { createServer } from 'http'
import { createReadStream } from 'fs'


const server = createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' })
  const readStream = createReadStream('./bigindex.html', 'utf8')
  readStream.pipe(response)
})

server.listen(8888)
console.log('Server listening on port 8888...')
