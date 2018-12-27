import React, { Component } from 'react';
import * as d3 from 'd3';
import db from '../config/fbConfig';

class TestFirebaseD3 extends Component {
  constructor(props) {
    super(props);
    this.x = '';
    this.y = '';
    this.graph = '';
    this.graphHeight = '';
    this.xAxis = '';
    this.yAxis = '';
    this.xAxisGroup = '';
    this.yAxisGroup = '';
  }
  // update function
  update = data => {
    //2. join updated data to elements
    // join the data to rects
    const rects = this.graph.selectAll('rect').data(data);

    //3. remove any unwanted shapes using the exit selection
    // remove exit selection
    rects.exit().remove();

    //4. update current shapes in the dom
    // add attrs to circs already in the DOM
    rects
      .attr('width', this.x.bandwidth)
      .attr('height', d => this.graphHeight - this.y(d.orders))
      .attr('fill', 'orange')
      .attr('x', d => this.x(d.name))
      .attr('y', d => this.y(d.orders));

    //5. append the enter selection to the dom
    // append the enter selection to the DOM
    rects
      .enter()
      .append('rect')
      .attr('width', this.x.bandwidth)
      .attr('height', d => this.graphHeight - this.y(d.orders))
      .attr('fill', 'lightskyblue')
      .attr('x', d => this.x(d.name))
      .attr('y', d => this.y(d.orders));

    // Call axes
    this.xAxisGroup.call(this.xAxis);
    this.yAxisGroup.call(this.yAxis);
  };
  componentDidMount() {
    // select the svg container first
    const svg = d3
      .select(this.refs.anchor)
      .append('svg')
      .attr('width', this.props.width)
      .attr('height', this.props.height);

    // create margins & dimensions
    const margin = { top: 20, right: 20, bottom: 100, left: 100 };
    const graphWidth = 600 - margin.left - margin.right;
    const graphHeight = 600 - margin.top - margin.bottom;

    const graph = svg
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // create axes groups
    this.xAxisGroup = graph
      .append('g')
      .attr('transform', `translate(0, ${graphHeight})`);

    this.yAxisGroup = graph.append('g');

    // scales
    this.y = d3.scaleLinear().range([graphHeight, 0]);

    this.x = d3
      .scaleBand()
      .range([0, graphWidth])
      .paddingInner(0.2)
      .paddingOuter(0.2);

    // create & call axesit
    this.xAxis = d3.axisBottom(this.x);
    this.yAxis = d3
      .axisLeft(this.y)
      .ticks(3)
      .tickFormat(d => d + ' orders');

    // update x axis text
    this.xAxisGroup
      .selectAll('text')
      .attr('fill', 'darkblue')
      .attr('transform', 'rotate(-40)')
      .attr('text-anchor', 'end');

    db.collection('dishes')
      .get()
      .then(res => {
        const data = [];
        res.docs.forEach(doc => {
          data.push(doc.data());
        });

        // 1. update scales (domains) if they relay on our data
        this.y = d3.domain([0, d3.max(data, d => d.orders)]);
        this.x = d3.domain(data.map(item => item.name));

        this.update(data);
      });
  }

  render() {
    return (
      <svg width={this.props.width} height={this.props.height}>
        <g ref="anchor" />
      </svg>
    );
  }
}

export default TestFirebaseD3;
