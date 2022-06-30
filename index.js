const express = require("express");
const app = express()

var PORT = process.env.port||3000
  
app.get("/age",function(req,res){

    res.send('hello'+ req.query.name+
    ''+'you are currently 22 years old'
    )

})
app.listen, (PORT, function(error){
    if(error) throw error
    console.log("api is working")
})