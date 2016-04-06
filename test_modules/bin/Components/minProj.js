var React = require('react');

var DataFilter = React.createClass({displayName: "DataFilter",
  render : function(){
    return (
    React.createElement("div", {className: "well well-lg"}, 
      React.createElement("div", {className: "btn btn-default"}, "Get Data")
    )
  )
  }
});

var ChartRender = React.createClass({displayName: "ChartRender",
  render : function(){
    return (
      React.createElement("div", {className: "panel panel-default"}, 
        React.createElement("div", {className: "panel-heading"}, "Heading comes here !!! "), 
        React.createElement("div", {className: "panel-body"}, "Chart will be shown here !!!")
      )
    )
  }
});

var MinRender = React.createClass({displayName: "MinRender",
  render : function(){
    return (
      React.createElement("div", null, 
        React.createElement(DataFilter, null), 
        React.createElement(ChartRender, null)
      )
    )
  }
})

module.exports = MinRender;
