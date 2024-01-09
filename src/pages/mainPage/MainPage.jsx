import { Navbar, Aside, MainMenu, Posts } from "/src/components";
import {
  search,
  store,
  events,
  Video3,
  video,
  reel,
  image,
  voice,
  friend,
} from "/src/assets/images/icons";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Reels from "../reels/reels";
import Settings from "../settings/Settings";
import Notifcations from "../notifcations/Notifcations";
import Videos from "../videos/Videos";
import { data } from "/public/fakeData";
import { CreatePost, FiltersBar } from "../../components/ui";
import Friends from "../Friends/Friends";
import "./MainPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Suggest from "../Friends/Suggest";
import Requests from "../Friends/Requests";
import Search from "../Search/Search";
import { refrechPosts } from "../../rtk/slices/authSlice";
import { refrechPostsProductNews } from "../../rtk/slices/productSlice";

export default function MainPage() {
  const { user, error, msg, update } = useSelector((state) => state.auth);
  const { updateNews } = useSelector((state) => state.store);
  const uploads = useSelector((state) => state.progress.uploads);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

  useEffect(() => {
    if (update.id) {
      dispatch(refrechPosts({}));
    }
    if (updateNews.id) {
      dispatch(refrechPostsProductNews({}));
    }
  }, [name]);
  return (
    <div className="bg-body">
      <Navbar />
      <main className={`main ${direction}`}>
        <MainMenu mainMenuLabels={mainMenuLabels} />
        <div className="container no-scrollbar">
          {name === "home" || name === undefined ? (
            <div className="grid gap-3">
              <div className="flex items-center flex-col gap-3 w-full">
                <CreatePost
                  buttons={[
                    { value: "Images", title: "Post Images", image: image },
                    { value: "Video", title: "Post Video", image: Video3 },
                    { value: "Record", title: "Post Record", image: voice },
                  ]}
                />
              </div>
              {uploads.map((upload) => (
                <div key={upload.fileId}>
                  {upload.isLoading && (
                    <div className="w-full flex justify-between bg-white rounded-2xl items-center max-w-4xl shadow-xss p-3 m-auto">
                      <div className="">{t("uploading")}</div>
                      <div className="w-16">
                        <CircularProgressbar
                          value={upload.percentage}
                          text={`${upload.percentage}%`}
                          styles={buildStyles({
                            textColor: "#333",
                            pathColor: "#007bff",
                            trailColor: "#f0f0f0",
                            textSize: "1.25rem",
                          })}
                        />
                      </div>
                    </div>
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
            <Suggest type="may-know" />
          ) : name === "request" ? (
            <Requests type="current-requests" />
          ) : name === "following" ? (
            <Friends type="current-following" />
          ) : name === "globe" ? (
            <Notifcations />
          ) : name === "search" ? (
            <Search />
          ) : (
            name === "settings" && <Settings />
          )}
        </div>
        <Aside />
      </main>
    </div>
  );
}
