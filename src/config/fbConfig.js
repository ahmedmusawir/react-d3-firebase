import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyAzmuOJVRRv5o5RPmar3TyPhPsoxBqhnXE',
  authDomain: 'd3firebase.firebaseapp.com',
  databaseURL: 'https://d3firebase.firebaseio.com',
  projectId: 'd3firebase',
  storageBucket: 'd3firebase.appspot.com',
  messagingSenderId: '33579977368',
};
firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export default db;
