import React from "react";
import profilePic from "../../assets/images/profilePic.png";
import delet from "../../assets/images/delete.png";
import "./boxReelComponents.scss";
import Shape from "../../assets/images/Shape.png";

function BoxReelComponents({ video, index }) {
  console.log(video);
  return (
    <>
      <div className="box__reel__components">
        <div
          style={{ marginLeft: "7px", marginBottom: "5px" }}
          key={index}
          role="button"
          onClick={() => {
            handleVideoClick(video);
            openModal2();
          }}
        >
          <div
            className="singlePost__body--video"
            style={{ maxWidth: "100%", height: "auto" }}
          >
            <a href="#">
              {/* الشكل بيتكرر ف نفس المكان !!! */}
              <img
                className="profile-pic3"
                style={{ top: "11px", right: "-60%" }}
                src={Shape}
                alt=""
              />
            </a>
            <video className="" preload="true" src={video?.src} />
          </div>
        </div>
      </div>
    </>
  );
}

export default BoxReelComponents;
