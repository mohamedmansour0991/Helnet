// App.js
import React, { useState, useRef, useEffect } from "react";
// import "./App.css";
import Video from "./Video";
// import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
import useElementOnScreen from "./useElementOnScreen";
import sea from "../../../assets/videos/sea.mp4";
import "./ReelsPage.scss";
import { x } from "/src/assets/images/icons";
import { useSelector } from "react-redux";

function ReelsPage() {
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const { token, deletePost_id, update } = useSelector((state) => state.auth);

  // const items = [
  //   { src: sea },
  //   { src: sea },
  //   { src: sea },
  //   { src: sea },
  //   { src: sea },
  //   { src: sea },
  //   { src: sea },
  //   { src: sea },
  //   { src: sea },
  //   { src: sea },
  //   { src: sea },
  // ];

  // const { token } = useSelector((state) => state.auth);
  // const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [items, setItems] = useState([]);
  const [item, setItem] = useState([]);
  const lastVideoRef = useRef(null);
  const navigate = useNavigate();
  const isLastVideoVisible = useElementOnScreen(
    { root: null, rootMargin: "0px", threshold: 0.3 },
    lastVideoRef
  );

  const params = useParams().id;
  const fetchData = async () => {
    if (params) {
      try {
        const response = await fetch(`${URL}/api/post/get_post/${params}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        console.log(data);
        setItem(data.original.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, [params]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${URL}/api/post/get_post_reel?page=${page}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        console.log("all", data);

        if (data.original.posts_type_reels.data.length === 0) {
          setHasMore(false);
        } else {
          if (params) {
            const filteredData = data.original.posts_type_reels.data.filter(
              (e) => e.id != params
            );
            setItems((prevItems) => [...prevItems, ...filteredData]);
          } else {
            setItems((prevItems) => [
              ...prevItems,
              ...data.posts_type_reels.data,
            ]);
          }
          setPage(page + 1);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (hasMore && isLastVideoVisible) {
      fetchData();
    }
  }, [page, hasMore, isLastVideoVisible]);

  return (
    <div className="reelsPage">
      <div
        className="cursor-pointer font-xl text-white d-md-block d-none"
        style={{
          position: "absolute",
          top: "35px",
          left: "35px",
          zIndex: "10000000",
          background: "#fff",
          padding: "10px",
          borderRadius: "50%",
        }}
        onClick={() => {
          navigate(-1);
        }}
      >
        <img
          src={x}
          className="cursor-pointer font-xl text-white"
          style={{ width: "15px" }}
        />
      </div>
      <div className="app_videos">
        {item && (
          <Video key={item?.id} videos={item} likes={34} url={item.src} />
        )}
        {items.length > 0 &&
          items.map((videos, index) => (
            <Video
              key={videos?.id}
              videos={videos}
              likes={34}
              url={videos.src}
            />
          ))}
        {/* Attach a ref to the last video */}
        <div ref={lastVideoRef}></div>
      </div>
    </div>
  );
}

export default ReelsPage;
