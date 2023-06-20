import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCVwvqb04gzbBs3Z1gspgUsZcbtAvfiiJ8",
  authDomain: "twitter-e2267.firebaseapp.com",
  projectId: "twitter-e2267",
  storageBucket: "twitter-e2267.appspot.com",
  messagingSenderId: "268167946668",
  appId: "1:268167946668:web:f28246e594557747e81a09",
  measurementId: "G-SPY0QTLZVQ",
};
firebase.initializeApp(firebaseConfig);
export default function ({ store }) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      store.commit("SET_USER", user);
    } else {
      store.commit("SET_USER", null);
    }
  });
}
