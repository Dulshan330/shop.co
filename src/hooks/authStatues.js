import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseSDK";

const authStatues = () => {
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setAuthUser(user.uid);
        }else{
            setAuthUser(null);
        }
        setLoading(false);
        });
        return () => unsubscribe();
    },[]);
    return { authUser, loading };
};

export default authStatues;
