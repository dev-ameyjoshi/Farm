//Documentation of node.js (links) :
// https://nodejs.org/dist/latest-v18.x/docs/api/repl.html  
// https://nodejs.org/dist/latest-v18.x/docs/api/fs.html#fsreadfilesyncpath-options

// File system module.
const fs = require('fs');
const http = require('http');


////////////////////////////////////////////////////////////////////////////////////////////////
//Synchronus way : 


const hello = "Hello World";
console.log(hello);


const textIn = fs.readFileSync('./txt/input.txt','utf-8');
console.log(textIn);


//Writing to files in node js

const textOut = `This is the information we have about the avacado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt',textOut);
console.log('File written!');


// Non-Blocking asynchronus way:
fs.readFile('./txt/start.txt','utf-8', (err,data1) => {
        if(err) return console.log("Error Found!");
        fs.readFile(`./txt/${data1}.txt`,'utf-8', (err,data2) => {
                console.log(data2);
                fs.readFile(`./txt/append.txt`,'utf-8', (err,data3) => {
                        console.log(data3);
                        fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8',err => {
                           console.log("Your file has been written :)")
                        })
                });
        });
        
});

console.log("reading file.....");


//regular function and async function has difference in :
// syntax
// and the async function does not get its own disk function and uses the disk keyword from the parent function.
// and is called the lexical disk keyword.
// where as the regular function does always gets its own disk keyword function.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//SERVER

const server = http.createServer((req,res) =>{
        console.log(req);
        res.end("Hello from the server!");
});

server.listen(8000,'127.0.0.1', () => {
        console.log("Listening on port 8000");
});
