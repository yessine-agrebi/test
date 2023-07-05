const net = require('net');

const PORT = 1234;

const server = net.createServer(socket => {
  console.log('A new client connected.');

  // Event handler for receiving data from the client
  socket.on('data', data => {
    const receivedData = data.toString('utf8');
    console.log(`Received data: ${receivedData}`);

    // Process the received data based on your application requirements
    // ...

    // Send a response to the client if needed
    // socket.write('Response message');
  });

  // Event handler for client disconnection
  socket.on('end', () => {
    console.log('Client disconnected.');
  });

  // Handle any errors that occur
  socket.on('error', error => {
    console.error('Socket error:', error);
  });
});

// Start the server and listen on the specified port
server.listen(PORT, () => {
  console.log(`TCP server is running on port ${PORT}`);
});
