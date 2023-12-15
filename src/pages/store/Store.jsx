import React from "react";
import { Aside, MainMenu, Navbar } from "/src/components";
import { search, store, events, video, reel } from "/src/assets/images/icons";
import Buy from "./buy/Buy";
import { useTranslation } from "react-i18next";
import "./Store.scss";
function Store() {
  const direction = localStorage.getItem("direction");
  const [t] = useTranslation();

  const mainMenuLabels = [
    { name: t("Buy"), icon: search },
    { name: t("Used"), icon: store },
    { name: t("Product display"), icon: events },
  ];
  return (
    <div className="bg-body">
      <Navbar />
      <main className={`main ${direction}`}>
        <MainMenu mainMenuLabels={mainMenuLabels} />
        <div className="container">
          <div className="store">
            <Buy />
          </div>
        </div>
        <Aside />
      </main>
    </div>
  );
}

export default Store;
