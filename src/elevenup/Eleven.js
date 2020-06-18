import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
import SSF from "ssf";

const Eleven = (props) => {
	useEffect(() => {
		d3.select('.viz > *').remove();
		drawEleven(props)
	}, [props])
	return <div className='viz' />
}

const drawEleven = (props) => {
  // background body
  console.log(props)
  var svg = d3.select(".viz").append("svg");
	svg.attr("width", props.width)
  .attr("height", props.height)
  .attr("id", "svg-viz")
  .attr("preserveAspectRatio", "xMidYMid meet")
  .attr("viewBox", `${props.width/-2} ${props.height/-2} ${props.width} ${props.height}`)
  .append("rect")
  .attr("x", props.width/-2)
  .attr("y", props.height/-2)
  .attr("width", "100%")
  .attr("height", "100%")
  .attr("fill", "#bfaf62");

  let limiting_aspect = props.w < props.h ? "vw" : "vh";
  let radius = 0.35*Math.min(props.width, props.height);

  svg.append("circle")
  .attr("r", `${radius}`)
  .attr("fill", "#a69840")
  .attr("stroke", "#282828")
  .attr("stroke-width", "8px");

  svg.selectAll("circle")
  .data(d3.range(0,100,3))
  .enter().append("circle")
  .attr("r", function(d){return `${radius*(d/100)}`})
  .attr("fill", "none")
  .attr("stroke", "#827733")
  .attr("stroke-width", ".5px");

  let tick_radius = 0.38*Math.min(props.width, props.height);
  svg.selectAll("line")
  .data(d3.range(12))
  .enter().append("line")
  .attr("x1", function(d) {return `${tick_radius * Math.cos(-4*Math.PI/3+(0.48*d))}`})
  .attr("y1", function(d) {return `${tick_radius * Math.sin(-4*Math.PI/3+(0.48*d))}`})
  .attr("x2", function(d) {return `${tick_radius * 1.18 * Math.cos(-4*Math.PI/3+(0.48*d))}`})
  .attr("y2", function(d) {return `${tick_radius * 1.18 * Math.sin(-4*Math.PI/3+(0.48*d))}`})
  .attr("fill", "#a69840")
  .attr("stroke", "#282828")
  .attr("stroke-width", "4px");

  let spin_radius = 0.1*Math.min(props.width, props.height);
  svg.append("line")
  .attr("x1", function(d) {return `${spin_radius * Math.cos(-4*Math.PI/3+(0.48*props.value))}`})
  .attr("y1", function(d) {return `${spin_radius * Math.sin(-4*Math.PI/3+(0.48*props.value))}`})
  .attr("x2", function(d) {return `${spin_radius * 3 * Math.cos(-4*Math.PI/3+(0.48*props.value))}`})
  .attr("y2", function(d) {return `${spin_radius * 3 * Math.sin(-4*Math.PI/3+(0.48*props.value))}`})
  .attr("fill", "#a69840")
  .attr("stroke", "#282828")
  .attr("stroke-width", "8px");

  svg.append("text")
  .attr("x", function(d) {return `${tick_radius * 1.55 * Math.cos(-4*Math.PI/3+(0.48*0))}`})
  .attr("y", function(d) {return `${tick_radius * 1.45 * Math.sin(-4*Math.PI/3+(0.48*0))}`})
  .attr("fill", "#282828")
  .attr("font-family", "monospace")
  .style("font-size", `10${limiting_aspect}`)
  .text("0");

  svg.append("text")
  .attr("x", function(d) {return `${tick_radius * 1.3 * Math.cos(-4*Math.PI/3+(0.48*11))}`})
  .attr("y", function(d) {return `${tick_radius * 1.4 * Math.sin(-4*Math.PI/3+(0.48*11))}`})
  .attr("fill", "#282828")
  .attr("font-family", "monospace")
  .style("font-size", `10${limiting_aspect}`)
  .text("11");

  var shiftx = 0;
  var shifty = 0;

  svg.on("mouseover", function() {
    if (props.value === 11) {
      if (shiftx === 0) {
        var neg = Math.random > .5 ? -1 : 1
        shiftx = (Math.random() + (2*Math.random()))*neg
      } else if (shiftx !== 0) {
        shiftx = 0
      }
      if (shifty === 0) {
        var neg = Math.random > .5 ? -1 : 1
        shifty = (Math.random() + (2*Math.random()))*neg
      } else if (shiftx !== 0) {
        shifty = 0
      }
      d3.selectAll("#svg-viz")
      .attr("transform", "translate(" + shiftx + "," + shifty + ")");
    }
  })



}

export default Eleven
