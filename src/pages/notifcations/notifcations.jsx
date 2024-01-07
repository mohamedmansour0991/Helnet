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
import BoxNotification from "../../components/boxNotification/BoxNotification";
import { useSelector } from "react-redux";
import { getDataNotification } from "../../components/posts/getDataPost";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const Notifcations = () => {
  const [t] = useTranslation();
  const { token } = useSelector((state) => state.auth);
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;

  const { items, hasMore, loadMore, setPage } = getDataNotification(
    1,
    token,
    "get_notification"
  );

  const handleButtonClick = async () => {
    try {
      const res = await axios.get(
        `${URL}/api/mark_all_notification_as_read`,

        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      setPage(0);
    } catch (err) {
      // toast.error(t("A network error occurred"));

      console.log(err);
    }
  };
  return (
    <>
      <div
        className="w-100 bg-white mb-2 text-center cursor-pointer py-2"
        style={{ borderRadius: "10px" }}
        onClick={() => handleButtonClick()}
      >
        Read All
      </div>
      <div className="notification">
        {/* <div>
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
        </div> */}
        <InfiniteScroll
          dataLength={items.length}
          next={loadMore}
          hasMore={hasMore}
          loader={<div className="lds-default  m-auto d-flex"></div>}
        >
          {items[0]?.id
            ? items.map((notification) => (
                <BoxNotification
                  key={notification.id}
                  notification={notification}
                />
              ))
            : ""}
          {/* <BoxNotification />
          <BoxNotification /> */}
        </InfiniteScroll>

        {/* <div>
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
            الأربعاء 27/11/2023 :{" "}
          </h1>
          <img className="pic2" src={Rectangle} alt="" />
        </div>
        <BoxNotification />
        <BoxNotification /> */}
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
