import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
const config = require('./config');

const firebaseApp = initializeApp(config.firebaseConfig);
const db = getFirestore(firebaseApp);

module.exports = db;

