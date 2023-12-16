import "./App.scss";
/* eslint-disable react/no-children-prop */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./i18n";
import Codecheck from "./pages/codecheck/codecheck";
import { Button } from "./components/ui";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Forgetpass from "./pages/forgetpass/forgetpass";
import Resetpass from "./pages/resetpass/resetpass";
import UserKind from "./pages/userKind/userKind";
import Provider from "./pages/provider/provider";
import Doctor from "./pages/doctor/doctor";
import Colors from "./pages/Colors/colors";
import Jobs from "./pages/jobs/jobs";
import Places from "./pages/places/places";
import Nutrition from "./pages/nutrition/nutrition";
import Language from "./pages/languag/languag";
import { MainPage } from "./pages";
import Profile from "./pages/profile/profile";
import Notifcations from "./pages/notifcations/notifcations";
import Reels from "./pages/reels/reels";
import Settings from "./pages/settings/Settings";
import Store from "./pages/store/Store";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ProductDisplay from "./pages/store/productDisplay/ProductDisplay";

function App() {
  const [t, i18n] = useTranslation();
  useEffect(() => {
    console.log(i18n.language);
    if (i18n.language === "ar") {
      localStorage.setItem("direction", "rtl");
    } else {
      localStorage.setItem("direction", "ltr");
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Button children={"Button"} />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/forget-pass" element={<Forgetpass />} />
        <Route path="/check-code" element={<Codecheck />} />
        <Route path="/reset-pass" element={<Resetpass />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/user-kind" element={<UserKind />} />
        {/* <Route path="" element={<Provider />} /> */}
        <Route path="/job" element={<Jobs />} />
        {/* <Route path="" element={<Places />} /> */}
        {/* <Route path="" element={<Nutrition />} /> */}
        {/* <Route path="" element={<Language />} /> */}
        {/* <Route path="" element={<Colors />} /> */}

        {/* <Route path="/profile1" element={<Profile />} /> */}
        {/* <Route path="/globe" element={<Notifcations />} /> */}
        {/* <Route path="/reel" element={<Reels />} /> */}

        {/* <Route path="" element={<Profile />} /> */}
        {/* <Route path="" element={<Notifcations />} /> */}
        {/* <Route path="" element={<Reels />} /> */}

        {/* <Route path="" element={<Profile />} /> */}
        <Route path="/:allroute" element={<MainPage />} />
        {/* <Route path="/" element={<MainPage />} /> */}
        {/* <Route path="/home" element={<MainPage />} /> */}
        <Route path="/settings/:name" element={<Settings />} />
        {/* <Route path="/settings/update-info" element={<Settings />} />
        <Route path="/settings/change-pass" element={<Settings />} />
        <Route path="/settings/privacy" element={<Settings />} />
        <Route path="/settings/language" element={<Settings />} />
        <Route path="/settings/art" element={<Settings />} />
        <Route path="/settings/support" element={<Settings />} /> */}
        <Route path="/store" element={<Store />} />
        <Route path="/store/:name" element={<Store />} />
        {/* <Route path="/store/buy" element={<Store />} />
        <Route path="/store/used" element={<Store />} />
        <Route path="/store/display" element={<ProductDisplay />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
