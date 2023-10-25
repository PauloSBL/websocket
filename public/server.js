const express = require('express');
const app = express();
const server = require('http').createServer(app);
const path = require('path');
const cors = require('cors');

const io = require('socket.io')(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

app.use(express.static(path.join(__dirname, '/public')));

app.listen(3000,()=>{
    console.log('Configurando server Express...')
})
io.listen(8080)

io.on('connection', (socket)=>{
    console.log('conectado')

    socket.on('message', (data)=>{
        io.emit('message', data)
    })

})

io.on('disconnect', (data)=>{
    console.log('desconectado')
})

