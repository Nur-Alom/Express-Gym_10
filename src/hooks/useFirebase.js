import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth();

const useFirebase = () => {
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState({});

    const handleLoginEmailPassword = () => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUsers(user)
                console.log(user);
            })
            .catch(error => {
                console.log(error.message);
            })
            .finally(() => setLoading(false))
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            })
            .catch((error) => {

            });
    }

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleRegister = (e) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUserName(user.displayName);
                setUsers(user);
            })
            .catch(error => {

            })
            .finally(() => setLoading(false));
    }

    const googleLogin = () => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUsers(user);
            })
            .catch(error => {

            })
            .finally(() => setLoading(false));
    };

    const githubLogin = () => {
        setLoading(true);
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                const user = result.user;
                setUsers(user);
            })
            .catch(error => {

            })
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user)
            }
            else {
                setUsers({})
            }
            setLoading(false);
        });
    }, [])

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUsers({});
            })
            .catch(error => {

            })
            .finally(() => setLoading(false));
    };

    return {
        users,
        loading,
        handleName,
        handleEmail,
        handlePassword,
        handleRegister,
        handleLoginEmailPassword,
        googleLogin,
        githubLogin,
        logOut
    }
}

export default useFirebase;