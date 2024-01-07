import React, { useEffect, useState } from "react";
import { Aside, MainMenu, Navbar, Posts, SinglePost } from "../../components";
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
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import SingleComment from "../../components/ui/singleComment/SingleComment";
function ShowComment() {
  const { token,user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const post_id = useParams().post_id;
  const comment_id = useParams().comment_id;
  const { t } = useTranslation();
  const direction = localStorage.getItem("direction");
  const [item, setItem] = useState();
  const [comment, setComment] = useState();

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

  const getSinglePost = async () => {
    try {
      const response = await fetch(`${URL}/api/get_Post_Comment_Ntification`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify({ post_id, comment_id }),
      });
      const data = await response.json();
      console.log(data);
      setItem(data.data.post);
      setComment(data.data.comment);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getSinglePost();
  }, []);
  return (
    <div className="bg-body">
      <Navbar />
      <main className={`main ${direction}`}>
        <MainMenu mainMenuLabels={mainMenuLabels} />
        <div className="container no-scrollbar">
          <div className="grid gap-3">
            {item && (
              <>
                <SinglePost data={item} />
                <SingleComment user={user} data={comment} />
              </>
            )}
          </div>
        </div>
        <Aside />
      </main>
    </div>
  );
}

export default ShowComment;
