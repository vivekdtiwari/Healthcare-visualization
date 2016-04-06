var React = require('react')

module.exports = React.createClass({displayName: "exports",
  getInitialState: function() {
    return { from: this.props.from }
  },
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("div", null, 
          React.createElement("h3", null, "Health-Care Data Visualization using HBase, ReactJS and NodeJS")
        ), 
        React.createElement("div", null, 
          "Start-up message : ", this.state.from
        )
      )
    )
  }
})
