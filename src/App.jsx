import { Routes, Route, useNavigate } from "react-router-dom";
import "./i18n";
import Codecheck from "./pages/codecheck/codecheck";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Forgetpass from "./pages/forgetpass/forgetpass";
import Resetpass from "./pages/resetpass/resetpass";
import UserKind from "./pages/userKind/userKind";
import Doctor from "./pages/doctor/doctor";
import Jobs from "./pages/jobs/jobs";
import { MainPage } from "./pages";
import Profile from "./pages/profile/profile";
import Settings from "./pages/settings/Settings";
import Store from "./pages/store/Store";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ReelsPage from "./pages/reels/reelsPage/ReelsPage";
import SingleVideo from "./components/singleVideo/SingleVideo";
import { Navbar } from "./components";

import "./App.scss"; /* eslint-disable react/no-children-prop */
import SingleProduct from "./pages/singleProduct/SingleProduct";
import { store } from "./rtk/store";
import AllRegister from "./pages/AllRegister/AllRegister";
import { ToastContainer } from "react-toastify";
import Language from "./pages/languag/languag";
import { useSelector } from "react-redux";

function App() {
  const [t, i18n] = useTranslation();
  const { user, error, msg } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!user) {
      document.body.classList.add("bg-white");
    } else {
      document.body.classList.remove("bg-white");
    }
  }, [user]);

  useEffect(() => {
    // console.log(i18n.language);
    if (i18n.language === "ar") {
      localStorage.setItem("direction", "rtl");
      document.body.classList.remove("en");
    } else {
      localStorage.setItem("direction", "ltr");
      document.body.classList.add("en");
    }
  }, []);

  return (
    <>
      {/* {isVisibleNavbar && <Navbar />} */}
      <ToastContainer position="top-right" />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<AllRegister />} />
        <Route path="/forget-pass" element={<Forgetpass />} />
        <Route path="/check-code" element={<Codecheck />} />
        <Route path="/reset-pass" element={<Resetpass />} />
        <Route path="/language" element={<Language />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/user-kind" element={<UserKind />} />
        <Route path="/job" element={<Jobs />} />
        <Route path="/profile/:id" element={user ? <Profile /> : <Login />} />
        <Route
          path="/reels-page/:id"
          element={user ? <ReelsPage /> : <Login />}
        />
        <Route path="/:allroute" element={user ? <MainPage /> : <Login />} />
        <Route path="/" element={user ? <MainPage /> : <Login />} />
        <Route
          path="/settings/:name"
          element={user ? <Settings /> : <Login />}
        />
        <Route path="/store/:name" element={user ? <Store /> : <Login />} />
        <Route path="/store" element={user ? <Store /> : <Login />} />

        <Route
          path="/singleVideo"
          element={user ? <SingleVideo /> : <Login />}
        />
        <Route
          path="/singleProduct"
          element={user ? <SingleProduct /> : <Login />}
        />
      </Routes>
    </>
  );
}

export default App;
