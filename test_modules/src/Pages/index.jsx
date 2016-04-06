var React = require('react')
var ReactDOM = require('react-dom')
var HelloWorld = require('../Components/HelloWorld')
var Timestamp = require('../Components/Timestamp')
var TextButton = require('../Components/textButt')
var BarChartMod = require('../Components/chartingModule')
var MinRender = require('../Components/minProj')


var helloWorldElement = ReactDOM.render(
  <HelloWorld from="Welcome to Mini-Project !!!" />,
  document.getElementById('reactHelloContainer')
)
/*
var timestampElement = ReactDOM.render(
  <Timestamp/>,
  document.getElementById('reactContainer')
)

var textBoxElement = ReactDOM.render(
  <TextButton />,
  document.getElementById('textButtonId')
)

var barChartElement = ReactDOM.render(
  <BarChartMod />,
  document.getElementById('barChartId')
)
*/
var minRenderElement = ReactDOM.render(
  <MinRender />,
  document.getElementById('minRenderId')
)
/*
setInterval(function(){
  helloWorldElement.setState({
    from:"index.jsx, transformed, bundled, and running on client"
  })
  timestampElement.setState({
    date:"Updated through setState. "
    + new Date().toString()
  })

}, 500); */
