import App from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYbrxmi7-DTqO2IvnqlznQdTHJPCEgMwE",
  authDomain: "sri-global-71dfa.firebaseapp.com",
  databaseURL: "https://sri-global-71dfa.firebaseio.com",
  projectId: "sri-global-71dfa",
  messagingSenderId: "122911866873",
  appId: "1:122911866873:web:a2425802ca50c1050b8728",
  measurementId: "G-WVS6RNV9E5"
};

class Firebase {
  constructor() {
      if(!App.apps.length){
        App.initializeApp(firebaseConfig);
        this.db = App.firestore();
        
      }
    
  }

  addData(values){
    return this.db.collection("usersdb").add({
        name: values.name,
        email: values.email,
        phoneNumber: values.phoneNumber,
        place: values.place,
        service: values.service
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    })
    
  }



}

export default new Firebase();