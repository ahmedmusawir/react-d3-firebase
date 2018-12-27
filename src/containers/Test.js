import React, { Component } from 'react';
import { SimplePieChart } from '../components/SimplePieChart';
import TestFirebaseD3 from '../components/TestFirebaseD3';

const styles = {
  textAlign: 'center',
};

export class Test extends Component {
  render() {
    return (
      <div>
        <h1>Pie Chart</h1>
        <div style={styles}>
          <TestFirebaseD3 x={300} y={300} width={600} height={600} />
        </div>
      </div>
    );
  }
}

export default Test;
