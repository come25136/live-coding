var http = require("http"),
    fs = require("fs"),
    ejs = require("ejs");

http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type" : "text/html"});
    var output = fs.readFile("./index.ejs", "utf-8");
    res.write(output);
    res.end();
}).listen(1337);
