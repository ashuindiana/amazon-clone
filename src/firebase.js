import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAgtuj6S6pmvgSzGGaTDwTl8QYNF7JMRg0",
    authDomain: "clone-fb1ca.firebaseapp.com",
    projectId: "clone-fb1ca",
    storageBucket: "clone-fb1ca.appspot.com",
    messagingSenderId: "240808861484",
    appId: "1:240808861484:web:156725207b015b001ad689",
    measurementId: "G-LBYQ6571X5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  const auth = firebase.auth();

  export { db, auth };