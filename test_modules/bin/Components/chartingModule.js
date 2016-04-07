var React = require('react');
var Chart = require('react-google-charts').Chart;
var d3 = require('d3')
var monthFormat = d3.time.format("%m-%Y");
var BarChartData = {
     dataArray : [
         ['Default', 'Test-Plot', { role: 'style' }],
         ['Data', 0, '#b87333'],            // RGB value
         ['Not', 0, 'silver'],            // English color name
         ['Yet', 0, 'gold'],
         ['Loaded', 0, 'color: #e5e4e2' ] // CSS-style declaration
      ],
      options : {
        isStacked : true,
        title: "Medical Data Visualization (Select Marker above)",
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
        animation :{
          startup:true,
          duration:1000,
          easing:'out'
        }
      }
};

var BarCharts = React.createClass({displayName: "BarCharts",

	getInitialState: function() {
		return {
			BarChart: {
				data: [],
				chartType: "",
				options : {}
			}
		};
	},
	componentDidMount: function() {

		var BarChart = {
			data : BarChartData.dataArray,
			options: BarChartData.options,
			chartType: "ColumnChart",
			div_id: "BarChart"
		};

		this.setState({
			'BarChart': BarChart
		});

	},
  shouldComponentUpdate:function(nextProps,nextState){
    console.log("comp upd");
    console.log(this.props);

    return true;

  },
  correctState : function(param){
    this.setState({'BarChart':param});
  },
	render: function() {
    //this.props=nextProps;
    if(this.props.plotData.data.length>0){
      var fallbackLower = +this.props.plotData.fallbackLower;
      var fallbackUpper = +this.props.plotData.fallbackUpper;
      console.log("proceed chart modify");
      var tempArr = this.props.plotData.data;
      var d3Nest = d3.nest()
      .key(function(d){
        return monthFormat(new Date(d.reportDate))})
      .rollup(function(d){
        var positive = d3.sum(d,function(dd){
          var value = +dd.value;
          if(isNaN(value)){
            return 1;
          }
          var lower = +dd.lowerBound;
          if(isNaN(lower)){
            lower = +fallbackLower;
          }
          var upper = +dd.upperBound;
          if(isNaN(upper)){
            upper = +fallbackUpper;
          }
          if(value>=lower && value<=upper){
            return 1;
          } else {
            return 0;
          }
        });
        var negative = d.length-positive;
        return {'positive':positive,'negative':negative};
      })
      .entries(tempArr);
      var googleRender = [];
      var headerArr = ['Date','Positive','Negative'];
      var xAxis = [];
      var yAxis = [];
      googleRender.push(headerArr);
      googleRender.push();
      for(var entry in d3Nest){
        var tempRender = [];
        tempRender.push(d3Nest[entry].key);
        tempRender.push(d3Nest[entry].values.positive);
        tempRender.push(d3Nest[entry].values.negative);
        yAxis.push(d3Nest[entry].values.positive+d3Nest[entry].values.negative);
        xAxis.push(monthFormat.parse(d3Nest[entry].key).valueOf());
        googleRender.push(tempRender);
      }
      this.props.updateAxis(xAxis,yAxis);
      var BarChart = {
  			data : googleRender,
  			options: BarChartData.options,
  			chartType: "ColumnChart",
  			div_id: "BarChart"
  		};
      console.log("hello");
      console.log(googleRender);
     //this.correctState(BarChart);
    }
    console.log("render of chart");
    console.log(this.state.BarChart.data);
		return (
			React.createElement("div", {className: "Examples"}, 
				React.createElement("h3", null, " Bar Chart "), 
				React.createElement(Chart, {chartType: this.state.BarChart.chartType, width: "100%", height: "500px", data: googleRender, options: this.state.BarChart.options, graph_id: this.state.BarChart.div_id})
			)
		);
	}

});

module.exports = BarCharts;
