var React = require('react');
module.exports = React.createClass({displayName: "exports",
  render : function() {
    return (
      React.createElement("html", null, 
          React.createElement("head", null, 
              React.createElement("title", null, "Hello World")
          ), 
          React.createElement("body", null, 
              React.createElement("div", {id: "reactContainer"}), 
              React.createElement("div", {id: "reactHelloContainer", 
                  dangerouslySetInnerHTML:  {__html: this.props.content} })
          ), 
          React.createElement("script", {src: "/pages/index.js"})
      )      
    )
  }
})
