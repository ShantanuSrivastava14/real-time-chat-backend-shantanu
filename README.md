
---

# Real-Time Chat Application

This repository contains the source code for the backend of a real-time chat application using WebSocket technology. Users can connect to the chat server and exchange messages in real-time in a shared chatroom environment.

## Features

- **Real-Time Communication:** Users can send and receive messages instantly without page reloads.
- **Multiple Clients:** Supports multiple client connections to the chat server concurrently.
- **Broadcast Messages:** Messages sent by one client are broadcasted to all connected clients except the sender.

## Technologies Used

- **Node.js**: Backend server environment.
- **WebSocket (ws)**: Library for WebSocket communication.
- **HTTP Module**: For creating the HTTP server.
- **JavaScript**: Programming language for both backend and frontend (client-side WebSocket logic).

## Project Structure

```
root/
|-- server.js            # Backend server code handling WebSocket 
|-- README.md            # Project documentation and instructions
```

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/websocket-chat.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the WebSocket server:

   ```bash
   node server.js
   ```

5. Enter your name and start chatting with other connected clients in real-time.

## Deployment

- The WebSocket backend is deployed on Vercel at [https://real-time-chat-backend-shantanu-mocha.vercel.app.com](https://real-time-chat-backend-shantanu-mocha.vercel.app/).


