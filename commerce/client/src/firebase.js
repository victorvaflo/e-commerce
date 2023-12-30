import * as firebase from "firebase";

  // Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {

    apiKey: "AIzaSyDIx4ZV40EyFfqWEJnvTjhATobj56QFPVQ",

    authDomain: "dtf-mtl.firebaseapp.com",

    projectId: "dtf-mtl",

    storageBucket: "dtf-mtl.appspot.com",

    messagingSenderId: "198448850362",

    appId: "1:198448850362:web:c4508f1c5541dfcadea983",

    measurementId: "G-NLY4YFVGMK"

  };


  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  
  // // Initialize Firebase
firebase.initializeApp(firebaseConfig);



// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDniyhK46KyCVzN4PkypDIKjMEZLfTUx64",
//   authDomain: "ecommerce-225c8.firebaseapp.com",
//   databaseURL: "https://ecommerce-225c8.firebaseio.com",
//   projectId: "ecommerce-225c8",
//   storageBucket: "ecommerce-225c8.appspot.com",
//   messagingSenderId: "593746841585",
//   appId: "1:593746841585:web:f0090fc9296a27f7c67e50",
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// // export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
