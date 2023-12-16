import { Navbar, Aside, MainMenu, Posts } from "/src/components";
import { search, store, events, video, reel } from "/src/assets/images/icons";
import { useTranslation } from "react-i18next";
import "./MainPage.scss";

export default function MainPage() {
  const { t } = useTranslation();
  const direction = localStorage.getItem("direction");

  const mainMenuLabels = [
    { name: t("Search"), icon: search },
    { name: t("Store"), icon: store },
    { name: t("Events"), icon: events },
    { name: t("video"), icon: video },
    { name: t("Reel"), icon: reel },
  ];
  return (
    <div className="bg-body">
      <Navbar />
      <main className={`main ${direction}`}>
        <MainMenu mainMenuLabels={mainMenuLabels} />
        <div className="container">
          <Posts />
        </div>
        <Aside />
      </main>
    </div>
  );
}
