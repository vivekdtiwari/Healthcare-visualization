var React = require('react')

module.exports = React.createClass({displayName: "exports",
  getInitialState: function() {
    return { from: this.props.from }
  },
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("div", null, 
          "This is from the HelloWorld.jsx" + ' ' +
          "component render function."
        ), 
        React.createElement("div", null, 
          "Rendered from: ", this.state.from
        )
      )
    )
  }
})
