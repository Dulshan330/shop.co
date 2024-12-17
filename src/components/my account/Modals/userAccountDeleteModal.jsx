import React from "react";
import { MdErrorOutline } from "react-icons/md";
import authStatues from "../../../hooks/authStatues";
import { deleteUser } from "firebase/auth";
import { deleteDoc, doc } from "firebase/firestore";
import { auth, firestore } from "../../../firebaseSDK";
import { reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";

const UserAccountDeleteModal = ({ toggleModal }) => {
  const { authUser } = authStatues();

  const handleDeleteUser = async () => {
    const user = auth.currentUser;
    if (user) {
      const credential = EmailAuthProvider.credential(
        user.email,
        prompt("Please enter your password to continue:")
      );
      try {
        // Re-authenticate the user
        await reauthenticateWithCredential(user, credential);

        // Now, delete the user
        await deleteUser(user);

        // Delete the Firestore document
        await deleteDoc(doc(firestore, "users", authUser));

        toggleModal();
      } catch (error) {
        console.error("Error deleting user:", error);
        // Handle errors, such as wrong password or failed authentication
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col items-center justify-center gap-3">
        <MdErrorOutline size={72} color="gray" />
        <p className="text-base font-primaryMedium">
          Are you sure you want to delete your account?
        </p>
        <div className="flex gap-3 w-full">
          <button
            onClick={handleDeleteUser}
            className="px-4 py-2 bg-redLight text-redDark rounded w-1/2"
          >
            Yes, I'm sure
          </button>
          <button
            onClick={toggleModal}
            className="px-4 py-2 bg-white text-black rounded border border-grayWeight w-1/2"
          >
            No, cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserAccountDeleteModal;
