var React = require('react')
  , Layout = require('./Components/Layout')
  , HelloWorld = require('./Components/HelloWorld')
  , express = require('express')
  , path = require('path')
  , HBase = require('node-thrift-hbase');

var app = express()

app.use('/pages',
  express.static(path.join(__dirname, 'Pages')));

  var config = {

      host: 'localhost',

      port: 9090

  };


app.get('/hbaseCall',function(req,res){
  console.log("Congrats!!!! You finally reached the server side x.x");
  console.log(req.query.columnFamily);
  var hbaseClient = HBase.client(config);
  var get = hbaseClient.Get(req.query.rowNum);
  get.add(req.query.columnFamily,req.query.columnName);
  console.log("now gonna call Hbase");
  hbaseClient.get(req.query.tableName,get,function(err,data){
    console.log("Result from server");
    if(err){
      console.log('error:',err);
      return;
    }
    console.log(err,data);
    res.writeHead(200,{'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));
  });
})
app.get('/', function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  var content = React.renderToString(
    React.createElement(HelloWorld, {from: "Welcome to Mini-Project !!!"})
  )
  var html = React.renderToStaticMarkup(
    React.createElement(Layout, {content: content})
  )

    res.end(html)
})

app.listen(8000)
console.log('Server running at http://localhost:8000/')
