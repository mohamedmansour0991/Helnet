import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  lamp,
  lampColored,
  store,
  storeColored,
  reel,
  reelColored,
  video,
  videoColored,
  home,
  homeColored,
  settings,
  globe,
  menu,
  profile1,
  favicon,
} from "/src/assets/images/icons";
import "./Navbar.scss";
import { t } from "i18next";

export default function Navbar() {
  const mainNavbarList = [
    { name: "home", icon: home, coloredIcon: homeColored },
    { name: "video", icon: video, coloredIcon: videoColored },
    { name: "reel", icon: reel, coloredIcon: reelColored },
    { name: "store", icon: store, coloredIcon: storeColored },
    { name: "lamp", icon: lamp, coloredIcon: lampColored },
  ];

  const userOptionsList = [
    { name: "settings/user-info", icon: settings },
    { name: "globe", icon: globe },
    { name: "profile1", icon: profile1 },
  ];

  const navigate = useNavigate();

  const location = useLocation();

  const getCurrentLocationName = () => {
    const currentPath = location.pathname.substring(1);
    return currentPath === "" ? "home" : currentPath;
  };

  const currentPath = getCurrentLocationName();

  const notifications = [
    1, 2, 3, 4, 5,
    // 6, 7, 8, 9
    6, 7, 8, 9, 10,
  ];

  const [isOpened, setIsOpened] = useState(false);

  const direction = localStorage.getItem("direction");

  return (
    <nav className={`navbar ${direction}`}>
      <Link className="navbar__logo" to={"/"}>
        <img src={favicon} alt="Helnet logo" />
      </Link>
      <ul className="navbar__list navigation">
        {mainNavbarList.map((tap, index) => (
          <li
            key={index}
            role="button"
            onClick={() => {
              navigate(`/${tap.name}`);
            }}
          >
            {currentPath === tap.name ? (
              <img src={tap.coloredIcon} alt="" />
            ) : (
              <img src={tap.icon} alt="" />
            )}
          </li>
        ))}
      </ul>
      <ul className="navbar__list userOptions">
        <li className="tapButton">
          <img
            src={menu}
            alt=""
            role="button"
            className="utilityButton"
            onClick={() => setIsOpened(!isOpened)}
          />
        </li>
        {userOptionsList.map((tap, index) => (
          <li
            key={index}
            role="button"
            className={tap.name}
            onClick={() => {
              navigate(`/${tap.name}`);
            }}
          >
            <img src={tap.icon} alt="" />

            {tap.name === "globe" && notifications.length > 0 && (
              <div className="notifications">
                <p>
                  {notifications.length > 9 ? (
                    "9+"
                  ) : (
                    <>{notifications.length}</>
                  )}
                </p>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="navbar__list mobileButton">
        <p>{currentPath}</p>
        <img
          src={menu}
          alt=""
          role="button"
          onClick={() => setIsOpened(!isOpened)}
        />
      </div>
      <ul className={`navbar__list mobileMenu ${isOpened} ${direction}`}>
        <Link>
          <img src={favicon} alt="Helnet logo" />
        </Link>

        {[...mainNavbarList, ...userOptionsList].map((tap, index) => (
          <li
            key={index}
            role="button"
            onClick={() => {
              navigate(`/${tap.name}`);
            }}
          >
            <img src={tap.icon} alt="" />
            <p>{t(tap.name)}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
}
