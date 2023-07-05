const dgram = require('dgram');

const PORT = 1234; // Specify the desired port number

// Create a UDP server
const server = dgram.createSocket('udp4');

// Handle incoming UDP packets
server.on('message', (message, remote) => {
  const data = message.toString('utf8');
  console.log(`Received data from ${remote.address}:${remote.port}: ${data}`);

  // Process the received data based on your application requirements
  // Example: Split the data by comma to extract specific information
  const dataParts = data.split(',');

  // Example: Extract latitude and longitude from the data
  const latitude = dataParts[3];
  const longitude = dataParts[4];

  // Example: Perform further actions with the extracted data
  console.log(`Latitude: ${latitude}`);
  console.log(`Longitude: ${longitude}`);

  // Example: Store the data in a database or trigger other operations
  // ...
});


// Start the server and listen for incoming UDP packets
server.bind(PORT, () => {
  console.log(`UDP server is running on port ${PORT}`);
});
