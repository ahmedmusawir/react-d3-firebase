import React, { Component } from 'react';
import Barchart from '../components/Barchart';

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>Bar Chart</h1>
        <svg width="600" height="600">
          <Barchart x={100} y={100} width={550} height={500} />
        </svg>
      </div>
    );
  }
}

export default Home;
