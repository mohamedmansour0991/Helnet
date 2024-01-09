import { t } from "i18next";
import { image, send, voice, close } from "../../../assets/images/icons";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { PFP } from "../../../assets/images";
import { useEffect, useState } from "react";
import { refrechcomment } from "../../../rtk/slices/authSlice";

export default function CreateComment({
  isReplying,
  post,
  // getAllComments = () => {},
  parent_comment_id,
}) {
  const [comment, setComment] = useState("");
  const [imageComment, setImageComment] = useState("");
  const [audioComment, setAudioComment] = useState("");

  const URL_API = import.meta.env.VITE_REACT_APP_API_KEY;
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const typeComment = async () => {
    const data = {
      post_id: post.id,
      comment: comment,
      comment_image: imageComment,
      // comment_audio: audioComment,
    };
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    try {
      const results = await axios.post(
        `${URL_API}/api/post/create_comment`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "multipart/form-data",
          },
        }
      );
      setComment("");
      setImageComment("");
      dispatch(refrechcomment(results.data.original.comment[0]));
      console.log(results);
    } catch (error) {
      console.log("Create comments error :" + error);
    }
  };

  const typeSubComment = async () => {
    const data = {
      post_id: post.id,
      parent_comment_id: parent_comment_id,
      comment: comment,
      comment_image: imageComment,
      comment_audio: audioComment,
    };
    console.log(data);

    try {
      const results = await axios.post(
        `${URL_API}/api/post/show_sub_comment`,
        data,
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
    // getAllComments();
  }, []);

  return (
    <div className="d-flex">
      {imageComment && (
        <div>
          <button
            onClick={() => setImageComment("")}
            style={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
            }}
          >
            <img src={close} alt="" />
          </button>
          <img
            className="p-1"
            src={URL.createObjectURL(imageComment)}
            style={{ width: "80px", height: "80px", marginBottom: "50px" }}
          />
        </div>
      )}
      <form
        className="flex w-full absolute bottom-0 justify-center items-center gap-3 bg-slate-200 py-2 px-3 rounded-full"
        onSubmit={(e) => {
          e.preventDefault();
          !isReplying ? typeComment() : typeSubComment();
        }}
      >
        <img className="w-7" src={user.image ? user.image : PFP} alt="" />
        <div className="w-full flex">
          <input
            placeholder={t("write a comment")}
            className="w-full outline-none bg-slate-200 placeholder-gray-400"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button className="h-fit">
            <img src={send} alt="" role="button" />
          </button>
        </div>
        <label className="h-fit" htmlFor="image">
          <img src={image} alt="" role="button" />
          <input
            accept=".png,.jpg"
            type="file"
            name=""
            id="image"
            hidden
            onChange={(e) => setImageComment(e.target.files[0])}
          />
        </label>
        {/* <button className="h-fit">
          <img src={voice} alt="" role="button" />
        </button> */}
      </form>
    </div>
  );
}
