var React = require('react');
var Chart = require('react-google-charts').Chart;
var d3 = require('d3')
var monthFormat = d3.time.format("%d-%m");
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
var BarChartData2 = {
     dataArray : [
         ['Date', 'Positive', 'Negative'],
         ['2016-04-07T05:32:55.913Z', 80, 30],            // RGB value
         ['2016-04-07T05:32:55.913Z', 30, 100],            // English color name
         ['2016-04-07T05:32:55.913Z', 22, 20],
         ['2016-04-07T05:32:55.913Z', 210.45, 50 ] // CSS-style declaration
      ],
      options : {
        title: "Density of Precious Metals, in g/cm^3",
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
        isStacked : true,
        animation :{
          startup:true,
          duration:1000,
          easing:'out'
        }
      }
};
var BarCharts = React.createClass({

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
    console.log(d3);

		var BarChart = {
			data : BarChartData.dataArray,
			options: BarChartData.options,
			chartType: "ColumnChart",
			div_id: "BarChart"
		};

    var BarChart2 = {
			data : BarChartData2.dataArray,
			options: BarChartData2.options,
			chartType: "ColumnChart",
			div_id: "BarChart"
		};
    var kk = this;
    setTimeout(function(){kk.setState({'BarChart':BarChart2})},5000);
		this.setState({
			'BarChart': BarChart
		});

	},
  shouldComponentUpdate:function(){
    if(this.props.plotData.data.length>0){
      console.log("proceed chart modify");
      var tempArr = this.props.plotData.data;
      var d3Nest = d3.nest()
      .key(function(d){
        return monthFormat(new Date(d.reportDate))})
      .rollup(function(d){
        console.log(d);
      })
      .entries(tempArr);
    }
    return true;
  },
	render: function() {
		return (
			<div className="Examples">
				<h3> Bar Chart </h3>
				<Chart chartType={this.state.BarChart.chartType} width={"100%"} height={"500px"} data={this.state.BarChart.data} options = {this.state.BarChart.options} graph_id={this.state.BarChart.div_id} />
			</div>
		);
	}

});

module.exports = BarCharts;
