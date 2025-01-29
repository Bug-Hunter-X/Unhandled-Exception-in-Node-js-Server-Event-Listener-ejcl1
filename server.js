const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js' }));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});

//Uncommon error: Server unexpectedly closes after some time due to unhandled exceptions in event listeners.
//This often occurs when there's a bug within the requestListener function or other parts of the server logic that aren't caught.