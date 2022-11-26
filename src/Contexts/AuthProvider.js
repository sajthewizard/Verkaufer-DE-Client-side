import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const createSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const createSignOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const signwithG = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            console.log('user is observing');
            setUser(currentuser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, [])
    const authInfo = { createUser, createSignIn, user, createSignOut, loading, signwithG }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>


    );
};

export default AuthProvider;