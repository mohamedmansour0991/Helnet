import { Navbar, Aside, MainMenu, Posts } from "/src/components";
import {
  search,
  store,
  events,
  video,
  reel,
  friend,
} from "/src/assets/images/icons";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import Reels from "../reels/reels";
import Settings from "../settings/Settings";
import Notifcations from "../notifcations/Notifcations";
import Videos from "../videos/Videos";
import { data } from "/public/fakeData";
import { CreatePost } from "../../components/ui";
import Friends from "../Friends/Friends";
import "./MainPage.scss";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function MainPage() {
  const { user, error, msg } = useSelector((state) => state.auth);
  const uploads = useSelector((state) => state.progress.uploads);

  const { t } = useTranslation();
  const direction = localStorage.getItem("direction");
  const name = useParams().allroute;
  const mainMenuLabels = [
    { name: t("Search"), icon: search, link: "search" },
    { name: t("Store"), icon: store, link: "store/buy" },
    { name: t("Events"), icon: events, link: "event" },
    { name: t("video"), icon: video, link: "video" },
    { name: t("Reel"), icon: reel, link: "reel" },
    { name: t("Friends"), icon: friend, link: "friends" },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-body">
      <Navbar />
      <main className={`main ${direction}`}>
        <MainMenu mainMenuLabels={mainMenuLabels} />
        <div className="container no-scrollbar">
          {name === "home" || name === undefined ? (
            <div className="grid gap-3">
              <CreatePost />
              {uploads.map((upload) => (
                <div
                  key={upload.fileId}
                  className="d-flex justify-content-between align-items-center shadow-xss p-3 mx-3"
                >
                  {upload.isLoading && (
                    <>
                      <div className="">{t("uploading")}</div>
                      <div style={{ width: "50px" }}>
                        <CircularProgressbar
                          value={upload.percentage}
                          text={`${upload.percentage}%`}
                          styles={buildStyles({
                            textColor: "#333",
                            pathColor: "#007bff",
                            trailColor: "#f0f0f0",
                            textSize: "16px",
                          })}
                        />
                      </div>
                    </>
                  )}
                </div>
              ))}
              <Posts data={data} />
            </div>
          ) : name === "reel" ? (
            <Reels />
          ) : name === "video" ? (
            <Videos />
          ) : name === "friends" ? (
            <Friends type="current-follower" />
          ) : name === "suggests" ? (
            <Friends type="may-know" />
          ) : name === "request" ? (
            <Friends type="current-requests" />
          ) : name === "following" ? (
            <Friends type="current-following" />
          ) : name === "globe" ? (
            <Notifcations />
          ) : (
            name === "settings" && <Settings />
          )}
        </div>
        <Aside />
      </main>
    </div>
  );
}
