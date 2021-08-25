import './App.css';
import Google from './Components/Google/Google';
import Facebook from './Components/Facebook/Facebook';
import Github from './Components/Github/Github';
import Twitter from './Components/Twitter/Twitter';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import Yahoo from './Components/Yahoo/Yahoo';
import Microsoft from './Components/Microsoft/Microsoft';
import Apple from './Components/Apple/Apple';
import Anonymous from './Components/Anonymous/Anonymous';
import { createContext, useState } from 'react';
import UserInfo from './Components/UserInfo/UserInfo';


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

// Context API
export const userContext = createContext();
function App() {
  const [user, setUser] = useState({});

  return (
    <userContext.Provider value={[user, setUser]}>
      <div className="text-center">
        <div className="user">
          <h3 className="user-name py-3">{user.displayName}</h3>
          <img src={user.photoURL} alt="" />
        </div>
        <div className="user-information">
          <UserInfo />
        </div>
        <h1 className="py-5">Sign Up With </h1>
        <div className="row">
          <div className="col-md-6">
            <Google />
            <Facebook />
            <Github />
            <Twitter />
          </div>
          <div className="col-md-6">
            <Yahoo />
            <Microsoft />
            <Apple />
            <Anonymous />
          </div>
        </div>
      </div>
    </userContext.Provider>
  );
}

export default App;
