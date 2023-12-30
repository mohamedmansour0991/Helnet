import { t } from "i18next";
import { image, send, voice } from "../../../assets/images/icons";
import { useSelector } from "react-redux";
import axios from "axios";
import { PFP } from "../../../assets/images";
import { useEffect, useState } from "react";

export default function CreateComment({
  isReplying,
  post,
  getAllComments = () => {},
  parent_comment_id,
}) {
  const [comment, setComment] = useState("");
  const [imageComment, setImageComment] = useState("");
  const [audioComment, setAudioComment] = useState("");

  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const { user, token } = useSelector((state) => state.auth);

  const typeComment = async () => {
    try {
      const results = await axios.post(
        `${URL}/api/post/create_comment`,
        {
          post_id: post.id,
          comment: comment,
          comment_image: imageComment,
          comment_audio: audioComment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(results);
    } catch (error) {
      console.log("Create comments error :" + error);
    }
  };

  const typeSubComment = async () => {
    try {
      const results = await axios.post(
        `${URL}/api/post/show_sub_comment`,
        {
          post_id: post.id,
          parent_comment_id: parent_comment_id,
          comment: comment,
          comment_image: imageComment,
          comment_audio: audioComment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(results);
    } catch (error) {
      console.log("Create comments error :" + error);
    }
  };

  useEffect(() => {
    getAllComments();
  }, [comment]);

  return (
    <div className="flex justify-center items-center gap-3 bg-slate-200 py-2 px-3 mb-10 rounded-full">
      <img className="w-7" src={user.image ? user.image : PFP} alt="" />
      <div className="w-full flex">
        <input
          placeholder={t("write a comment")}
          className="w-full outline-none bg-slate-200 placeholder-gray-400"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="h-fit"
          onClick={() => {
            !isReplying ? typeComment() : typeSubComment();
          }}
        >
          <img src={send} alt="" role="button" />
        </button>
      </div>
      <button className="h-fit">
        <img src={image} alt="" role="button" />
      </button>
      <button className="h-fit">
        <img src={voice} alt="" role="button" />
      </button>
    </div>
  );
}
