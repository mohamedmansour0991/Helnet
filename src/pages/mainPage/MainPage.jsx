import { Aside, MainMenu, Navbar } from "/src/components";
import "./MainPage.scss";
import { search, store, events, video, reel } from "/src/assets/images/icons";
import { useTranslation } from "react-i18next";

export default function MainPage() {
  const [t] = useTranslation();
  const mainMenuLabels = [
    { name: t("Search"), icon: search },
    { name: t("Store"), icon: store },
    { name: t("Events"), icon: events },
    { name: t("video"), icon: video },
    { name: t("Reel"), icon: reel },
  ];
  return (
    <div>
      <Navbar />
      <main className="main">
        <MainMenu mainMenuLabels={mainMenuLabels} />
        <div className="placeholder">well be the rest of the website</div>
        <Aside />
      </main>
    </div>
  );
}
