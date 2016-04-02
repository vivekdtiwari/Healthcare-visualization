var http = require('http');
var React = require('react');

http.createServer(function(req,res){
  res.writeHead({"content-type":"text/html"});
  res.end(
    React.renderToString(
      React.createElement("html", null, 
        React.createElement("head", null, 
          React.createElement("title", null, "Hello World :) ")
        ), 
        React.createElement("body", null, 
          "nodeHello.jsx compiled into nodeHello.js by hand on server. I renamed js file to jsx uncertain of usage." + ' ' +
          "Modification"
        )
      )
    )
  )
}).listen(8000);

console.log("Server running at http://localhost:8000/");
