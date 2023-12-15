import React from "react";
import { Aside, MainMenu, Navbar } from "/src/components";
import { search, store, events, video, reel } from "/src/assets/images/icons";
import CardStore from "../../components/cardStore/CardStore";
import Buy from "./buy/Buy";
import { useTranslation } from "react-i18next";
function Store() {
  const [t] = useTranslation();
  const mainMenuLabels = [
    { name: t("Buy"), icon: search },
    { name: t("Used"), icon: store },
    { name: t('Product display'), icon: events },
  ];
  return (
    <div>
      <Navbar />
      <main className="main">
        <MainMenu mainMenuLabels={mainMenuLabels} />
        {/* <div className="placeholder"> */}

        <Buy />
        <Aside />
      </main>
    </div>
  );
}

export default Store;
