import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAW0jTW8uFICaGylHwyoWhDxq68Ik7Yjhg",
    authDomain: "todo-app-349f3.firebaseapp.com",
    projectId: "todo-app-349f3",
    storageBucket: "todo-app-349f3.appspot.com",
    messagingSenderId: "997835975983",
    appId: "1:997835975983:web:48e2b7487743513bcb45da",
    measurementId: "G-3QBCNZ46XZ"
})

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export default db;