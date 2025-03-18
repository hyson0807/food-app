import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyAVTQ_yjU3sGXPOUxmSh4-KMe47AnTkUKQ",
    authDomain: "food-app-c1f36.firebaseapp.com",
    projectId: "food-app-c1f36",
    storageBucket: "food-app-c1f36.firebasestorage.app",
    messagingSenderId: "238435652811",
    appId: "1:238435652811:web:a2b7de1df2a75c98f5b74e",
    measurementId: "G-5G1VJB0WSV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export { auth, app };

