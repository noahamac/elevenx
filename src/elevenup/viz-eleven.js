import Eleven from './Eleven'
import React from 'react'
import ReactDOM from 'react-dom'
import SSF from "ssf"

function processData(data, queryResponse, config, viz) {
	let dims, meas;
	dims = queryResponse['fields']['dimension_like'];
	meas = queryResponse['fields']['measure_like'];
	var chunk = {
		label: data[0][dims[0]['name']],
		value: data[0][meas[0]['name']]
	}
  return chunk;
}
looker.plugins.visualizations.add({
  	id: 'elevengauge',
  	label: 'Eleven Up Visualization',
  	options: {
		value: {
			type: "number",
			label: "Value",
			default: 0,
			display: "range",
			min: 0,
			max: 11
		  },
  	},
  	create: function(element, config) {
  	},
  	// Render in response to the data or settings changing
  	updateAsync: function(data, element, config, queryResponse, details, done) {
      	var margin = {top: 20, right: 20, bottom: 20, left: 20};
        var width = element.clientWidth;
        var height = element.clientHeight;

        config.margin = margin;
        config.width = width;
		config.height = height;
		config.value = config.value;

  	    this.clearErrors();

        // process data and return a formatted chunk
      	let chunk;
      	chunk = processData(data, queryResponse, config, this);
      	console.log('chunk', chunk)
      	// Finally update the state with our new data
    		this.chart = ReactDOM.render(
            	<Eleven {...config} />,
            	element
    		);

      	// We are done rendering! Let Looker know.
      	done()
  	}
});
