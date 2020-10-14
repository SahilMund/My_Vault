import * as firebase from "firebase/app";

//  importing the services
import "firebase/storage"; 
import "firebase/firestore"; 
import "firebase/auth";


// firestore : - helps to store the image url's
// store :-  helps to store the images


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBPu4zHyJnRDjJpJ25IRep-0nEg2alqQHY",
  authDomain: "my-vault-3.firebaseapp.com",
  databaseURL: "https://my-vault-3.firebaseio.com",
  projectId: "my-vault-3",
  storageBucket: "my-vault-3.appspot.com",
  messagingSenderId: "233911320472",
  appId: "1:233911320472:web:0093351f749ccdd7edf5ed"
};

// Initialize Firebase
 const app = firebase.initializeApp(firebaseConfig);
 export const auth = app.auth()
//   starting both services i.e. storage and firestore(it is a real time database)
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore ,timestamp};
