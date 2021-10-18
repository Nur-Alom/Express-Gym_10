import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth();

const useFirebase = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [users, setUsers] = useState({});

    const handleName = (e) => {
        setDisplayName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleRegister = (e) => {
        console.log(displayName, email, password);
        createUserWithEmailAndPassword(auth, displayName, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
            });
        e.preventDefault();
    }

    const googleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUsers(user);
            })
            .catch((error) => {

            });
    };

    const githubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                const user = result.user;
                setUsers(user);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUsers({});
            })
            .catch((error) => {

            });
    };

    return {
        users,
        handleName,
        handleEmail,
        handlePassword,
        handleRegister,
        googleLogin,
        githubLogin,
        logOut
    }
}

export default useFirebase;