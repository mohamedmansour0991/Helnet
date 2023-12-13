import { Aside, MainMenu, Navbar } from "/src/components";
import "./MainPage.scss";
import { search, store, events, video, reel } from "/src/assets/images/icons";

export default function MainPage() {
  const mainMenuLabels = [
    { name: "search", icon: search },
    { name: "store", icon: store },
    { name: "events", icon: events },
    { name: "video", icon: video },
    { name: "reel", icon: reel },
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
