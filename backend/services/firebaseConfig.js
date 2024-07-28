import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLN8Ns15zwe898Lm48EOF0xf4P85UXjvg",
  authDomain: "garage-9097a.firebaseapp.com",
  projectId: "garage-9097a",
  storageBucket: "garage-9097a.appspot.com",
  messagingSenderId: "978622142032",
  appId: "1:978622142032:web:081aea26fc0a2245ac2355",
  measurementId: "G-5W2QXDCBJF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
