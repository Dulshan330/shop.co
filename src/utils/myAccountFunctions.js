import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebaseSDK";
import { deleteUser } from "firebase/auth";

// fetch users data function
export const fetchUserData = async (authUser,setEmail, setLoading) => {
    if (authUser) {
        const userDocRef = doc(firestore, "users", authUser);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        setEmail(userData.email);
        }
        setLoading(false);
    }
};

// delete user account function
export const handleDeleteUser = async (authUser, toggleModal) => {
    if(authUser){
        await deleteUser(authUser);
        await deleteDoc(doc(firestore, "users", authUser));
        toggleModal();
    }
};
