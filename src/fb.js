import firebase from 'firebase'
import 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCpWu72lPBGS7C413GY5vwqSPBLoJ7RixM",
    authDomain: "smoothies-4ccdb.firebaseapp.com",
    databaseURL: "https://smoothies-4ccdb.firebaseio.com",
    projectId: "smoothies-4ccdb",
    storageBucket: "smoothies-4ccdb.appspot.com",
    messagingSenderId: "1004007641673"
  };
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

//export firestore database
export default firebaseApp.firestore()