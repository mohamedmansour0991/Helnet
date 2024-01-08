import React from "react";
import { Avatar, Header } from "/src/assets/images/icons";
import "./friendBox.scss";
import delet from "../../assets/images/delete.png";
import AddFollow from "./AddFollow";
import Actions from "./Actions";
import { useNavigate } from "react-router-dom";

function FriendBox({ user, type, data }) {
  const navigate = useNavigate();
  // console.log(user, "user");
  return (
    <div className="friend__box">
      <div
        className="friend__box__images"
        onClick={() => navigate(`/profile/${user.user_name}`)}
      >
        {" "}
        <img className="friend__box__images__img" src={Header} alt="" />
        <img className="friend__box__images__avatar" src={Avatar} alt="" />
      </div>
      <div
        className="friend__box__content"
        onClick={() => navigate(`/profile/${user.user_name}`)}
      >
        <h3>
          {user.first_name} {user.last_name}
        </h3>
        <p>طبيب في مستشفى القصر العيني</p>
      </div>
      <div className="friend__box__buttons">
        {type == "suggest" ? (
          <Actions user={user} />
        ) : (
          <button
            type="submit"
            className="btn btn-dark font-weight-bold logbtn gap-2"
            style={{
              background: " linear-gradient(#00ACFF75, #BD00FF58)",
              borderRadius: "26px",
              fontSize: "12px",
              padding: "10",
              fontWeight: "600",
              letterSpacing: "1px",
              height: "40px",
              border: "none",
              marginTop: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 15px",
            }}
            onClick={() => navigate(`/profile/${user.user_name}`)}
          >
            {" "}
            عرض الصفحة
            {/* <img src={friends} alt="profile" /> */}
          </button>
        )}
        {/* <img className="delete" src={delet} alt="profile" /> */}
      </div>
    </div>
  );
}

export default FriendBox;
