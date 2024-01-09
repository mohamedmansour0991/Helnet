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
      <div className="container mx-auto">
        <div className="w-full flex flex-wrap md:flex-row flex-col-reverse md:flex-nowrap gap-6 pt-28">
          <ul className="bg-white rounded-xl w-full sm:max-w-xs">
            {videoes.length > 0 &&
              videoes.map((card) => (
                <li
                  className="flex flex-row py-3 justify-around items-center gap-4 p-4"
                  key={card.post_id}
                  onClick={() => navigate(`/singleVideo/${card.id}`)}
                >
                  <video
                    className="w-1/3 h-28 cursor-pointer object-cover rounded-lg"
                    src={`${URL}/storage/videos/${card.video}`}
                    alt=""
                  />
                  <div className="w-2/3 flex flex-col gap-2">
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

          <div className="flex-1">
            {video && (
              <div className="md:w-full bg-white p-4 rounded-xl">
                <SinglePost data={video} isFullScreen={true} />
                <Comments
                  post={video}
                  isCommentModelOpen={isCommentModelOpen}
                  setCommentsNumber={setCommentsNumber}
                  setComments={setComments}
                  comments={comments}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
