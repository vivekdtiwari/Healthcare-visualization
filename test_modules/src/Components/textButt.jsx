var React = require('react')
var HBase = require('node-thrift-hbase');

k

module.exports = React.createClass({
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event){
    this.setState({liked: !this.state.liked});
    var tableName = document.getElementById('hbaseTableName').value;
    var columnFamily = document.getElementById('columnFamily').value;
    var columnName = document.getElementById('columnName').value;
    var rowNum = document.getElementById('rowNum').value;
    var get = hbaseClient.Get('1');
    get.add('cf','a');

  },
  render: function() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    var buttText = this.state.liked ? 'Unlike':'Like';
    return (
      <div id="meh" className="container">
      <div className="form-group">
      <input type="text" className="form-control" placeholder="Enter HBase table name." id="hbaseTableName"/>
      </div>
      <div className="form-group">
      <input type="text" className="form-control" placeholder="Select Column Family from table." id="columnFamily"/>
      </div>
      <div className="form-group">
      <input type="text" className="form-control" placeholder="Select Column from columnFamily" id="columnName"/>
      </div>
      <div className="form-group">
      <input type="text" className="form-control" placeholder="Select row number to retreive." id="rowNum"/>
      </div>
      <p>
        You {text} this. Click to toggle.
      </p>
      <button className="btn btn-default" onClick={this.handleClick}>{buttText}</button>
      </div>
    );
  }
})
