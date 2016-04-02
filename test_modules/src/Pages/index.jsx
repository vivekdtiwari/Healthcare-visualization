var React = require('react')
var HelloWorld = require('../Components/HelloWorld')
var Timestamp = require('../Components/Timestamp')

var helloWorldElement = React.render(
  <HelloWorld from="server.jsx, running on the server" />,
  document.getElementById('reactHelloContainer')
)

var timestampElement = React.render(
  <Timestamp/>,
  document.getElementById('reactContainer')
)

setInterval(function(){
  helloWorldElement.setState({
    from:"index.jsx, transformed, bundled, and running on client"
  })
  timestampElement.setState({
    date:"Updated through setState. "
    + new Date().toString()
  })
}, 500);
