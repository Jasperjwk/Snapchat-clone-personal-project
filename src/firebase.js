import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAAhJJsfsf1Y_0tVJ48OKvmMSinNc-NIlk",
    authDomain: "snapchat-clone-personal-proj.firebaseapp.com",
    projectId: "snapchat-clone-personal-proj",
    storageBucket: "snapchat-clone-personal-proj.appspot.com",
    messagingSenderId: "262094176377",
    appId: "1:262094176377:web:9a397cf6157f2b697f94a8",
    measurementId: "G-STCBQJJR85"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, storage, provider};