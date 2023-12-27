import { useDispatch, useSelector } from "react-redux";
import "./Button.scss";
import { useState } from "react";
import {
  addUpload,
  finishUpload,
  setPercentage,
} from "../../../rtk/slices/progressSlice";
import { refrechPosts } from "../../../rtk/slices/authSlice";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import axios from "axios";

const backgroundColor = localStorage.getItem("color");
export default function ButtonShare({
  children,
  data,
  type = "",
  border = "",
  className = "",
  color = "#fff",
  onclick,
  backgroundColor = null,
  onClick = () => {},
  ...rest
}) {
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  //upload text
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const handleClick = async (e) => {
    console.log(data);

    const fileId = Date.now();
    dispatch(addUpload({ fileId }));
    try {
      const res = await axios.post(
        `${URL}/api/post/create_post`,
        data,

        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            );
            dispatch(setPercentage({ fileId, progress }));
          },
        }
      );
      console.log(res);

      if (res.data) {
        dispatch(refrechPosts());
        dispatch(finishUpload({ fileId }));
        toast.success("تم نشر المنشور");
      }
    } catch (err) {
      dispatch(finishUpload({ fileId }));
      toast.error(t("A network error occurred"));

      console.log(err);
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      style={{
        backgroundColor: backgroundColor,
        color: color,
        borderWidth: border,
      }}
      className={`normalButton ${className} ${
        backgroundColor === null && "gradient"
      }`}
      {...rest}
    >
      <div className={`children ${className}`}>{children}</div>
    </button>
  );
}
