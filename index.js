// const express = require('express');
// const { createServer } = require("node:http");
// const { Server } = require('socket.io');

// const app = express()
// const server = createServer(app);
// const io = new Server(server)

// app.use(express.static('public'));

// app.get('/', (req, res) => {
//     return res.sendFile('index.html')
// })

// io.on("connection", (socket) => {
//     console.log('A User Connected : '+ socket.id);

//     socket.on("message", (msg)=>{
//         console.log(msg);
//         io.emit(msg);
//     })

//    socket.on('disconnect', () => {
//     console.log('User Disconnected')
//   })
// })

// server.listen(3000, () => {
//     console.log(`Server is runnig on port http://localhost:3000`)
// })

const express = require('express')
const { createServer } = require('node:http')
const { Server } = require('socket.io')

const app = express()
const server = createServer(app)
const io = new Server(server)

app.use(express.static('public'))

app.get('/', (req, res) => {
  return res.sendFile('index.html')
})

io.on('connection', (socket) => {
  console.log('A User Connected : ' + socket.id)

  socket.on('message', (msg) => {
    console.log(msg)
    io.emit('message', msg)
  })

   socket.on('disconnect', () => {
    console.log('User Disconnected')
  })
})

server.listen(3000, () => {
  console.log('server running at 3000 Port')
})