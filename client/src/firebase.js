import firebase from "firebase/app";
import "firebase/auth";

// Firebase code, signup, and configuration was made following a Youtube tutorial on React and Firebase. 
// https://www.youtube.com/watch?v=PKwu15ldZ7k&t=1608s.

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
    databaseURL: ""
})


export const auth = app.auth()

export default app;


// production

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyDuBpuzdaD850VLLZQFx7zt5clLdyjHIE0",
//     authDomain: "tradeex-production.firebaseapp.com",
//     projectId: "tradeex-production",
//     storageBucket: "tradeex-production.appspot.com",
//     messagingSenderId: "952310614777",
//     appId: "1:952310614777:web:f7a402939838b899333028"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>