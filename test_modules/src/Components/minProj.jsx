var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var BarChart = require('../Components/chartingModule');
var RegressionFunc = require('../Components/regression');
var dictMap = {};

var DataFilter = React.createClass({
  handleClick:function(event){

    if(event.type=="click" || event.keyCode=='13'){
      var queryDict = dictMap[document.getElementById('filterBox').value];
      if(queryDict!=undefined){
        //We can proceed HBase Call with a valid dictionaryId
        var kk = this;
        $.get('/hbaseCall',{'colFam':queryDict},function(data){
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
  getInitialState:function(){
    return {
      'xAxis':[],
      'yAxis':[]
    }
  },
  setAxis:function(xAxis,yAxis){
    var RenderObj = RegressionFunc(yAxis,xAxis);
    RenderObj.slope=RenderObj.slope.toPrecision(2);
    ReactDOM.render(
      <div>
      <h5>Regression Statistics</h5><br/>
      <div><strong>Slope : {RenderObj.slope}<br/>Intercept : {RenderObj.intercept}<br/> R-squared(Co-efficient of Determination) : {RenderObj.r2} </strong></div>
      </div>,
      document.getElementById('regressionStat')
    )
  },
  render : function(){
    console.log("regressss");
    console.log(this.props.regressionVal);
    var RegObj = RegressionFunc(this.props.regressionVal.xAxis,this.props.regressionVal.yAxis);
    console.log(RegObj.slope);
    return (
      <div className="panel panel-default">
        <div className="panel-heading">Heading comes here !!! </div>
        <div className="panel-body">
        <BarChart plotData={this.props.plotData} updateAxis={this.setAxis}/>
        </div>
        <div className="panel-footer" id="regressionStat">
          Regression Statistics shown here !
        </div>
      </div>
    )
  }
});

var MinRender = React.createClass({
  getInitialState:function(){
    return {
      hbaseData : {
        data : [],
        xAxis : [1, 2, 3, 4],
        yAxis : [5.2, 5.7, 5.0, 4.2],
        fallbackLower : '',
        fallbackUpper : ''
      }
    }
  },
  handleState: function(dataArray){
    this.setState({hbaseData:dataArray});
    console.log(this.state.hbaseData);
  },
  render : function(){
    console.log(this.state.hbaseData);
    return (
      <div>
        <DataFilter
        testList={this.props.testNames}
        updateState={this.handleState}
        />
        <ChartRender
        plotData={this.state.hbaseData}
        regressionVal={this.state.hbaseData}/>
      </div>
    )
  }
})

module.exports = MinRender;
