import React, { useEffect, useState } from "react";
import MyAccountSection from "../components/my account/myAccountSection";
import MyOrderSection from "../components/my account/myOrderSection";
import MyWishlist from "../components/my account/myWishlist";
import authStatues from "../hooks/authStatues";
import { useNavigate } from "react-router-dom";
import Loader from "../components/loader/loader";

const MyAccountPage = () => {
  const [activeScreen, setActiveScreen] = useState("my account");
  const { authUser, loading } = authStatues();
  const navigate = useNavigate();

  const handleActiveScreen = (screen) => {
    setActiveScreen(screen);
  };

  useEffect(() => {
    if (!loading) {
      if (!authUser) {
        navigate("/signin");
      }
    }
  }, [authUser, loading]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="max-w-screen-xl m-auto my-3">
      <div className="my-3">
        <span className="text-3xl font-primaryRegular capitalize">
          my dashboard
        </span>
      </div>

      <div className="flex w-full gap-2">
        {/* left-section */}
        <div className="flex flex-col gap-3 w-1/5">
          <button
            className="capitalize font-primaryRegular text-2xl text-left px-6 py-3 bg-grayLight"
            onClick={() => handleActiveScreen("my account")}
          >
            my account
          </button>
          <button
            className="capitalize font-primaryRegular text-2xl text-left px-6 py-3 bg-grayLight"
            onClick={() => handleActiveScreen("my orders")}
          >
            my orders
          </button>
          <button
            className="capitalize font-primaryRegular text-2xl text-left px-6 py-3 bg-grayLight"
            onClick={() => handleActiveScreen("my wishlist")}
          >
            my wishlist
          </button>
        </div>
        {/* right-section */}
        <div className="w-4/5">
          {activeScreen === "my account" && <MyAccountSection />}
          {activeScreen === "my orders" && <MyOrderSection />}
          {activeScreen === "my wishlist" && <MyWishlist />}
        </div>
      </div>
    </div>
  );
};

export default MyAccountPage;
