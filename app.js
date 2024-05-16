// GLOBALS - NO WINDOW !!!!
// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the  program is being executed

// const names = require('./2-modules');

// console.log(__dirname);

// Modules

// console.log(names);
// const sayHi = (name) => {
//     console.log(`Hello there ${name}`);
// }


// OS Module
// const os = require('os');

// info about current user
// const user = os.userInfo()

// console.log(user); 

//method returns the system uptime in seconds

// console.log(`The uptime is ${os.uptime()} seconds`)

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem()
// }

// console.log(currentOS);

// const path = require('path');

// console.log(path.sep);

// const filePath = path.join('/exampleDir','output.txt');
// console.log(filePath);

// const base = path.basename(filePath)
// console.log(base);
// sayHi('susan')

// npm - global command, comes with node
// npm --version 

// local dependency use it only in this particular project
// npm i <packageName>
 
// global dependency use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// HTTP Module 

const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end('Welcome to Main Page');
//     } else if (req.url === '/about') {
//         res.end('The about page');
//     } else {
//         res.end('The Website.................');
//     }
// });

// server.listen(5000);

console.log("Using node and Nodemon -- Node Js learning and Express");

const fs = require('fs');

http.createServer((req, res) => {
        // if (req.url === '/') {
        //     res.end('Welcome to Main Page');
        // } else if (req.url === '/about') {
        //     res.end('The about page');
        // } else {
        //     res.end('The Website.................');
        // }
        const filestream = fs.createReadStream('./exampleDir/big.txt','utf-8')
        filestream.on('open', () =>{
            filestream.pipe(res);
        })
    }).listen(5000);
    


// for( let i = 0; i < 10000; i++) {
//     fs.writeFileSync('./exampleDir/big.txt',`Hello World ${i}\n`,{ flag: 'a' });
// }
