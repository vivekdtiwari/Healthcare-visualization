var React = require('react')

module.exports = React.createClass({
  getInitialState: function() {
    return { from: this.props.from }
  },
  render: function() {
    return (
      <div>
        <div>
          <h3>Health-Care Data Visualization using HBase, ReactJS and NodeJS</h3>
        </div>
        <div>
          Start-up message : {this.state.from}
        </div>
      </div>
    )
  }
})
