const http = require('http');
const fs = require('fs');

const hostname = process.env.IP;
const port = process.env.PORT;

// readable stream -- req , can be piped to a writable stream
// response -- writable stream
// SSL seperate module 
const server = http.createServer((req, res) => {
res.writeHead(200, {'Content-Type': 'text/plain'});
  if (req.url === '/file.txt') {
    // __dirname gives current directory
    fs.createReadStream(__dirname + '/file.txt').pipe(res);
  } else {
    res.end("Hello world");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running `);
});