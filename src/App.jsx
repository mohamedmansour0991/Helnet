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
import Settings from "./pages/settings/Settings";
import Store from "./pages/store/Store";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="" element={<Button children={"Button"} />} />  */}
        {/* <Route path="" element={<Login />} /> */}
        {/* <Route path="" element={<Signup />} /> */}
        {/* <Route path="" element={<Forgetpass />} /> */}
        {/* <Route path="" element={<Codecheck />} /> */}
        {/* <Route path="" element={<Resetpass />} /> */}
        {/* <Route path="" element={<Doctor />} /> */}
        {/* <Route path="" element={<UserKind />} /> */}
        {/* <Route path="" element={<Provider />} /> */}
        {/* <Route path="" element={<Jobs />} /> */}
        {/* <Route path="" element={<Places />} /> */}
        {/* <Route path="" element={<Nutrition />} /> */}
        {/* <Route path="" element={<Language />} /> */}
        {/* <Route path="" element={<Colors />} /> */}

        {/* <Route path="" element={<Profile />} /> */}
        <Route path="" element={<MainPage />} />
        <Route path="/settings/:name" element={<Settings />} />
        {/* <Route path="/settings/update-info" element={<Settings />} />
        <Route path="/settings/change-pass" element={<Settings />} />
        <Route path="/settings/privacy" element={<Settings />} />
        <Route path="/settings/language" element={<Settings />} />
        <Route path="/settings/art" element={<Settings />} />
        <Route path="/settings/support" element={<Settings />} /> */}
        <Route path="/store" element={<Store />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
