import React from "react";
import { Aside, MainMenu, Navbar } from "/src/components";
import {
  pen,
  info,
  logout,
  support,
  language,
  art,
  mobilephone,
  eye,
} from "/src/assets/images/icons";
import UserInfo from "../userInfo/UserInfo";
import ChangePassword from "../changePassword/ChangePassword";
import Privacy from "../privacy/Privacy";
import UpdateInfo from "../updateInfo/UpdateInfo";
import Language from "../languageSettings/Language";
import Art from "../languageSettings/Language";
import Support from "../support/Support";
import { Route, Routes, useParams } from "react-router-dom";

function Settings() {
  const name = useParams().name;
  console.log(name)
  const mainMenuLabels = [
    { name: "تحديث المعلومات", icon: pen, link: "settings/update-info" },
    { name: "بياناتي", icon: info, link: "settings/user-info" },
    {
      name: "تغيير كلمة المرور",
      icon: eye,
      link: "settings/change-pass",
    },
    { name: "الخصوصية", icon: mobilephone, link: "settings/privacy" },
    { name: "اللغة", icon: language, link: "settings/language" },
    { name: "اللون", icon: art, link: "settings/art" },
    { name: "الدعم الفني", icon: support, link: "settings/support" },
    { name: "تسجيل خروج", icon: logout, link: "logout" },
  ];
  return (
    <div>
      <Navbar />
      <main className="main">
        <MainMenu mainMenuLabels={mainMenuLabels} header={"الاعدادات"} />
        <div className="placeholder">
          {name === "user-info" ? (
            <UpdateInfo />
          ) : name === "privacy" ? (
            <Privacy />
          ) : (
            <ChangePassword />
          )}

          {/* <Privacy /> */}
          {/* <ChangePassword /> */}
          {/* <UserInfo/> */}
          {/* <Language /> */}
          {/* <Art /> */}
          {/* <Support /> */}
        </div>
      </main>
    </div>
  );
}

export default Settings;
