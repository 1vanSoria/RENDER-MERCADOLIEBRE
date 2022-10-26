const express= require('express');
const { dirname } = require('path');

const app= express();
const path = require ('path');


app.use("/static", express.static("public"));

app.listen(process.env.PORT || 3000, ()=>{
    console.log('servidor funcionando');
});

app.get("/", (req, res)=>{
    res.sendFile(path.resolve("./views/home.html"));
});

app.get("/register", (req, res)=>{

    res.sendFile(path.resolve("./views/register.html"));
});
app.get("/login", (req, res)=>{

    res.sendFile(path.resolve("./views/login.html"));
});

