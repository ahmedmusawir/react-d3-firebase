import React from 'react';
import D3blackbox from 'd3blackbox';
import * as d3 from 'd3';
import menu from './menu.json';
import db from '../config/fbConfig';

const MooseBarchart = D3blackbox((anchor, props) => {
  // select the svg container first
  // const svg = d3
  //   .select('.canvas')
  //   .append('svg')
  //   .attr('width', 600)
  //   .attr('height', 600);

  // create margins & dimensions
  // const margin = { top: 20, right: 20, bottom: 100, left: 100 };
  // const graphWidth = 600 - margin.left - margin.right;
  // const graphHeight = 600 - margin.top - margin.bottom;

  // select the svg container first
  // create margins & dimensions

  const svg = d3.select(anchor.current),
    margin = { top: 20, right: 20, bottom: 100, left: 100 },
    graphWidth = +props.width - margin.left - margin.right,
    graphHeight = +props.height - margin.top - margin.bottom;

  // const graph = svg
  //   .append('g')
  //   .attr('width', graphWidth)
  //   .attr('height', graphHeight)
  //   .attr('transform', `translate(${margin.left}, ${margin.top})`);

  const graph = svg
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  // create axes groups
  const xAxisGroup = graph
    .append('g')
    .attr('transform', `translate(0, ${graphHeight})`);

  const yAxisGroup = graph.append('g');

  const data = [
    { width: 200, height: 100, fill: 'purple' },
    { width: 100, height: 60, fill: 'pink' },
    { width: 50, height: 30, fill: 'red' },
  ];

  // join the data to rects
  const rects = svg.selectAll('rect').data(data);

  // add attrs to rects already in the DOM
  rects
    .attr('width', d => d.width)
    .attr('height', d => d.height)
    .attr('fill', d => d.fill);

  // append the enter selection to the DOM
  const added = rects
    .enter()
    .append('rect')
    .attr('width', d => d.width)
    .attr('height', d => d.height)
    .attr('fill', d => d.fill);

  // d3.json(menu).then(data => {
  //   console.log(data);

  //   const y = d3
  //     .scaleLinear()
  //     .domain([0, d3.max(data, d => d.orders)])
  //     .range([graphHeight, 0]);

  //   const x = d3
  //     .scaleBand()
  //     .domain(data.map(item => item.name))
  //     .range([0, graphWidth])
  //     .paddingInner(0.2)
  //     .paddingOuter(0.2);

  //   // join the data to circs
  //   const rects = graph.selectAll('rect').data(data);

  //   // add attrs to circs already in the DOM
  //   rects
  //     .attr('width', x.bandwidth)
  //     .attr('height', d => graphHeight - y(d.orders))
  //     .attr('fill', 'orange')
  //     .attr('x', d => x(d.name))
  //     .attr('y', d => y(d.orders));

  //   // append the enter selection to the DOM
  //   rects
  //     .enter()
  //     .append('rect')
  //     .attr('width', x.bandwidth)
  //     .attr('height', d => graphHeight - y(d.orders))
  //     .attr('fill', 'orange')
  //     .attr('x', d => x(d.name))
  //     .attr('y', d => y(d.orders));

  //   // create & call axesit
  //   const xAxis = d3.axisBottom(x);
  //   const yAxis = d3
  //     .axisLeft(y)
  //     .ticks(3)
  //     .tickFormat(d => d + ' orders');

  //   xAxisGroup.call(xAxis);
  //   yAxisGroup.call(yAxis);

  //   xAxisGroup
  //     .selectAll('text')
  //     .attr('fill', 'orange')
  //     .attr('transform', 'rotate(-40)')
  //     .attr('text-anchor', 'end');
  // });
});

export default MooseBarchart;
