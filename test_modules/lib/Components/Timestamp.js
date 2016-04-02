var Timestamp = React.createClass({displayName: "Timestamp",
  getInitialState: function() {
    return { date: "Initial State: " + new Date().toString() }
  },
  render: function() {
    return React.createElement("div", null, this.state.date)
  }
})
