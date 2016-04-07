var React = require('react');
var Chart = require('react-google-charts').Chart;
var d3 = require('d3')
var BarChartData = {
     dataArray : [
         ['Element', 'Density', { role: 'style' }],
         ['Copper', 8.94, '#b87333'],            // RGB value
         ['Silver', 10.49, 'silver'],            // English color name
         ['Gold', 19.30, 'gold'],
         ['Platinum', 21.45, 'color: #e5e4e2' ] // CSS-style declaration
      ],
      options : {
        title: "Density of Precious Metals, in g/cm^3",
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
         ['Element', 'Density', { role: 'style' }],
         ['Copper', 80.94, '#b87333'],            // RGB value
         ['Silver', 10.49, 'silver'],            // English color name
         ['Gold', 19.30, 'gold'],
         ['Platinum', 210.45, 'color: #e5e4e2' ] // CSS-style declaration
      ],
      options : {
        title: "Density of Precious Metals, in g/cm^3",
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
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
			chartType: "BarChart",
			div_id: "BarChart"
		};

    var BarChart2 = {
			data : BarChartData2.dataArray,
			options: BarChartData2.options,
			chartType: "BarChart",
			div_id: "BarChart"
		};
    var kk = this;
    setTimeout(function(){kk.setState({'BarChart':BarChart2})},5000);
		this.setState({
			'BarChart': BarChart
		});

	},

	render: function() {
    console.log(this.props.plotData[1]);
		return (
			<div className="Examples">
				<h3> Bar Chart </h3>
				<Chart chartType={this.state.BarChart.chartType} width={"100%"} height={"100%"} data={this.state.BarChart.data} options = {this.state.BarChart.options} graph_id={this.state.BarChart.div_id} />
			</div>
		);
	}

});

module.exports = BarCharts;
