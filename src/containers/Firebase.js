import React, { Component } from 'react';
import FirebaseD3 from '../components/FirebaseD3';

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>Bar Chart with Firebase</h1>
        <h4>[ With BlackboxD3 ]</h4>
        <svg width="600" height="600">
          <FirebaseD3 x={10} y={10} width={600} height={600} />
        </svg>
      </div>
    );
  }
}

export default Home;
