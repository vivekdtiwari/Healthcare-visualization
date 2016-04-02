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
  console.log("fuccckinnggg servere callll !!!!");
  var hbaseClient = HBase.client(config);
  var get = hbaseClient.Get('1');
  get.add('cf','a');
  console.log("now gonna call");
  hbaseClient.get('test',get,function(err,data){
    console.log("Restult from server");
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
    <HelloWorld from = "server.jsx, running on the server" />
  )
  var html = React.renderToStaticMarkup(
    <Layout content={content}/>
  )

    res.end(html)
})

app.listen(8000)
console.log('Server running at http://localhost:8000/')
