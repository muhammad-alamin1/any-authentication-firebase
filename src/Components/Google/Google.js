import './google.css';
import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { userContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Google = () => {
    const[user, setUser] = useContext(userContext);
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const credential = result.credential;
                const token = credential.accessToken;
                const user = result.user;
                console.log("Token ", token, "User ", user);
                setUser(user);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                console.log(email, errorCode, errorMessage);

            });
    }
    return (
        <div className="py-3">
            <button onClick={handleGoogleSignIn} className="btn"><FontAwesomeIcon icon={faGoogle} /></button>
            <p className="text-center">Google</p>
        </div>
    );
};

export default Google;