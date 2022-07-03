var http = require('http')

var dt = require('/modules');
var server = http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    const result = dt.datetime();
    res.write('current date and time');
    res.write(result);
    res.end()
})