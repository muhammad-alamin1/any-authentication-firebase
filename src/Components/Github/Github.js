import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { userContext } from '../../App';
import firebaseConfig from '../../firebase.config';
import firebase from "firebase/app";
import "firebase/auth";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}
const Github = () => {
    const [user, setUser] = useContext(userContext);
    const githubProvider = new firebase.auth.GithubAuthProvider();
    const handleGithubSignIn = () => {
        firebase
            .auth()
            .signInWithPopup(githubProvider)
            .then((result) => {
                const credential = result.credential;
                // This gives you a GitHub Access Token. 
                const token = credential.accessToken;
                var user = result.user;
                setUser(user);
                console.log("User: ", user);

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error: ", errorCode, errorMessage);

            });
    }
    return (
        <div className="py-3">
            <button onClick={handleGithubSignIn} className="btn "><FontAwesomeIcon icon={faGithub} /></button>
            <p className="text-center">Github</p>
        </div>
    );
};

export default Github;