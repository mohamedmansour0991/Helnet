import home from "../../assets/images/home.png";
import graduation from "../../assets/images/graduation.png";
import freelance from "../../assets/images/freelance.png";
import cake from "../../assets/images/cake.png";
import link from "../../assets/images/link.png";
import Rectangle from "../../assets/images/Rectangle.png";
import profilePic from "../../assets/images/profilePic.png";
import delet from "../../assets/images/delete.png";
import { Aside, MainMenu, Navbar, SinglePost } from "/src/components";
import { useTranslation } from "react-i18next";
import { search, store, events, video, reel } from "/src/assets/images/icons";
import BoxNotification from "../../components/boxNotification/boxNotification";

const Notifcations = () => {
  const [t] = useTranslation();
  const direction = localStorage.getItem("direction");

  const mainMenuLabels = [
    { name: t("Search"), icon: search, link: "search" },
    { name: t("Store"), icon: store, link: "store" },
    { name: t("Events"), icon: events, link: "event" },
    { name: t("video"), icon: video, link: "video" },
    { name: t("Reel"), icon: reel, link: "reel" },
  ];
  return (
    <>
      <div className="bg-body">
        <Navbar />
        <main className={`main ${direction}`}>
          <MainMenu mainMenuLabels={mainMenuLabels} />
          <div className="container">
            <div className="notification">
              <div>
                <h1
                  className="mb-0 pb-0"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#2F2F31",
                  }}
                >
                  اليوم :{" "}
                </h1>
                <img className="pic2" src={Rectangle} alt="" />
              </div>
              <BoxNotification />
              <BoxNotification />
              <div>
                <h1
                  className="mb-0 pb-0"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#2F2F31",
                  }}
                >
                  امس :{" "}
                </h1>
                <img className="pic2" src={Rectangle} alt="" />
              </div>
              <BoxNotification />
              <BoxNotification />
              <div>
                <h1
                  className="mb-0 pb-0"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#2F2F31",
                  }}
                >
                  الأربعاء 27/11/2023 : {" "}
                </h1>
                <img className="pic2" src={Rectangle} alt="" />
              </div>
              <BoxNotification />
              <BoxNotification />
            </div>
          </div>
          <Aside />
        </main>
      </div>
      {/* sidebar */}

      <style>
        {`
                 @media (max-width: 800px) {
                  
                  li {
                    flex-flow: wrap;
                  }
                  .par {
                     margin-left: 0px!important; 
                  }
                }

                @media (max-width: 800px) {
                  .myside {
                    width:92%!important;
                  }
                  }
                 `}
      </style>
    </>
  );
};

export default Notifcations;
