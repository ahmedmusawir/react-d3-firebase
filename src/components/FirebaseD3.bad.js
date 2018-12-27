import D3blackbox from 'd3blackbox';
import * as d3 from 'd3';
import db from '../config/fbConfig';

const FirebaseD3 = D3blackbox((anchor, props) => {
  // select the svg container first
  // create margins & dimensions

  const svg = d3.select(anchor.current),
    margin = { top: 20, right: 20, bottom: 100, left: 100 },
    graphWidth = +props.width - margin.left - margin.right,
    graphHeight = +props.height - margin.top - margin.bottom;

  const graph = svg
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  // create axes groups
  const xAxisGroup = graph
    .append('g')
    .attr('transform', `translate(0, ${graphHeight})`);

  const yAxisGroup = graph.append('g');

  // scales
  let y = d3.scaleLinear().range([graphHeight, 0]);

  let x = d3
    .scaleBand()
    .range([0, graphWidth])
    .paddingInner(0.2)
    .paddingOuter(0.2);

  // create & call axesit
  const xAxis = d3.axisBottom(x);
  const yAxis = d3
    .axisLeft(y)
    .ticks(3)
    .tickFormat(d => d + ' orders');

  // update x axis text
  xAxisGroup
    .selectAll('text')
    .attr('fill', 'darkblue')
    .attr('transform', 'rotate(-40)')
    .attr('text-anchor', 'end');

  // update function
  const update = data => {
    // 1. update scales (domains) if they relay on our data
    y = d3.domain([0, d3.max(data, d => d.orders)]);
    x = d3.domain(data.map(item => item.name));

    //2. join updated data to elements
    // join the data to rects
    const rects = graph.selectAll('rect').data(data);

    //3. remove any unwanted shapes using the exit selection
    // remove exit selection
    rects.exit().remove();

    //4. update current shapes in the dom
    // add attrs to circs already in the DOM
    rects
      .attr('width', x.bandwidth)
      .attr('height', d => graphHeight - y(d.orders))
      .attr('fill', 'orange')
      .attr('x', d => x(d.name))
      .attr('y', d => y(d.orders));

    //5. append the enter selection to the dom
    // append the enter selection to the DOM
    rects
      .enter()
      .append('rect')
      .attr('width', x.bandwidth)
      .attr('height', d => graphHeight - y(d.orders))
      .attr('fill', 'lightskyblue')
      .attr('x', d => x(d.name))
      .attr('y', d => y(d.orders));

    // Call axes
    xAxisGroup.call(xAxis);
    yAxisGroup.call(yAxis);
  };

  db.collection('dishes')
    .get()
    .then(res => {
      const data = [];
      res.docs.forEach(doc => {
        data.push(doc.data());
      });

      update(data);
    });
});

export default FirebaseD3;
