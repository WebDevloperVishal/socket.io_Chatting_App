const express = require('express');
const { createServer, Server } = require("node:http");
const { server } = require('socket.io');

app.use(express.static('public'));

const app = express()

const server = createServer(app);
const io = new Server(server)

server.listen(3000, () => {
 console.log(`Server is runnig on port http://localhost:3000`)
})
    