// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// import { getAut } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj-VVM_9GXtzxSt6n8Untef8MTBoDC2GA",
  authDomain: "mymanagerhome-1479a.firebaseapp.com",
  projectId: "mymanagerhome-1479a",
  storageBucket: "mymanagerhome-1479a.appspot.com",
  messagingSenderId: "622474931141",
  appId: "1:622474931141:web:4166c3e3186cb62835f9ac",
  measurementId: "G-NY33N1Z6C6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();

export { app, auth };

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  await signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      const Firename = result.user.displayName;
      const Fireemail = result.user.email;
      const FirephotoURL = result.user.photoURL;
      const Fireuid = result.user.uid;

      localStorage.setItem("Firename", Firename);
      localStorage.setItem("Fireemail", Fireemail);
      localStorage.setItem("FirephotoURL", FirephotoURL);
      localStorage.setItem("Fireuid", Fireuid);
      // const myPromise = new Promise((resolve, reject) => {
      //   resolve(result);
      // });
      // myPromise.then((res) => {
      //   return res;
      // });
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const handleGooglelogout = async () => {
  await signOut(auth)
    .then((response) => {
      console.log(response);
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};
