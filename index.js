const fs = require('fs');



// Non-Synchronous Way, Non-Blocking Code
// fs.readFile('readme.txt', 'utf-8', (err, data) => {
//     fs.writeFile('output.txt', `${data}`, 'utf-8', err => {
//         console.log('Your file has been written');
//     });
//     fs.appendFile()
// } );
// console.log("Reading file");

// Blocking Code , synchronous way
// const textfs = fs.readFileSync('readme.txt', 'utf-8');
// const textOutfs = `Greeting from Hydra: ${textfs}. \n Created on ${Date.now()}`;
// fs.writeFileSync('./exampleDir/output.txt', textOutfs, { flag: 'a'});
// const Outfstext = fs.readFileSync('./exampleDir/output.txt', 'utf-8');
// console.log(textfs);