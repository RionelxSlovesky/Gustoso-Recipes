import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from 'firebase/auth'
import { app } from '../firebase/firebase.config';



const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const AuthContext = createContext(null)



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const signInWithGitHub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = () => {
        return signOut(auth).then(() => {
            // Sign-out successful.
          })
          .catch(err => {
            console.log(err.message)
          })
    }

    const updateProf = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }



    const authInfo = {
        user,
        loading,
        signUp,
        signIn,
        signInWithGoogle,
        signInWithGitHub,
        logOut,
        updateProf
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;