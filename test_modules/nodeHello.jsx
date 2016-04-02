var http = require('http');
var React = require('react');

http.createServer(function(req,res){
  res.writeHead({"content-type":"text/html"});
  res.end(
    React.renderToString(
      <html>
        <head>
          <title>Hello World :) </title>
        </head>
        <body>
          nodeHello.jsx compiled into nodeHello.js by hand on server. I renamed js file to jsx uncertain of usage.
        </body>
      </html>
    )
  )
}).listen(8000);

console.log("Server running at http://localhost:8000/");
