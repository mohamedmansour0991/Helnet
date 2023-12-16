import { Navbar, Aside, MainMenu, Posts } from "/src/components";
import { search, store, events, video, reel } from "/src/assets/images/icons";
import { useTranslation } from "react-i18next";
import "./MainPage.scss";
import { useParams } from "react-router-dom";
import Reels from "../reels/reels";
import Settings from "../settings/Settings";

export default function MainPage() {
  const { t } = useTranslation();
  const direction = localStorage.getItem("direction");
  const name = useParams().allroute;
  const mainMenuLabels = [
    { name: t("Search"), icon: search, link: "search" },
    { name: t("Store"), icon: store, link: "store" },
    { name: t("Events"), icon: events, link: "event" },
    { name: t("video"), icon: video, link: "video" },
    { name: t("Reel"), icon: reel, link: "reel" },
  ];
  console.log(name);
  return (
    <div className="bg-body">
      <Navbar />
      <main className={`main ${direction}`}>
        <MainMenu mainMenuLabels={mainMenuLabels} />
        <div className="container">
          <Posts />
          {/* {name === "home" ? (
            <SinglePost />
          ) : name === "reel" ? (
            <Reels />
          ) : (
            name === "settings" && <Settings />
          )} */}
        </div>
        <Aside />
      </main>
    </div>
  );
}
