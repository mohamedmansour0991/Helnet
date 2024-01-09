import React from "react";
import profilePic from "../../assets/images/profilePic.png";
import delet from "../../assets/images/delete.png";
import "./BoxNotification.scss";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
function BoxNotification({ notification }) {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;

  const [t] = useTranslation();
  const handleButtonClick = async () => {
    try {
      const res = await axios.get(
        `${URL}/api/mark_notification_as_read/${notification.id}`,

        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
    } catch (err) {
      toast.error(t("A network error occurred"));

      console.log(err);
    }
  };
  return (
    <>
      <div
        style={
          notification?.read_at
            ? { background: "#fff", borderRadius: "20px" }
            : { background: "#ccc", borderRadius: "20px" }
        }
        className="box__notification cursor-pointer mt-2 d-flex flex-column p-2"
        onClick={() => {
          handleButtonClick();
          if (notification?.data?.comment_id) {
            navigate(
              `/singleComment/${notification.data.post_id}/${notification?.data?.comment_id}`
            );
          } else if (notification?.data?.post_id) {
            navigate(`/singlePost/${notification.data.post_id}`);
          } else {
            navigate(`/profile/${notification.data.user.id}`);
          }
        }}
      >
        <div className="box__notification__title">
          <img
            src={
              notification?.data.profile?.image
                ? `${URL}/storage/${notification?.data.profile?.image}`
                : profilePic
            }
            alt="profile"
          />
          <div
            className="box__notification__title__info "
            style={{
              fontWeight: "700",
            }}
          >
            {/* <h4 className=" "> محمد عمرو </h4> */}
            {notification?.data?.msg}
          </div>
        </div>
        <span style={{ fontWeight: "400" }} className="w-100 d-block">
          {" "}
          {moment(notification.created_at).add(2, "hours").fromNow()}
          {/* أرسل إليك طلب صداقة */}
        </span>

        {/* <div className="d-flex align-items-center gap-2">
          <button
            type="submit"
            className="btn btn-dark font-weight-bold logbtn"
            style={{
              background: " linear-gradient(#00ACFF75, #BD00FF58)",
              borderRadius: "6px",
              fontSize: "13px",
              fontWeight: "600",
              letterSpacing: "1px",
              height: "25px",
              border: "none",
              marginTop: "5px",
              display: "flex",
              padding: "3px 29px",
              marginRight: "46px",
              color: "white",
            }}
          >
            موافقة
          </button>
          <img className="delete" src={delet} alt="profile" />
        </div> */}
      </div>
      {/* <hr /> */}
    </>
  );
}

export default BoxNotification;
