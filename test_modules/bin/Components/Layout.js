var React = require('react');
module.exports = React.createClass({displayName: "exports",
  render : function() {
    return (
      React.createElement("html", null, 
          React.createElement("head", null, 
              React.createElement("meta", {charSet: "utf-8"}), 
              React.createElement("link", {href: "https://bootswatch.com/paper/bootstrap.min.css", type: "text/css", rel: "stylesheet"}), 
              React.createElement("title", null, "Hello World")
          ), 
          React.createElement("body", null, 
              React.createElement("div", {id: "reactContainer"}), 
              React.createElement("div", {id: "reactHelloContainer", 
                  dangerouslySetInnerHTML:  {__html: this.props.content} }), 
              React.createElement("div", {id: "textButtonId"}), 
              React.createElement("div", {id: "barChartId"}), 
              React.createElement("div", {className: "container"}, 
                React.createElement("div", {id: "minRenderId"})
              )
          ), 
          React.createElement("script", {src: "/pages/index.js"})
      )
    )
  }
})
