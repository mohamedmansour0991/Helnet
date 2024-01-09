import React from "react";
import profilePic from "../../assets/images/profilePic.png";
import delet from "../../assets/images/delete.png";
import "./boxReelComponents.scss";
import Shape from "../../assets/images/Shape.png";
import { useNavigate } from "react-router-dom";

function BoxReelComponents({ video, index }) {
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;

  const navigate = useNavigate();
  // console.log(video);
  return (
    <>
      <div
        key={index}
        className="relative "
        role="button"
        onClick={() => {
          navigate(`/reels-page/${video.id}`);
        }}
      >
        <img
          className="profile-pic3"
          style={{ top: "11px", right: "-60%" }}
          src={Shape}
          alt=""
        />
        <video
          className="h-48  w-full object-cover"
          preload="true"
          src={`${URL}/storage/videos/${video?.video}`}
        />
      </div>
    </>
  );
}

export default BoxReelComponents;
