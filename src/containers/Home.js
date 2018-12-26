import React, { Component } from 'react';
import db from '../config/fbConfig';

export class Home extends Component {
  componentDidMount() {
    console.log(db);
    db.collection('dishes')
      .get()
      .then(res => {
        // console.log(data.docs);
        const data = [];
        res.docs.forEach(doc => {
          // console.log(doc.data());
          data.push(doc.data());
        });

        console.log(data);
      });
  }
  render() {
    return (
      <div>
        <h1>This is home</h1>
      </div>
    );
  }
}

export default Home;
