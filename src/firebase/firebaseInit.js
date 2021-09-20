import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBlBH7n4dnSUa48LITB1kd-S0ZQ7LfcPgg",
    authDomain: "fireblogyt-bec2a.firebaseapp.com",
    projectId: "fireblogyt-bec2a",
    storageBucket: "fireblogyt-bec2a.appspot.com",
    messagingSenderId: "788943269542",
    appId: "1:788943269542:web:1b9c24f620ba202fecce67"
};

const fireBaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default fireBaseApp.firestore();