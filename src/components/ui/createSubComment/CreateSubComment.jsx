import { t } from "i18next";
import { image, send, voice, close } from "../../../assets/images/icons";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { PFP } from "../../../assets/images";
import { useEffect, useState } from "react";
import {
  refrechSubcomment,
  refrechcomment,
} from "../../../rtk/slices/authSlice";

export default function CreateSubComment({
  value,
  post,
  setEdit,
  subComment,
  dataComment,
  // getAllComments = () => {},
}) {
  const [comment, setComment] = useState(value ? value : "");
  const [imageComment, setImageComment] = useState("");

  const URL_API = import.meta.env.VITE_REACT_APP_API_KEY;
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const typeSubComment = async () => {
    const data = {
      post_id: post.post_id,
      parent_comment_id: post.id,
      comment: comment,
      comment_image: imageComment,
      // comment_audio: audioComment,
    };
    console.log(data);
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    // console.log(`${URL_API}/api/post/create_sub_comment`);
    try {
      const results = await axios.post(
        `${URL_API}/api/post/create_sub_comment`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setComment("");
      setImageComment("");
      dispatch(refrechSubcomment(results.data.original.comment[0]));
      console.log(results, "res");
    } catch (error) {
      console.log("Create comments error :" + error);
    }
  };

  const typeCommentUpdate = async () => {
    const data = {
      post_id: dataComment.post_id,
      comment: comment,
      comment_image: imageComment,
      // comment_audio: audioComment,
    };
    console.log(data);
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    // console.log(`${URL_API}/api/post/create_sub_comment`);
    try {
      const results = await axios.post(
        `${URL_API}/api/post/update_comment/${dataComment.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setComment("");
      setEdit(false);
      // setImageComment("");
      if (subComment) {
        dispatch(refrechSubcomment(results.data.original.comment[0]));
      } else {
        dispatch(refrechcomment(results.data.original.comment[0]));
      }
      console.log(results, "res");
    } catch (error) {
      console.log("Create comments error :" + error);
    }
  };

  return (
    <div className="d-flex flex-column mx-5 mb-4">
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
      <div
        className="flex justify-center items-center gap-3 bg-slate-200 py-2 px-3 rounded-full"
        // style={{
        //   position: "absolute",
        //   bottom: "0px",
        //   width: "100%",
        // }}
      >
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
              if (value) {
                typeCommentUpdate();
              } else {
                typeSubComment();
              }
            }}
          >
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
      </div>
    </div>
  );
}
