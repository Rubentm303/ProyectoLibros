import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDsG4wgT185EYu7B9d80tXZnB7l8cGxyD0",
    authDomain: "libros-c1233.firebaseapp.com",
    databaseURL: "https://libros-c1233.firebaseio.com",
    projectId: "libros-c1233",
    storageBucket: "libros-c1233.appspot.com",
    messagingSenderId: "597786261638",
    appId: "1:597786261638:web:4254c8fc84e975b0897907",
    measurementId: "G-NMM7Q18YLH"
}
class Firebase {
    constructor() {

        firebase.initializeApp(firebaseConfig)
        this.auth = firebase.auth()
    }
    login = (email, pass) => {
        return this.auth.signInWithEmailAndPassword(email, pass)
    }
    createuser = async (name, user, pass) => {
        await this.auth.createUserWithEmailAndPassword(user, pass)
        return this.auth.currentUser.updateProfile({
            displayName: name
        })
    }

    getuser = () => {
        return this.auth.currentUser.displayName
    }
}
const firebaseservice = new Firebase()
export default firebaseservice


