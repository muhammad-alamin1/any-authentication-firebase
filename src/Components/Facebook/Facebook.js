import './facebook.css';
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import firebase from "firebase/app";
import firebaseConfig from '../../firebase.config';
import { userContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}
const Facebook = () => {
    const[user, setUser] = useContext(userContext);
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    const handleFacebookSignIn = () => {
        firebase
            .auth()
            .signInWithPopup(facebookProvider)
            .then((result) => {
                const credential = result.credential;
                const user = result.user;
                // This gives you a Facebook Access Token. 
                const accessToken = credential.accessToken;
                // console.log("User ",user);
                setUser(user);

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorMessage);

            });
    }
    return (
        <div className="py-3">
            <button onClick={handleFacebookSignIn} className="btn"><FontAwesomeIcon icon={faFacebook} /></button>
            <p className="text-center">Facebook</p>
        </div>
    );
};

export default Facebook;