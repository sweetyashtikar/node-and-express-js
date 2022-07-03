const express = require('express');
const app = express();
let port = process.env.PORT || 3000;
const importData = require('./data.json');

app.get("/",(req,res )=> {
res.send('hello world');
});

app.get("/players",(req,res) =>{
    res.send(importData);
});

app.listen(port, () => {
    console.log('example app is listening on port http://localhost:${port}');
});