import firebase from 'firebase';
import { getDatabase, ref, set} from "firebase/database";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyADHkf0geYhiRc9R-a472BpTmDk1fLH1dU",
  authDomain: "projetoaula-f68b1.firebaseapp.com",
  databaseURL: "https://projetoaula-f68b1-default-rtdb.firebaseio.com",
  projectId: "projetoaula-f68b1",
  storageBucket: "projetoaula-f68b1.appspot.com",
  messagingSenderId: "325908037820",
  appId: "1:325908037820:web:416dbd2f441e083e4410b9",
  measurementId: "G-MLYF3M960W"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
