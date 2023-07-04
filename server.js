const dgram = require('dgram');

const PORT = 1234; // Specify the desired port number

// Create a UDP server
const server = dgram.createSocket('udp4');

// Handle incoming UDP packets
server.on('message', (message, remote) => {
  const gpsData = message.toString('utf8');
  // Process and store the GPS data
  console.log(gpsData);
});

// Start the server and listen for incoming UDP packets
server.bind(PORT, () => {
  console.log(`UDP server is running on port ${PORT}`);
});
