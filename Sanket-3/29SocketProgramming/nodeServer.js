const net = require('net');

const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        console.log("Data received from client", data.toString());
    });

    socket.write('Hello from node server');
});

server.listen(8083, () => {
    console.log("New server up on port 8083")
})