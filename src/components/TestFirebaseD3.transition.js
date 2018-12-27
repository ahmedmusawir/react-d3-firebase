import React, { Component } from 'react';
import * as d3 from 'd3';
import db from '../config/fbConfig';

class TestFirebaseD3 extends Component {
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
      .attr('width', graphWidth)
      .attr('height', graphHeight)
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // create axes groups
    const xAxisGroup = graph
      .append('g')
      .attr('transform', `translate(0, ${graphHeight})`);

    const yAxisGroup = graph.append('g');

    const update = data => {
      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, d => d.orders)])
        .range([graphHeight, 0]);
      const x = d3
        .scaleBand()
        .domain(data.map(item => item.name))
        .range([0, graphWidth])
        .paddingInner(0.2)
        .paddingOuter(0.2);
      // join the data to circs
      const rects = graph.selectAll('rect').data(data);

      // add attrs to circs already in the DOM
      rects
        .attr('width', x.bandwidth)
        .attr('fill', 'orange')
        .attr('x', d => x(d.name))
        .transition()
        .duration(1000)
        .attr('height', d => graphHeight - y(d.orders))
        .attr('y', d => y(d.orders));

      // append the enter selection to the DOM
      rects
        .enter()
        .append('rect')
        .attr('width', x.bandwidth)
        .attr('height', 0)
        .attr('fill', 'orange')
        .attr('x', d => x(d.name))
        .attr('y', graphHeight)
        .transition()
        .duration(1000)
        .attr('y', d => y(d.orders))
        .attr('height', d => graphHeight - y(d.orders));

      // create & call axesit
      const xAxis = d3.axisBottom(x);
      const yAxis = d3
        .axisLeft(y)
        .ticks(3)
        .tickFormat(d => d + ' orders');
      xAxisGroup.call(xAxis);
      yAxisGroup.call(yAxis);
      xAxisGroup
        .selectAll('text')
        .attr('fill', 'orange')
        .attr('transform', 'rotate(-40)')
        .attr('text-anchor', 'end');
    };

    let data = [];

    // get change snapshot data from firebase realtime
    db.collection('dishes').onSnapshot(res => {
      res.docChanges().forEach(change => {
        const doc = { ...change.doc.data(), id: change.doc.id };
        console.log(change);
        // console.log(change.doc.data());
        console.log(doc);

        switch (change.type) {
          case 'added':
            data.push(doc);
            break;
          case 'modified':
            const index = data.findIndex(item => item.id == doc.id);
            data[index] = doc;
            break;
          case 'removed':
            data = data.filter(item => item.id !== doc.id);
            break;
          default:
            break;
        }
      });

      update(data);
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
