var React = require('react')
  , Layout = require('./Components/Layout')
  , HelloWorld = require('./Components/HelloWorld')
  , express = require('express')
  , path = require('path')

var app = express()

app.use('/pages',
  express.static(path.join(__dirname, 'Pages')));

app.get('/', function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  var content = React.renderToString(
    <HelloWorld from = "server.jsx, running on the server" />
  )
  var html = React.renderToStaticMarkup(
    <Layout content={content}/>
  )

    res.end(html)
})

app.listen(8000)
console.log('Server running at http://localhost:8000/')
