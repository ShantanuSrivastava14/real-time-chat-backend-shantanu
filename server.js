const http = require('http');
const WebSocket = require('ws'); 

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('WebSocket server\n');
});

// Create a WebSocket server instance using the HTTP server
const wss = new WebSocket.Server({ server });

// Array to store connected clients
const clients = [];

// Event listener for new WebSocket connections
wss.on('connection', ws => {
  console.log('Client connected');

  // Add the new client to the clients array
  clients.push(ws);

  // Event listener for receiving messages from clients
  ws.on('message', message => {
    console.log(`Received: ${message}`);

    // Broadcast the received message to all connected clients except the sender
    wss.clients.forEach(client => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          const dataToSend = JSON.stringify({ message, sender: 'server' });
          client.send(dataToSend);// Send the message as-is to other clients
        }
      });
  });

  // Event listener for client disconnection
  ws.on('close', () => {
    console.log('Client disconnected');
    removeClient(ws); // Remove the disconnected client from the clients array
  });

  // Function to remove a client from the clients array
  function removeClient(ws) {
    const index = clients.indexOf(ws);
    if (index !== -1) {
      clients.splice(index, 1);
    }
  }
});

// Start the HTTP server and listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
