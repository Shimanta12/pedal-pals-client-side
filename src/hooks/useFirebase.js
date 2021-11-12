import { useState, useEffect } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    // States
    const [user, setUser] = useState({})
    const [succMessage, setSuccMessage] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false)

    // Auth
    const auth = getAuth();

    // Google auth provider
    const googleProvider = new GoogleAuthProvider();

    // register new user
    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
                setSuccMessage('Successfully Created an user!')
                setError('')
                const newUser = { email, displayName: name };
                setUser(newUser)
                saveUser(email, name, 'POST')
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.push('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                setSuccMessage('')
            })
            .finally(() => setIsLoading(false));
    }

    // login a user
    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
                setSuccMessage('Logged in successfully!')
                setError('')
                history.push(location?.state?.from || '/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                setSuccMessage('')
            })
            .finally(() => setIsLoading(false));
    }

    // sign in using google
    const signInUsingGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
                saveUser(user.email, user.displayName, 'PUT')
                setSuccMessage('Logged in successfully!')
                setError('')
                history.push(location?.state?.from || '/')
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                setSuccMessage('')
            }).finally(() => setIsLoading(false));
    }

    // logout a user
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setSuccMessage('Sign-out successful')
        }).catch((error) => {
            setError(error.message)
            setSuccMessage('')
        })
            .finally(() => setIsLoading(false));
    }

    // save user to database
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('https://salty-taiga-12692.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then()
    }

    // Admin role
    useEffect(() => {
        fetch(`https://salty-taiga-12692.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // observer
    useEffect(() => {
        setIsLoading(true)
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [auth])


    return {
        user,
        admin,
        succMessage,
        error,
        isLoading,
        registerUser,
        loginUser,
        signInUsingGoogle,
        logOut
    }
};

export default useFirebase;