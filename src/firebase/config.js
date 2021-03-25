import firebase from 'firebase'
import '@firebase/auth';
import '@firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCO9V0YqpMrmh5abbGHFCqjlo1j8LtOKwI",
    authDomain: "ux308winter2021.firebaseapp.com",
    databaseURL: "https://ux308winter2021-default-rtdb.firebaseio.com",
    projectId: "ux308winter2021",
    storageBucket: "ux308winter2021.appspot.com",
    messagingSenderId: "877645805590",
    appId: "1:877645805590:web:1b5527cc55bcc711539d37"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} 
export { firebase };