//Documentation of node.js (links) :
// https://nodejs.org/dist/latest-v18.x/docs/api/repl.html  
// https://nodejs.org/dist/latest-v18.x/docs/api/fs.html#fsreadfilesyncpath-options

// File system module.
const fs = require('fs');

// const hello = "Hello World";
// console.log(hello);

const textIn = fs.readFileSync('./txt/input.txt','utf-8');
console.log(textIn);
//Writing to files in node js
const textOut = `This is the information we have about the avacado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt',textOut);
console.log('File written!');