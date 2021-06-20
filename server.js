const colors = require("colors");
const port = 7878;
const host ="192.168.1.79";
/*
const http = require("http");
const server=http.createServer((req, res)=>{
    res.status =200;
    res.setHeader('Content-Type', 'text/html');
    res.end("Hello WORD");
});
server.listen(port, host, ()=>{
    console.log(`Servidor en`, `${host}:${port}`.green);
});
*/

const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("Hola Mundo");
});

app.listen(port, host, ()=>{
    console.log(`Servidor en`, `${host}:${port}`.green);
});