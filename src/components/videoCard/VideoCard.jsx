import React from "react";
import "./VideoCard.scss";
import { useNavigate } from "react-router-dom";
function VideoCard({ videos }) {
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;

  const navigate = useNavigate();
  console.log(videos, "videos");
  return (
    <>
      {videos.map((p, index) => (
        <div
          className="videos__page__card cursor-pointer"
          key={index}
          onClick={() => navigate(`/singleVideo/${p.id}`)}
        >
          <video
            src={`${URL}/storage/videos/${p.video}`}
            preload="true"
            className="mb-2 w-100"
          />
          {/* {p.plus && <span className="card__store__plus">{p.plus}</span>} */}
          <div className="card__store__content">
            <div className="videos__page__card__rate">
              {/* <ul>
            {Array(p.star)
              .fill(null)
              .map((s) => (
                <li>
                  <img src={Star} />
                </li>
              ))}
          </ul> */}
              <img
                src={`${URL}/storage/${p?.user?.profile?.image}`}
                preload="true"
                className="mb-2"
              />

              <span className="fs-30">
                ({p?.user?.first_name} {p?.user?.last_name})
              </span>
            </div>
            {/* <div className="card__store__dec">{p.desc}</div> */}
            <div className="d-flex justify-content-between">
              {/* <div className="card__store__time">
                {p.user.first_name} {p.user.last_name}
              </div> */}
              <div className="card__store__watch">{p.watch}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default VideoCard;
