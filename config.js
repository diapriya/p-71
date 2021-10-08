import firebase from 'firebase'
require("@firebase/firestore")


  const firebaseConfig = {
    apiKey: "AIzaSyDuF9DXxy2V9MCjilxfkdgV_OTt4YnmSxU",
    authDomain: "complaint-forum-e8b61.firebaseapp.com",
    projectId: "complaint-forum-e8b61",
    storageBucket: "complaint-forum-e8b61.appspot.com",
    messagingSenderId: "802791138402",
    appId: "1:802791138402:web:6f023a5f5c33411e449d3b"
  }; 

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

