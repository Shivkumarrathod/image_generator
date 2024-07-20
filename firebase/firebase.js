import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZkY2s-793MtfdaZh4uQy4JGUjT_gKrTk",
  authDomain: "clone-war.firebaseapp.com",
  projectId: "clone-war",
  storageBucket: "clone-war.appspot.com",
  messagingSenderId: "262435848381",
  appId: "1:262435848381:web:db31642338f370067877d4",
  measurementId: "G-WQ8KBD5WRZ"
};

const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app)

// const user =()=>{
//   onAuthStateChanged(firebaseAuth,(user)=>{
//     if (user) {
//       return true
//     }else{
//       return false
//     }
//   })
// }

export {
    firebaseAuth,
    
}