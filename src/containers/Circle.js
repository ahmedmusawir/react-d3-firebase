import React, { Component } from 'react';
import { SimplePieChart } from '../components/SimplePieChart';

const styles = {
  textAlign: 'center',
};

export class Circle extends Component {
  render() {
    return (
      <div>
        <h1>Pie Chart</h1>
        <div style={styles}>
          <SimplePieChart />
        </div>
      </div>
    );
  }
}

export default Circle;
