import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import authStatues from "../../hooks/authStatues";
import Loader from "../loader/loader";
import { fetchUserData } from "../../utils/myAccountFunctions";
import UserAccountDeleteModal from "./Modals/userAccountDeleteModal";

const MyAccountSection = () => {
  const { authUser } = authStatues();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    fetchUserData(authUser, setEmail, setLoading);
  }, [authUser]);

  const handlePasswordChange = async () => {};

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="m-2">
      <span className="text-2xl capitalize font-primaryRegular">
        my account settings
      </span>
      {/* divider */}
      <div className="my-2">
        <hr className="border-t-2 border-solid " />
      </div>
      {/* delete-account-section */}
      <div className="my-6 flex flex-col gap-2">
        <span className="text-xl capitalize font-primaryRegular">
          email address
        </span>
        <p className="text-base font-primaryRegular my-2">
          Your email address is{" "}
          <span className="font-primaryBold">{email}</span>
        </p>
      </div>
      {/* divider */}
      <div className="my-2">
        <hr className="border-t-2 border-solid" />
      </div>
      {/* password-change-section */}
      <div className="my-6">
        <span className="text-xl capitalize font-primaryRegular">password</span>
        <div className="flex gap-3 my-2 items-end">
          <div className="w-1/3">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type={isShown ? `text` : `password`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="w-1/3">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type={isShown ? `text` : `password`}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mb-2">
            {isShown ? (
              <FaEye size={20} onClick={() => setIsShown(false)} />
            ) : (
              <FaEyeSlash size={20} onClick={() => setIsShown(true)} />
            )}
          </div>
        </div>
        {errorMsg && <p className="text-redDark my-2">{errorMsg}</p>}
        <button
          onClick={handlePasswordChange}
          className="flex w-1/3 justify-center capitalize rounded-md bg-black px-3 py-1.5 text-sm font-primaryBold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          save
        </button>
      </div>
      {/* divider */}
      <div className="my-2">
        <hr className="border-t-2 border-solid " />
      </div>
      {/* delete-account-section */}
      <div className="my-6 flex flex-col gap-2">
        <span className="text-xl capitalize font-primaryRegular">
          delete account
        </span>
        <p className="text-base font-primaryRegular my-2">
          Make sure you have taken backup of your account in case you ever need
          to get access to your data. We will completely wipe your data. There
          is no way to access your account after this action.
        </p>
        <button
          onClick={toggleModal}
          className="flex w-1/3 justify-center items-center gap-2 rounded-md bg-redLight px-3 py-1.5 text-sm font-semibold leading-6 text-redDark shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <MdDeleteForever size={18} /> Delete Acoount
        </button>
      </div>
      {isModalOpen && <UserAccountDeleteModal toggleModal={toggleModal} />}
    </div>
  );
};

export default MyAccountSection;
