import React, { Component } from 'react';
import MovementFirebaseD3 from '../components/MovementFirebaseD3';

const styles = {
  textAlign: 'center',
};

export class Movement extends Component {
  render() {
    return (
      <div>
        <h1>Movement</h1>
        <h5>[ No BlackboxD3, Tween & Transition ]</h5>
        <div style={styles}>
          <MovementFirebaseD3 width={600} height={1000} />
        </div>
      </div>
    );
  }
}

export default Movement;
