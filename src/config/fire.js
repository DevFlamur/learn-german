

import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyB52DMzUTevgCuCGWvPGda2PsxXxe3PQSg",
    authDomain: "learn-german-a4a21.firebaseapp.com",
    databaseURL: "https://learn-german-a4a21.firebaseio.com",
    projectId: "learn-german-a4a21",
    storageBucket: "learn-german-a4a21.appspot.com",
    messagingSenderId: "146135266908",
    appId: "1:146135266908:web:4225a8d2c09f16255c1899",
    measurementId: "G-SLMSYG4RJX"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;