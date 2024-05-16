// const EventEmitter = require('events');
const http = require('http')

// const customEmitter = new EventEmitter();

// customEmitter.on('response',(name,id) => {
//     console.log(`Hey there John ${name} and age is ${id}`);
// })
const server = http.createServer()

server.on('request', (req,res) => {
    res.end("Event Emitter in http server!!")
})
// customEmitter.on('response',() => {
//     console.log(`Some Logicccc`);
// })


// customEmitter.emit('response','Wick', 45)