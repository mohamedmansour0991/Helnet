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
  video,
  state,
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

  //upload text and photo and audio
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
            Accept: "multipart/form-data",
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



  //video
  const CHUNK_SIZE = 1 * 1024 * 1024; // 5MB
  let uploadedChunks = 1;
  const [progress, setProgress] = useState(0);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [videoPath, setVideoPath] = useState("");
  const [path, setPath] = useState("");
  // const handleProgress =
  const totalChunks = Math.ceil(video.size / CHUNK_SIZE);
  const generateRandomFileName = (length) => {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomFileName = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      randomFileName += charset.charAt(randomIndex);
    }
    return randomFileName;
  };
  const [randomFileName, setRandomFileName] = useState(
    generateRandomFileName(10)
  ); // Change the length as needed

  const handleGenerateRandomFileName = () => {
    const newRandomFileName = generateRandomFileName(10); // Change the length as needed
    setRandomFileName(newRandomFileName);
  };
  const handleClickVideo = async () => {
    console.log(video);
    await handleGenerateRandomFileName();
    const start = uploadedChunks * CHUNK_SIZE;
    const end = Math.min(start + CHUNK_SIZE, video.size);
    console.log(start);
    console.log(end);
    // const blob = video.slice(start, end);
    const blob = video.slice(start, end, "video/mp4");
    console.log(video.slice(start, end));
    if (video) {
      const formData = new FormData();
      console.log(blob);
      formData.append("video", blob);
      // formData.append("privacy", "public");
      // formData.append("category_id", 3);
      // formData.append("classification_id", 2);
      formData.append("random_title", randomFileName);
      formData.append("chunkIndex", uploadedChunks);
      formData.append("totalChunks", totalChunks);
      const fileId = Date.now(); // Generate a unique fileId
      dispatch(addUpload({ fileId }));
      axios
        .post(`${URL}/api/post/post-create-video`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
          onUploadProgress: (progressEvent) => {
            const progress = Math.round((uploadedChunks / totalChunks) * 100);
            setProgress(progress);

            if (progress === 100) {
              setUploadComplete(true);
            }
            dispatch(setPercentage({ fileId, progress }));
          },
        })
        .then(function (response) {
          console.log(response?.data?.original?.data?.path);
          if (response?.data?.original?.data.path) {
            dispatch(finishUpload({ fileId }));
            if (uploadedChunks < totalChunks) {
              handleUpload();
            } else {
              setVideoPath(response?.original?.data.path);
              setUploadComplete(true);
              console.log("Upload complete");
              setPath(response?.original?.data.path);

              data.append("video", response?.original?.data.path);
              // formData2.append("privacy", privacy);
              data.append("classification_id", 2);
              // if (text) {
              //   formData2.append("text", text);
              // }
              axios
                .post(`${URL}/api/post/create_post`, data, {
                  headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                  },
                })
                .then(function (response) {
                  dispatch(refrechPosts());

                  console.log(response);
                })
                .catch(function (error) {
                  console.log("Upload error:", error);
                });
            }
          } else {
            console.log("Upload failed:", response);
          }
          uploadedChunks++;
        })
        .catch(function (error) {
          console.log("Upload error:", error);
        });
    }
  };

  return (
    <>
      <button
        type={type}
        onClick={state ? handleClickVideo : handleClick}
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
    </>
  );
}
