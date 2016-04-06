var React = require('react');

var DataFilter = React.createClass({
  render : function(){
    return (
    <div className="well well-lg">
      <div className="btn btn-default">Get Data</div>
    </div>
  )
  }
});

var ChartRender = React.createClass({
  render : function(){
    return (
      <div className="panel panel-default">
        <div className="panel-heading">Heading comes here !!! </div>
        <div className="panel-body">Chart will be shown here !!!</div>
      </div>
    )
  }
});

var MinRender = React.createClass({
  render : function(){
    return (
      <div>
        <DataFilter />
        <ChartRender />
      </div>
    )
  }
})

module.exports = MinRender;
