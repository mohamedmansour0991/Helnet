/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { like, comment, share } from "../../../assets/images/icons";
import ShareModel from "../../shareModel/ShareModel";
import CreateComment from "../createComment/CreateComment";
import CommentSection from "../../commentSection/CommentSection";
import { useSelector } from "react-redux";
import axios from "axios";

export default function InteractionBar({ data }) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isShareModelOpen, setIsShareModelOpen] = useState(false);

  function closeShareModal() {
    setIsShareModelOpen(false);
  }

  function openShareModal() {
    setIsShareModelOpen(true);
  }

  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const { user, token } = useSelector((state) => state.auth);

  const getAllLikes = async () => {
    try {
      const results = await axios.get(`${URL}/api/getwhoLikedPost/${data.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (results.data.original.data !== null) {
        // get all the likes
        setLikes(results.data.original.data.data.length);

        // check if the current user liking the post
        const isLikedByCurrentUser = results.data.original.data.data.some(
          (i) => i.id === user.id
        );
        setIsLiked(isLikedByCurrentUser);
      }
    } catch (error) {
      console.log("get the likes error :" + error);
    }
  };

  const likeThePost = async () => {
    console.log("first");
    if (isLiked) {
      setLikes((prev) => prev - 1);
    } else {
      setLikes((prev) => prev + 1);
    }
    setIsLiked(!isLiked);
    try {
      const results = await axios.post(
        `${URL}/api/postLike`,
        { post_id: data.id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(results);

      if (results.data.original.data.like !== undefined) {
        console.log(results.data.original.data.like.Likes.length);
        setLikes(JSON.parse(results.data.original.data.like.Likes).length);
      } else {
        setLikes(0);
      }

      setIsLiked(!isLiked);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllLikes();
    // likeThePost();
  }, []);

  const comments = "12";

  return (
    <>
      <div className="flex gap-4 mt-8 ps-6">
        <button
          className="relative"
          onClick={() => {
            // console.log(data.id);
            likeThePost();
          }}
        >
          <img
            style={isLiked ? { background: "red" } : { background: "#fff" }}
            src={isLiked ? like : like}
            role="button"
            alt=""
          />

          <span
            className={`absolute top-2 text-xs left-0 translate-x-3 border-4 border-white rounded-full bg-violet-700 text-white ${
              likes > 9 ? "px-2" : "px-1"
            }`}
          >
            {likes > 0 && (likes > 99 ? "+99" : likes)}
          </span>
        </button>
        <button className="relative" onClick={() => {}}>
          <span
            className={`absolute top-2 text-xs left-0 translate-x-3 border-4 border-white rounded-full bg-violet-700 text-white ${
              comments > 9 ? "px-2" : "px-1"
            }`}
          >
            {comments > 0 && (comments > 99 ? "+99" : comments)}
          </span>
          <img src={comment} role="button" alt="" />
        </button>
        <button onClick={openShareModal}>
          <img src={share} role="button" alt="" />
        </button>
      </div>

      <CommentSection />

      <ShareModel
        isShareOpen={isShareModelOpen}
        closeShareModal={closeShareModal}
      />
    </>
  );
}
