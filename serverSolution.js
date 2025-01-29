const http = require('http');

const requestListener = (request, response) => {
  try {
    response.setHeader('Content-Type', 'application/json');
    response.writeHead(200);
    response.end(JSON.stringify({ message: 'Hello from Node.js' }));
  } catch (error) {
    console.error('Error handling request:', error);
    response.writeHead(500, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
//This solution uses try...catch to handle any exception that may occur during the request handling. The error is logged to the console, and a proper 500 error is sent back to the client.