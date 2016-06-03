var http = require("http"),
    fs = require("fs"),
    ejs = require("ejs");

var server = http.createServer();
var template = fs.readFileSync(__dirname + '/public_html/index.ejs', 'utf-8');
server.on('request', function(req, res){
    var data = ejs.render(template, {});
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(data);
    res.end();
});
server.listen(1337);
console.log("server listening...");
