var React = require('react')
  , HelloWorld = require('./Components/HelloWorld')
  , express = require('express')
  , path = require('path')

var app = express()

app.use('/Components',
  express.static(path.join(path.join(__dirname, '..'),
  'Components')))

app.use('/assets',
  express.static(path.join(path.join(__dirname, '..'),
  'assets')))

app.get('/', function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  var html = React.renderToString(
    React.createElement("html", null, 
      React.createElement("head", null, 
        React.createElement("title", null, "Hello World"), 
        React.createElement("script", {src: "//fb.me/react-0.13.1.js"}), 
        React.createElement("script", {src: "/Components/Timestamp.js"}), 
        React.createElement("script", {src: "/Components/HelloWorld.js"})
      ), 
      React.createElement("body", null, 
        React.createElement(HelloWorld, {from: "index.jsx on the server"}), 
        React.createElement("div", {id: "reactContainer"})
      ), 
      React.createElement("script", {src: "/assets/index.js"})
    ))

    res.end(html)
})

app.listen(8000)
console.log('Server running at http://localhost:8000/')
