// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCorIFojrJSLos3Uu8gJhuz1imXy6FgZnI",
    authDomain: "registro-1a86d.firebaseapp.com",
    projectId: "registro-1a86d",
    storageBucket: "registro-1a86d.appspot.com",
    messagingSenderId: "1036237419365",
    appId: "1:1036237419365:web:712299893476a7742ba78c",
    measurementId: "G-4NVV905GND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
