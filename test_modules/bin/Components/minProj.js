var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var BarChart = require('../Components/chartingModule');
var RegressionFunc = require('../Components/regression');
var dictMap = {};

var DataFilter = React.createClass({displayName: "DataFilter",
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
      rows.push(React.createElement("option", {key: test.testName, value: test.testName}))
    }.bind(this));
    return (
    React.createElement("div", {className: "well well-lg"}, 
      React.createElement("div", {className: "form-group"}, 
        React.createElement("input", {type: "text", className: "form-control", list: "testDict", id: "filterBox", onKeyUp: this.handleClick}), 
        React.createElement("dataList", {id: "testDict"}, 
          rows
        )
      ), 
      React.createElement("div", {className: "btn btn-default", onClick: this.handleClick}, "Get Data")
    )
  )
  }
});

var ChartRender = React.createClass({displayName: "ChartRender",
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
      React.createElement("div", null, 
      React.createElement("h5", null, "Regression Statistics"), React.createElement("br", null), 
      React.createElement("div", null, React.createElement("strong", null, "Slope : ", RenderObj.slope, React.createElement("br", null), "Intercept : ", RenderObj.intercept, React.createElement("br", null), " R-squared(Co-efficient of Determination) : ", RenderObj.r2, " "))
      ),
      document.getElementById('regressionStat')
    )
  },
  render : function(){
    console.log("regressss");
    console.log(this.props.regressionVal);
    var RegObj = RegressionFunc(this.props.regressionVal.xAxis,this.props.regressionVal.yAxis);
    console.log(RegObj.slope);
    return (
      React.createElement("div", {className: "panel panel-default"}, 
        React.createElement("div", {className: "panel-heading"}, "Heading comes here !!! "), 
        React.createElement("div", {className: "panel-body"}, 
        React.createElement(BarChart, {plotData: this.props.plotData, updateAxis: this.setAxis})
        ), 
        React.createElement("div", {className: "panel-footer", id: "regressionStat"}, 
          "Regression Statistics shown here !"
        )
      )
    )
  }
});

var MinRender = React.createClass({displayName: "MinRender",
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
      React.createElement("div", null, 
        React.createElement(DataFilter, {
        testList: this.props.testNames, 
        updateState: this.handleState}
        ), 
        React.createElement(ChartRender, {
        plotData: this.state.hbaseData, 
        regressionVal: this.state.hbaseData})
      )
    )
  }
})

module.exports = MinRender;
