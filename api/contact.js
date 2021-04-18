const http = require('http')

const server = http.createServer((req, res) => {

  // only accept post
  if (req.method === 'POST') {
    // Read POST body (form data)
    let body = ''
    req.on('data', data => { body += data })

    // Handle POST received
    req.on('end', () => {
      console.log(body)

      // Respond
      res.writeHead(200, {'Content-Type': 'text/plane'})
      res.end('success')
    })
  }
})


// Listen for contact form submissions
server.listen(2222)
