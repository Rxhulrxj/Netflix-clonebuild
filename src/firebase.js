// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDlEHygi5LYPZK0u4a_oI1dhgGaf3jMIEM",
    authDomain: "netflix-clonebuild.firebaseapp.com",
    projectId: "netflix-clonebuild",
    storageBucket: "netflix-clonebuild.appspot.com",
    messagingSenderId: "628057931104",
    appId: "1:628057931104:web:26c403c133127956833205",
    measurementId: "G-0PL2DC1K9E"
  };
  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;