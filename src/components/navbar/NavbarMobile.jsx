import React, { useState, useRef } from "react";
import "./styles.scss";
import { useTranslation } from "react-i18next";
import {
  friends,
  store,
  storeColored,
  reel,
  reelColored,
  video,
  videoColored,
  buy,
  asking,
  easy,
  home,
  homeColored,
  settings,
  globe,
  menu,
  profile1,
  favicon,
  pen,
  info,
  logout2,
  support,
  language,
  art,
  mobilephone,
  eye,
} from "/src/assets/images/icons";
import { useNavigate } from "react-router-dom";
const Icon = ({ icon }) => <img src={icon} alt="" style={{ width: "30px" }} />;

const NavHeader = () => (
  <header className="sidebar-header">
    <button type="button">
      <Icon icon="menu" />
    </button>
    <span>Admin</span>
  </header>
);

const NavButton = ({ onClick, name, icon, isActive, hasSubNav }) => (
  <button
    type="button"
    onClick={() => onClick(name)}
    className={isActive ? "active" : ""}
  >
    {icon && <Icon icon={icon} />}
    <span>{name}</span>
    {hasSubNav && <Icon icon="expand_more" />}
  </button>
);

const SubMenu = ({ item, activeItem, onClick }) => {
  const navRef = useRef(null);
  const navigate = useNavigate();
  const isSubNavOpen = (item, items) =>
    items.some((i) => i === activeItem) || item === activeItem;
  console.log(isSubNavOpen);
  return (
    <div
      className={`sub-nav ${isSubNavOpen(item.name, item.items) ? "open" : ""}`}
      style={{
        height: !isSubNavOpen(item.name, item.items)
          ? 0
          : navRef.current?.clientHeight,
      }}
    >
      <div ref={navRef} className="sub-nav-inner">
        {item?.items.map((subItem) => (
          <NavButton
            onClick={() => {
              onClick(item);
              navigate(`/${subItem.link}`);
            }}
            name={subItem.name}
            isActive={activeItem === subItem}
          />
        ))}
      </div>
    </div>
  );
};

export const Sidebar = ({ isOpened, menuRef }) => {
  const [activeItem, setActiveItem] = useState("");
  const navigate = useNavigate();
  const handleClick = (item) => {
    navigate(`/${item.link}`);
    console.log("activeItem", activeItem);
    setActiveItem(item !== activeItem ? item : "");
  };
  const handleClickOpen = (item) => {
    console.log("activeItem", activeItem);
    setActiveItem(item !== activeItem ? item : "");
  };
  const [t] = useTranslation();
  const menuItems = [
    { name: t("Home"), icon: home, coloredIcon: homeColored, link: "home" },
    { name: t("video"), icon: video, coloredIcon: videoColored, link: "video" },
    { name: t("Reel"), icon: reel, coloredIcon: reelColored, link: "reel" },
    { name: t("Store"), icon: store, coloredIcon: storeColored, link: "store" },
    {
      name: t("Settings"),
      icon: settings,
      link: "settings/update-user",
      items: [
        {
          name: t("Update Information"),
          icon: pen,
          link: "settings/update-info",
        },
        { name: t("My Information"), icon: info, link: "settings/user-info" },
        {
          name: t("Edit Password"),
          icon: eye,
          link: "settings/change-pass",
        },
        { name: t("Privacy"), icon: mobilephone, link: "settings/privacy" },
        { name: t("Language"), icon: language, link: "settings/language" },
        { name: t("Color"), icon: art, link: "settings/art" },
        { name: t("Support"), icon: support, link: "settings/support" },
        { name: t("Logout"), icon: logout2, link: "login", event: "logout" },
      ],
    },
    {
      name: t("friends"),
      icon: friends,
      coloredIcon: friends,
      link: "friends",
    },
  ];
  const direction = localStorage.getItem("direction");

  return (
    <aside ref={menuRef} className={`sidebar    ${isOpened} ${direction}`}>
      <NavHeader />
      {menuItems.map((item, index) => (
        <div key={index}>
          {!item.items && (
            <NavButton
              onClick={() => handleClick(item)}
              name={item.name}
              icon={item.icon}
              isActive={activeItem === item.name}
              hasSubNav={!!item.items}
            />
          )}
          {item.items && (
            <>
              <NavButton
                onClick={handleClickOpen}
                name={item.name}
                icon={item.icon}
                isActive={activeItem === item.name}
                hasSubNav={!!item.items}
              />
              <SubMenu
                activeItem={activeItem}
                onClick={() => handleClick(item)}
                item={item}
              />
            </>
          )}
        </div>
      ))}
    </aside>
  );
};
