var React = require('react');
var $ = require('jQuery');
var BarChart = require('../Components/chartingModule');
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
  render : function(){
    return (
      React.createElement("div", {className: "panel panel-default"}, 
        React.createElement("div", {className: "panel-heading"}, "Heading comes here !!! "), 
        React.createElement("div", {className: "panel-body"}, 
        React.createElement(BarChart, {plotData: this.props.plotData})
        )
      )
    )
  }
});

var MinRender = React.createClass({displayName: "MinRender",
  getInitialState:function(){
    return {
      hbaseData : []
    }
  },
  handleState: function(dataArray){
    this.setState({hbaseData:dataArray});
  },
  render : function(){
    return (
      React.createElement("div", null, 
        React.createElement(DataFilter, {
        testList: this.props.testNames, 
        updateState: this.handleState}
        ), 
        React.createElement(ChartRender, {plotData: this.state.hbaseData})
      )
    )
  }
})

module.exports = MinRender;
