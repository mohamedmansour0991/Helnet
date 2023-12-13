import { search, store, events, video, reel } from "/src/assets/images/icons";
import "./MainMenu.scss";

export default function MainMenu() {
  const mainMenuLabels = [
    { name: "search", icon: search },
    { name: "store", icon: store },
    { name: "events", icon: events },
    { name: "video", icon: video },
    { name: "reel", icon: reel },
  ];
  return (
    <aside className="mainMenu">
      <ul className="mainMenu__List">
        {mainMenuLabels.map((tap, index) => (
          <li
            key={index}
            role="button"
            onClick={() => {
              navigate(`/${tap.name}`);
            }}
          >
            <img src={tap.icon} alt="" />
            <p>{tap.name}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
