import { Navbar, Aside, MainMenu, Posts } from "/src/components";
import { search, store, events, video, reel } from "/src/assets/images/icons";
import { useTranslation } from "react-i18next";
import "./MainPage.scss";
import { useParams } from "react-router-dom";
import Reels from "../reels/reels";
import Settings from "../settings/Settings";
import Notifcations from "../notifcations/Notifcations";
import Videos from "../videos/Videos";
import {
  testImage1,
  testImage2,
  testImage3,
  testImage4,
  testImage5,
  testImage6,
} from "../../assets/images";
import { testVideo } from "../../assets/videos";
export default function MainPage() {
  const { t } = useTranslation();
  const direction = localStorage.getItem("direction");
  const name = useParams().allroute;
  const mainMenuLabels = [
    { name: t("Search"), icon: search, link: "search" },
    { name: t("Store"), icon: store, link: "store/buy" },
    { name: t("Events"), icon: events, link: "event" },
    { name: t("video"), icon: video, link: "video" },
    { name: t("Reel"), icon: reel, link: "reel" },
  ];
  const data = [
    {
      post_id: "1",
      post_data: {
        post_time: "",
        post_text:
          "الأهرامات في مصر هي شهادة حية على الحضارة المصرية القديمة وتعتبر واحدة من أعجب المعالم السياحية في العالم. تاريخها يعود إلى الفترة من 2600 إلى 2500 قبل الميلاد وتم بناؤها كمقابر لملوك الفراعنة!  😍",
        post_images: [],
        post_video: "",
      },
      post_user: {
        user_id: "1",
      },
      post_likes: [],
    },

    {
      post_id: "2",
      post_data: {
        post_time: "",
        post_text: "",
        post_images: [],
        post_video: testVideo,
      },
      post_user: {
        user_id: "1",
      },
      post_likes: [],
    },

    {
      post_id: "3",
      post_data: {
        post_time: "",
        post_text:
          "الأهرامات في مصر هي شهادة حية على الحضارة المصرية القديمة وتعتبر واحدة من أعجب المعالم السياحية في العالم. تاريخها يعود إلى الفترة من 2600 إلى 2500 قبل الميلاد وتم بناؤها كمقابر لملوك الفراعنة!  😍",
        post_images: [],
        post_video: testVideo,
      },
      post_user: {
        user_id: "1",
      },
      post_likes: [],
    },

    {
      post_id: "4",
      post_data: {
        post_time: "",
        post_text: "",
        post_images: [testImage1],
        post_video: "",
      },
      post_user: {
        user_id: "1",
      },
      post_likes: [],
    },

    {
      post_id: "5",
      post_data: {
        post_time: "",
        post_text:
          "الأهرامات في مصر هي شهادة حية على الحضارة المصرية القديمة وتعتبر واحدة من أعجب المعالم السياحية في العالم. تاريخها يعود إلى الفترة من 2600 إلى 2500 قبل الميلاد وتم بناؤها كمقابر لملوك الفراعنة!  😍",
        post_images: [testImage1],
        post_video: "",
      },
      post_user: {
        user_id: "1",
      },
      post_likes: [],
    },

    {
      post_id: "6",
      post_data: {
        post_time: "",
        post_text: "",
        post_images: [testImage1, testImage2],
        post_video: "",
      },
      post_user: {
        user_id: "1",
      },
      post_likes: [],
    },
    {
      post_id: "7",
      post_data: {
        post_time: "",
        post_text:
          "الأهرامات في مصر هي شهادة حية على الحضارة المصرية القديمة وتعتبر واحدة من أعجب المعالم السياحية في العالم. تاريخها يعود إلى الفترة من 2600 إلى 2500 قبل الميلاد وتم بناؤها كمقابر لملوك الفراعنة!  😍",
        post_images: [testImage1, testImage2],
        post_video: "",
      },
      post_user: {
        user_id: "1",
      },
      post_likes: [],
    },
    {
      post_id: "8",
      post_data: {
        post_time: "",
        post_text: "",
        post_images: [testImage1, testImage2, testImage3],
        post_video: "",
      },
      post_user: {
        user_id: "1",
      },
      post_likes: [],
    },
    {
      post_id: "9",
      post_data: {
        post_time: "",
        post_text:
          "الأهرامات في مصر هي شهادة حية على الحضارة المصرية القديمة وتعتبر واحدة من أعجب المعالم السياحية في العالم. تاريخها يعود إلى الفترة من 2600 إلى 2500 قبل الميلاد وتم بناؤها كمقابر لملوك الفراعنة!  😍",
        post_images: [testImage1, testImage2, testImage3],
        post_video: "",
      },
      post_user: {
        user_id: "1",
      },
      post_likes: [],
    },
    {
      post_id: "10",
      post_data: {
        post_time: "",
        post_text: "",
        post_images: [testImage1, testImage2, testImage3, testImage4],
        post_video: "",
      },
      post_user: {
        user_id: "1",
      },
      post_likes: [],
    },
    {
      post_id: "11",
      post_data: {
        post_time: "",
        post_text:
          "الأهرامات في مصر هي شهادة حية على الحضارة المصرية القديمة وتعتبر واحدة من أعجب المعالم السياحية في العالم. تاريخها يعود إلى الفترة من 2600 إلى 2500 قبل الميلاد وتم بناؤها كمقابر لملوك الفراعنة!  😍",
        post_images: [testImage1, testImage2, testImage3, testImage4],
        post_video: "",
      },
      post_user: {
        user_id: "1",
      },
      post_likes: [],
    },
    {
      post_id: "12",
      post_data: {
        post_time: "",
        post_text: "",
        post_images: [
          testImage1,
          testImage2,
          testImage3,
          testImage4,
          testImage5,
        ],
        post_video: "",
      },
      post_user: {
        user_id: "1",
      },
      post_likes: [],
    },
    {
      post_id: "13",
      post_data: {
        post_time: "",
        post_text:
          "الأهرامات في مصر هي شهادة حية على الحضارة المصرية القديمة وتعتبر واحدة من أعجب المعالم السياحية في العالم. تاريخها يعود إلى الفترة من 2600 إلى 2500 قبل الميلاد وتم بناؤها كمقابر لملوك الفراعنة!  😍",
        post_images: [
          testImage1,
          testImage2,
          testImage3,
          testImage4,
          testImage5,
        ],
        post_video: "",
      },
      post_user: {
        user_id: "1",
      },
      post_likes: [],
    },
    {
      post_id: "14",
      post_data: {
        post_time: "",
        post_text: "",
        post_images: [
          testImage1,
          testImage2,
          testImage3,
          testImage4,
          testImage5,
          testImage6,
        ],
        post_video: "",
      },
      post_user: {
        user_id: "1",
      },
      post_likes: [],
    },
    {
      post_id: "15",
      post_data: {
        post_time: "",
        post_text:
          "الأهرامات في مصر هي شهادة حية على الحضارة المصرية القديمة وتعتبر واحدة من أعجب المعالم السياحية في العالم. تاريخها يعود إلى الفترة من 2600 إلى 2500 قبل الميلاد وتم بناؤها كمقابر لملوك الفراعنة!  😍",
        post_images: [
          testImage1,
          testImage2,
          testImage3,
          testImage4,
          testImage5,
          testImage6,
        ],
        post_video: "",
      },
      post_user: {
        user_id: "1",
      },
      post_likes: [],
    },
  ];

  return (
    <div className="bg-body">
      <Navbar />
      <main className={`main ${direction}`}>
        <MainMenu mainMenuLabels={mainMenuLabels} />
        <div className="container">
          {name === "home" || name === undefined ? (
            <Posts data={data} />
          ) : name === "reel" ? (
            <Reels />
          ) : name === "video" ? (
            <Videos />
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
