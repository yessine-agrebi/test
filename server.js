const dgram = require('dgram');

const PORT = 1234; // Specify the desired port number

// Create a UDP server
const server = dgram.createSocket('udp4');

// Handle incoming UDP packets
server.on('message', (message, remote) => {
  const data = message.toString('utf8');
  console.log(`Received data from ${remote.address}:${remote.port}: ${data}`);

  // Add additional logging statements to track the flow
  console.log('Processing UDP packet...');

  // Rest of your processing logic

  console.log('UDP packet processed successfully.');

  // Rest of your code
});


// Start the server and listen for incoming UDP packets
server.bind(PORT, () => {
  console.log(`UDP server is running on port ${PORT}`);
});
