import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app);


const AuthProvider = ( { children } ) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    const creatUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        setLoading(false)
       });
       return ()=>{
        unsubscribe();
       }
    },[])

    const LogOut = ()=>{
        setLoading(true)
        return signOut(auth);
       }

    const Login = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }


    const updateUser = (updatedData)=>{
        return updateProfile(auth.currentUser,updatedData)
    }

    const authData = {
        user,
        setUser,
        creatUser,
        LogOut,
        Login,
        loading,
        setLoading,
        updateUser,
    }

    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;