var React = require('react')
  , Layout = require('./Components/Layout')
  , HelloWorld = require('./Components/HelloWorld')
  , express = require('express')
  , path = require('path')
  , HBase = require('node-thrift-hbase');

//hangout copy
//hangout end


var app = express()

app.use('/pages',
  express.static(path.join(__dirname, 'Pages')));

  var config = {

      host: 'localhost',

      port: 9090

  };


app.get('/hbaseCall',function(req,res){
  console.log("Server Side method : ");
  var hbaseClient = HBase.client(config);
  var scan = hbaseClient.Scan();
  scan.addStartRow('1');
  scan.addStopRow('700300');
  scan.add(req.query.colFam);
  scan.addNumRows(100000);

  hbaseClient.scan('medData',scan,function(err,data){ //get users table
    console.log("Response from HBase received");
     if(err){
         console.log('error:',err);
         return;
     }

  var xAxis =[];
  var yAxis= [];
  var chartData = [];
  var fallbackLower=99999999, fallbackUpper=-99999999;
  for(i in data){
    var colVals = data[i].columnValues;
    var date = false;
    var arrElem = {};
    for (j in colVals){
      if(colVals[j].qualifier == 'reportDate'){
        arrElem['reportDate']=((new Date(colVals[j].value)).toISOString());
        xAxis.push((new Date(colVals[j].value)).valueOf());
        date = true;
      }
      if(date && colVals[j].qualifier == 'value'){
        arrElem['value']=(colVals[j].value);
        yAxis.push(colVals[j].value);
        date = false;
      }
      if(colVals[j].qualifier == 'lowerBound'){
        if(!isNaN(colVals[j].value) && Number(colVals[j].value)<fallbackLower){
          fallbackLower = Number(colVals[j].value);
        }
          arrElem['lowerBound']=colVals[j].value;
      }
      if(colVals[j].qualifier == 'upperBound'){
        if(!isNaN(colVals[j].value) && Number(colVals[j].value)>fallbackUpper){
          fallbackUpper = Number(colVals[j].value);
        }
        arrElem['upperBound']=colVals[j].value;
      }
    }
    chartData.push(arrElem);
  }
    res.writeHead(200,{'Content-Type': 'application/json'});
    res.end(JSON.stringify({'data':chartData,'xAxis':xAxis,'yAxis':yAxis,'fallbackLower':fallbackLower,'fallbackUpper':fallbackUpper}));
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
