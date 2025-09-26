const express = require('express');
const { createServer } = require("node:http");
const { Server } = require('socket.io');

const app = express()
const server = createServer(app);
const io = new Server(server)

app.use(express.static('public'));

app.get('/', (req, res) => {
    return res.sendFile('index.html')
})

io.on("connection", () => {
    
})

server.listen(3000, () => {
    console.log(`Server is runnig on port http://localhost:3000`)
})
