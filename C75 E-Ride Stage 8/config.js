import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAfLDGIm_9aHEQ2aQecDZwM31XPem2qxCs",
  authDomain: "e-ride-3b009.firebaseapp.com",
  projectId: "e-ride-3b009",
  storageBucket: "e-ride-3b009.appspot.com",
  messagingSenderId: "562696143287",
  appId: "1:562696143287:web:d37dc83888248d97f92832"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
