import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// replace this firebase conFigvariable with your own
const firebaseConfig = {
  apiKey: "AIzaSyBbzuK9n5vi7fsp2EkU5lg-fEBu7anK5Ww",
  authDomain: "todo-app-1d865.firebaseapp.com",
  projectId: "todo-app-1d865",
  storageBucket: "todo-app-1d865.appspot.com",
  messagingSenderId: "410420170202",
  appId: "1:410420170202:web:3cdce600043a9df76044e3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
