const colors = require("colors");
const port = 7878;
const host ="192.168.1.79";

const express = require("express");
const morgan = require("morgan");
const app = express();

//SETTINGS
app.set("APPNAME", "Página Express");
app.set("view engine", "ejs");

//MIDDLEWARE
app.use(morgan("dev"));

//ROUTES
app.get("/", (req, res)=>{
    const datos = [{name:"AlCss"}, {name:"Julissa"}, {name:"Lily"}, {name: "Yogi"}]
    res.render('index.ejs', {nombres: datos});
});
app.get("/:url", (req, res)=>{
    res.send(req.params.url);
    res.end();
})
app.get("/index", (req, res)=>{
    res.send("<h1>HOLA</h1>");
});

app.use(express.static("public"));

app.listen(port, host, ()=>{
    console.log(app.get('APPNAME'));
    console.log(`Servidor en`, `${host}:${port}`.green);
});