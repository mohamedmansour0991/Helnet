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
import { useTranslation } from "react-i18next";

function Settings() {
  const name = useParams().name;
  // console.log(name)
  const [t] = useTranslation();

  const mainMenuLabels = [
    { name: t("Update Information"), icon: pen, link: "settings/update-info" },
    { name: t("My Information"), icon: info, link: "settings/user-info" },
    {
      name: t("Edit Password"),
      icon: eye,
      link: "settings/change-pass",
    },
    { name: t("Privacy"), icon: mobilephone, link: "settings/privacy" },
    { name: t("Language"), icon: language, link: "settings/language" },
    { name: t("Color"), icon: art, link: "settings/art" },
    { name: t("Support"), icon: support, link: "settings/support" },
    { name: t("Logout"), icon: logout, link: "logout" },
  ];
  return (
    <div>
      <Navbar />
      <main className="main">
        <MainMenu mainMenuLabels={mainMenuLabels} header={t("Settings")} />
        <div className="placeholder">
          {name === "user-info" ? (
            <UserInfo />
          ) : name === "update-info" ? (
            <UpdateInfo />
          ) : name === "privacy" ? (
            <Privacy />
          ) : name === "language" ? (
            <Language />
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
