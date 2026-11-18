import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDpCVq1IsmEwwNwTd7U4cGBgdYOgnNYO64",
    authDomain: "style-hub-dec6c.firebaseapp.com",
    projectId: "style-hub-dec6c",
    storageBucket: "style-hub-dec6c.firebasestorage.app",
    messagingSenderId: "925354407791",
    appId: "1:925354407791:web:33a20ed4a388537c8d1a9a"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

export default app;