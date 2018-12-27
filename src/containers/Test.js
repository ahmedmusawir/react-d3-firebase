import React, { Component } from 'react';
import TestFirebaseD3 from '../components/TestFirebaseD3';
import DataForm from '../components/DataForm';

const styles = {
  textAlign: 'center',
};

export class Test extends Component {
  render() {
    return (
      <div>
        <h5>React - D3 - Firebase - Live Update with Tween & Transition</h5>
        <DataForm />
        <div style={styles}>
          <TestFirebaseD3 x={300} y={300} width={600} height={1000} />
        </div>
      </div>
    );
  }
}

export default Test;
