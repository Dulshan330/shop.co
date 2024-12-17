import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import NavBar from "./components/navbar/navBar";
import Footer from "./components/footer/footer";
import ShopPage from "./pages/shopPage";
import SingleShopItemPage from "./pages/singleShopItemPage";
import Error404Page from "./pages/error404Page";
import SigninPage from "./pages/signinPage";
import SignupPage from "./pages/signupPage";
import ForgotPasswordPage from "./pages/forgotPasswordPage";
import MyAccountPage from "./pages/myAccountPage";
import TopHeader from "./components/navbar/topHeader";

function App() {
  return (
    <React.Fragment>
      <TopHeader />
      <NavBar />
      <Routes>
        <Route path="*" element={<Error404Page />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:id" element={<SingleShopItemPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot_password" element={<ForgotPasswordPage />} />
        <Route path="/account" element={<MyAccountPage />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
