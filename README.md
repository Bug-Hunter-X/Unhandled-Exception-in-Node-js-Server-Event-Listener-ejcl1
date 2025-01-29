# Node.js Server Unhandled Exception Bug

This repository demonstrates a common yet often overlooked issue in Node.js server development: unhandled exceptions within event listeners leading to unexpected server termination.

## Bug Description
The provided `server.js` contains a simple HTTP server.  Under normal circumstances, it works fine. However, if the `requestListener` function encounters an unhandled exception (e.g., accessing a non-existent property of the `request` object), the server will unexpectedly close without any clear indication in the console.

## Solution
The solution demonstrates the implementation of comprehensive error handling within the event listener to prevent server crashes.

## How to Reproduce
1. Clone the repository.
2. Run `node server.js`.
3. Observe the server running on port 8080 (this may work fine). 
4. To trigger the bug, modify the `requestListener` function in `server.js` to introduce an unhandled exception(e.g.,  `console.log(request.nonExistentProperty);`).
5. Restart the server and you will observe it closes after request handling.

## How to Fix
Examine the `serverSolution.js` file to see how to use try...catch blocks to handle potential exceptions gracefully.  Always handle potential errors and log them appropriately to avoid such unexpected shutdowns.