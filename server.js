const colors = require("colors");
const port = 7878;
const host ="192.168.1.79";

const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("Hola Mundo");
});
app.get("/about", (req, res)=>{
    res.send("About me");
});

app.listen(port, host, ()=>{
    console.log(`Servidor en`, `${host}:${port}`.green);
});