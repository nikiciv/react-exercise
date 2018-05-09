import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCRMfWHwclDGfgdRmC1Iwt5hnOAVpUJmS0",
    authDomain: "modus-create.firebaseapp.com",
    databaseURL: "https://modus-create.firebaseio.com",
    projectId: "modus-create",
    storageBucket: "modus-create.appspot.com",
    messagingSenderId: "504995442935"
};
 
export const firebaseApp = firebase.initializeApp(config);
export const usersRef = firebase.database().ref('users');