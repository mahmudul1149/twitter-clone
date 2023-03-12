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
export async function register(username, email, password) {
  try {
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    await response.user.updateProfile({
      displayName: username,
      email: email,
    });

    return response.user;
  } catch (error) {
    this.$router.push("/");
  }
}

export async function login(username, email, password) {
  try {
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(username, email, password);

    await response.user.updateProfile({
      displayName: username,
      email: email,
    });
    return response.user;
  } catch (error) {
    alert(error);
    this.$router.push("/");
  }
}

export async function logout() {
  await firebase.auth().signOut();
}
