
// Part 1
// console.log('Hello World 👋');
// console.log(process.platform);
// console.log(process.env.USER);

// Part 2
// const { EventEmitter } = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('lunch', () => {
//     console.log('yum 🍣')
// })
// eventEmitter.emit('lunch');
// eventEmitter.emit('lunch');

// Part 3
// const { readFile, readFileSync, read } = require('fs');
// const txt = readFileSync("./hello.txt", 'utf-8'); // Blocking using sync

// No blocking using callbacks
// readFile('./hello.txt', 'utf-8', (err, txt) => {
//     console.log(txt);
// })
// console.log(txt);
// console.log('Do this ASAP');

// Part4
// Another way to achieve non blocking async code is through promises
// const { readFile } = require('fs').promises;
// async function hello() {

//     const file = await readFile('./hello.txt', 'utf-8');
//     console.log(file);
// }
// hello()
// console.log('Do this ASAP');

// Part 5
// const myModule = require('./my-module');
// console.log(myModule);

// Part 6
// const express = require('express');
// const { readFile } = require('fs');
// const app = express();

// app.get('/', (request, response) => {
//     readFile('./home.html', 'utf-8', (err, html) => {
//         if (err) {
//             response.status(500).send("sorry, out of order");
//         }
//         response.send(html);
//     })
// });

// app.listen(process.env.PORT || 3000, () => console.log(`App is available on http://localhost:3000`))

// Part 7
// More better way to write async code using promises
const express = require('express');
const { readFile } = require('fs').promises;
const app = express();

app.get('/', async (request, response) => {
    response.send(await readFile('./home.html', 'utf-8'));
});

app.listen(process.env.PORT || 3000, () => console.log(`App is available on http://localhost:3000`))