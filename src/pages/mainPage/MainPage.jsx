import { Aside, MainMenu, Navbar } from "/src/components";
import "./MainPage.scss";

export default function MainPage() {
  return (
    <div>
      <Navbar />
      <main className="main">
        <MainMenu />
        <div className="placeholder">well be the rest of the website</div>
        <Aside />
      </main>
    </div>
  );
}
