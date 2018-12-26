import React, { Component } from 'react';
import db from '../config/fbConfig';
import FirebaseD3 from '../components/FirebaseD3';

export class Home extends Component {
  // componentDidMount() {
  //   console.log(db);
  //   db.collection('dishes')
  //     .get()
  //     .then(res => {
  //       const data = [];
  //       res.docs.forEach(doc => {
  //         data.push(doc.data());
  //       });

  //       console.log(data);
  //     });
  // }
  render() {
    return (
      <div>
        <h1>Bar Chart with Firebase</h1>
        <svg width="600" height="600">
          <FirebaseD3 x={10} y={10} width={600} height={600} />
        </svg>
      </div>
    );
  }
}

export default Home;
