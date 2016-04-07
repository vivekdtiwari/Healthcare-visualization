var React = require('react');
var $ = require('jQuery');
var BarChart = require('../Components/chartingModule');
var dictMap = {};

var DataFilter = React.createClass({
  handleClick:function(event){

    if(event.type=="click" || event.keyCode=='13'){
      var queryDict = dictMap[document.getElementById('filterBox').value];
      if(queryDict!=undefined){
        //We can proceed HBase Call with a valid dictionaryId
        var kk = this;
        $.get('/hbaseCall',{'colFam':queryDict},function(data){
          console.log(data);
          kk.props.updateState(data);
        });
      } else {
        alert('Invalid Input');
      }
    }
  },
  render : function(){
    var rows = [];
    this.props.testList.forEach(function(test){
      dictMap[test.testName]=test.dictionaryId;
      rows.push(<option key={test.testName} value={test.testName}></option>)
    }.bind(this));
    return (
    <div className="well well-lg">
      <div className="form-group">
        <input type="text" className="form-control" list="testDict" id="filterBox" onKeyUp={this.handleClick}/>
        <dataList id="testDict">
          {rows}
        </dataList>
      </div>
      <div className="btn btn-default" onClick={this.handleClick}>Get Data</div>
    </div>
  )
  }
});

var ChartRender = React.createClass({
  render : function(){
    return (
      <div className="panel panel-default">
        <div className="panel-heading">Heading comes here !!! </div>
        <div className="panel-body">
        <BarChart plotData={this.props.plotData}/>
        </div>
      </div>
    )
  }
});

var MinRender = React.createClass({
  getInitialState:function(){
    return {
      hbaseData : {}
    }
  },
  handleState: function(dataArray){
    console.log(dataArray);
    this.setState({hbaseData:dataArray});
    console.log(this.state.hbaseData);
  },
  render : function(){
    console.log("re-render");
    console.log(this.state.hbaseData);
    return (
      <div>
        <DataFilter
        testList={this.props.testNames}
        updateState={this.handleState}
        />
        <ChartRender plotData={this.state.hbaseData}/>
      </div>
    )
  }
})

module.exports = MinRender;
