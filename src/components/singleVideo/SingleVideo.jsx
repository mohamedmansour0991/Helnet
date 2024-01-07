import "./SingleVideo.scss";
import Navbar from "../navbar/Navbar";
import SinglePost from "../singlePost/SinglePost";
import { youtubeCardData } from "/public/fakeData";
import { verified1 } from "../../assets/images/icons";
import { t } from "i18next";
import { useEffect, useState } from "react";
import { videosData } from "../../../public/fakeData";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CommentSection from "../commentSection/CommentSection";
import Comments from "../Comments/Comments";

export default function SingleVideo() {
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const { token } = useSelector((state) => state.auth);
  const [video, setVideo] = useState();
  const [likes, setLikes] = useState(video?.likes);
  const [isLiked, setIsLiked] = useState(video?.liked);
  const [commentsNumber, setCommentsNumber] = useState(video?.comments);
  const [isCommentModelOpen, setIsCommentModelOpen] = useState(false);
  const cardData = youtubeCardData;
  const params = useParams().id;
  const [comments, setComments] = useState([]);

  const [videoes, setVideoes] = useState([]);
  const getSingleVideo = async () => {
    try {
      const res = await axios.get(`${URL}/api/post/get_post_video/${params}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setVideoes(res.data.original.videos);
      setVideo(res.data.original.video[0]);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getSingleVideo();
  }, [params]);

  const [postIndex, setPostIndex] = useState(0);
  const direction = localStorage.getItem("direction");
  const navigate = useNavigate();
  return (
    <div dir={direction}>
      <Navbar />
      <div className="mx-auto flex flex-col-reverse lg:grid gap-6 grid-cols-12 pt-28 ">
        <ul className="bg-white rounded-xl p-3 col-span-12 lg:col-span-5 xl:col-span-4">
          {videoes.length > 0 &&
            videoes.map((card) => (
              <li
                className="flex flex-row py-3 justify-center items-center gap-4 xs"
                key={card.post_id}
                onClick={() => navigate(`/singleVideo/${card.id}`)}
              >
                <video
                  style={{ height: "100px" }}
                  className="w-1/2 cursor-pointer"
                  src={`${URL}/storage/videos/${card.video}`}
                  // onClick={() => {
                  //   setPostIndex(card.post_id - 1);
                  // }}
                  alt=""
                />
                <div className="flex flex-col gap-2">
                  <h3
                    className="cursor-pointer"
                    // onClick={() => {
                    //   setPostIndex(card.post_id - 1);
                    // }}
                  >
                    {card.text}
                  </h3>

                  <p className="flex items-center gap-2">
                    {card.user.first_name} {card.user.last_name}{" "}
                    {/* {card.user.last_name && (
                      // <span>
                      //   <img src={verified1} alt="" />
                      // </span>
                    )} */}
                  </p>

                  {/* <p>
                    {t(card.post_data.post_time) +
                      " " +
                      "." +
                      " " +
                      card.post_data.post_views +
                      " " +
                      t("view")}
                  </p> */}
                </div>
              </li>
            ))}
        </ul>

        <div className="col-span-12 lg:col-span-7 xl:col-span-8">
          {video && (
            <>
              <SinglePost data={video} />
              <Comments
                post={video}
                isCommentModelOpen={isCommentModelOpen}
                setCommentsNumber={setCommentsNumber}
                setComments={setComments}
                comments={comments}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
