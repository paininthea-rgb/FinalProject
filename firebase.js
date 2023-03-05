import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA6Y4I406tJvGXEB-qnpdNF3f27zE99Ve8",
    authDomain: "finalproject-6ba03.firebaseapp.com",
    projectId: "finalproject-6ba03",
    storageBucket: "finalproject-6ba03.appspot.com",
    messagingSenderId: "517671284132",
    appId: "1:517671284132:web:525ff51c525c528ea66531"
  };

  let app = firebase.initializeApp(firebaseConfig);

  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }

  const db = app.firestore();

  const auth = firebase.auth();

  export { db, auth };