import { createServer } from 'http'
import { readFile } from 'fs/promises'

const sleep = m => new Promise(r => setTimeout(r, m))

const server = createServer(async (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' })
  const file = await readFile('./index.html', { encoding: 'utf8' })
  const lines = file.split('\n')

  for (let index = 0; index < lines.length; index++) {
    const line = lines[index]
    response.write(line)
    if (index >= 26) {
      console.log(line)
      await sleep(7000)
    }
  }

  response.end()
})

server.listen(8888)
console.log('Server listening on port 8888...')
