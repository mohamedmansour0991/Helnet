import React from "react";
import { Aside, MainMenu, Navbar } from "/src/components";
import { search, store, events, video, reel } from "/src/assets/images/icons";
import CardStore from "../../components/cardStore/CardStore";
import Buy from "./buy/Buy";
function Store() {
  const mainMenuLabels = [
    { name: "بيع", icon: search },
    { name: "مستعمل", icon: store },
    { name: "عرض منتج", icon: events },
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
