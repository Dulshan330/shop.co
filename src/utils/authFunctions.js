import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { auth, firestore } from "../firebaseSDK";
import { doc, setDoc } from "firebase/firestore";

// signin function
export const handleSignIn = async (
    email,
    password,
    navigate,
    setEmail,
    setPassword,
    setErrorMessage
) => {
    if (email == "" || password == "") {
        setErrorMessage(" Please fill out all fields!");
    } else {
        await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            setEmail("");
            setPassword("");
            navigate("/");
        })
        .catch((error) => {
            switch (error.code) {
            case "auth/invalid-email":
                setErrorMessage("The email address is not valid.");
                break;
            case "auth/user-disabled":
                setErrorMessage(
                "The user account has been disabled by an administrator."
                );
                break;
            case "auth/user-not-found":
                setErrorMessage(
                "There is no user record corresponding to the provided email."
                );
                break;
            case "auth/wrong-password":
                setErrorMessage("The password is invalid for the given email.");
                break;
            case "auth/invalid-credential":
                setErrorMessage(
                "The provided credential is invalid or has expired."
                );
                break;
            default:
                setErrorMessage(`Error: ${error.message}`);
                break;
            }
        });
    }
};

// signup function
export const handleSignUp = async (
    name,
    email,
    password,
    confirmPassword,
    navigate,
    setName,
    setEmail,
    setPassword,
    setConfirmPassword,
    setErrorMessage
) => {
    if (name == "" || email == "" || password == "" || confirmPassword == "") {
        setErrorMessage("Please fill out all fields!");
    } else {
        if (password === confirmPassword) {
        try {
            const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
            );
            const docRef = doc(firestore, "users", userCredential.user.uid);
            await setDoc(docRef, { uid: userCredential.user.uid, name, email });
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            navigate("/");
        } catch (error) {
            switch (error.code) {
            case "auth/email-already-in-use":
                setErrorMessage(
                "The provided email is already in use by an existing user."
                );
                break;
            case "auth/invalid-email":
                setErrorMessage("The email address is not valid.");
                break;
            case "auth/weak-password":
                setErrorMessage(
                "The password is too weak. It must be at least 6 characters long."
                );
                break;
            default:
                setErrorMessage(`Error: ${error.message}`);
                break;
            }
        }
        } else {
        setErrorMessage(
            "Password and Confirm Password do not match. Please ensure both fields contain the same information."
        );
        }
    }
};

// logout function
export const handleLogout = (navigate, toggleModal) => {
    signOut(auth)
        .then(() => {
        navigate("/");
        toggleModal();
        })
        .catch((error) => {
        console.log(error);
        });
};
