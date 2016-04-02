var React = require('react')
var HBase = require('node-thrift-hbase');

k

module.exports = React.createClass({displayName: "exports",
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
      React.createElement("div", {id: "meh", className: "container"}, 
      React.createElement("div", {className: "form-group"}, 
      React.createElement("input", {type: "text", className: "form-control", placeholder: "Enter HBase table name.", id: "hbaseTableName"})
      ), 
      React.createElement("div", {className: "form-group"}, 
      React.createElement("input", {type: "text", className: "form-control", placeholder: "Select Column Family from table.", id: "columnFamily"})
      ), 
      React.createElement("div", {className: "form-group"}, 
      React.createElement("input", {type: "text", className: "form-control", placeholder: "Select Column from columnFamily", id: "columnName"})
      ), 
      React.createElement("div", {className: "form-group"}, 
      React.createElement("input", {type: "text", className: "form-control", placeholder: "Select row number to retreive.", id: "rowNum"})
      ), 
      React.createElement("p", null, 
        "You ", text, " this. Click to toggle."
      ), 
      React.createElement("button", {className: "btn btn-default", onClick: this.handleClick}, buttText)
      )
    );
  }
})
