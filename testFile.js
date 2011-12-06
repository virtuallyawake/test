var msg = "Hello Cloud9";
require("http").createServer(function(req, res){
    res.writeHead(200);
    res.end(msg);
}).listen(process.env.C9_PORT);

console.log("http://localhost:process.env.C9_PORT");