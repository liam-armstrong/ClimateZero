import * as React from "react"
import ReactDOM from "react-dom"
import { App } from "./App"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "climate-zero-3916a.firebaseapp.com",
  projectId: "climate-zero-3916a",
  storageBucket: "climate-zero-3916a.appspot.com",
  messagingSenderId: "707465598702",
  appId: process.env.FIRESTORE_APP_ID
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

ReactDOM.render(
  <React.StrictMode>
    <App firestore={firestore}/>
  </React.StrictMode>,
  document.getElementById("root"),
)