
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyAQoNI5tA-74IbN8d_Za5HXqj55EtZHh-M",
  authDomain: "rateseriesapp.firebaseapp.com",
  projectId: "rateseriesapp",
  storageBucket: "rateseriesapp.appspot.com",
  messagingSenderId: "711263937992",
  appId: "1:711263937992:web:0f5ea01396121a11898cfd",
  measurementId: "G-TQTHV0RFPW"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase;