const http = require('http');
const url = require('url');
const today = require('./today');

const server = http.createServer(function(req, res) {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
    let message = 'Hello World!';

  if (pathname === '/time') {
        const dateVal = today.getDate();
        if (dateVal.getHours() > 6 && dateVal.getHours() < 12) {
        message = "Good Morning";
        } else if (dateVal.getHours() >= 12 && dateVal.getHours() < 18) {
            message = "Good Afternoon";
        } else {
        message = "Good Evening";
        }
  }
   else if(pathname !== '/') {
        message = "404 Not Found";
    }


  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(message);
});

const port = 8080;
server.listen(port);

console.log(`Server listening on port: ${port}`);