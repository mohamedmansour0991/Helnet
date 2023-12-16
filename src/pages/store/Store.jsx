import React from "react";
import { Aside, MainMenu, Navbar } from "/src/components";
import { buy } from "/src/assets/images/icons";
import Buy from "./buy/Buy";
import { useTranslation } from "react-i18next";
import "./Store.scss";
import { useParams } from "react-router-dom";
import ProductDisplay from "./productDisplay/ProductDisplay";
import { asking, easy } from "../../assets/images/icons";
function Store() {
  const direction = localStorage.getItem("direction");
  const [t] = useTranslation();
  const name = useParams().name;
  const mainMenuLabels = [
    { name: t("Buy"), icon: buy, link: "store/buy" },
    { name: t("Used"), icon: easy, link: "store/used" },
    { name: t("Product display"), icon: asking, link: "store/display" },
  ];
  return (
    <div className="bg-body">
      <Navbar />
      <main className={`main ${direction}`}>
        <MainMenu mainMenuLabels={mainMenuLabels} />
        <div className="container">
          <div className="store">
            {name === "buy" ? (
              <div className="store-bg">
                <Buy />
              </div>
            ) : name == "used" ? (
              <div className="store-bg">
                <Buy />
              </div>
            ) : (
              <ProductDisplay />
            )}
          </div>
        </div>
        <Aside />
      </main>
    </div>
  );
}

export default Store;
