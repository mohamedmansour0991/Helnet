/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import { t } from "i18next";
import { useEffect, useState } from "react";
import { PFP } from "../../../assets/images";
import axios from "axios";
import { useSelector } from "react-redux";
import DropdownComment from "../dropdown/DropdownComment";
import { vertical3dots } from "../../../assets/images/icons";
import UpdateComment from "../../UpdateComment/UpdateComment";

export default function SingleSubComment({ subComments }) {
  const dateObject = new Date(subComments?.updated_at);
  const normalTime = dateObject.toLocaleTimeString();
  // const [subComments, setSubComments] = useState([]);
  const [likes, setLikes] = useState(subComments?.likes);
  const [isLiked, setIsLiked] = useState(subComments.liked);
  console.log(subComments, subComments.id, subComments.liked);
  const [edit, setEdit] = useState();

  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const { token } = useSelector((state) => state.auth);

  const likeTheSubComment = async () => {
    console.log(likes);
    setTimeout(() => {
      if (isLiked) {
        setLikes((prev) => prev - 1);
      } else {
        setLikes((prev) => prev + 1);
      }
      setIsLiked(!isLiked);
    }, 200);
    try {
      const results = await axios.post(
        `${URL}/api/post/comment_like`,
        { post_comment_id: subComments.id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(results);

      if (results.data.original.data !== undefined) {
        // setLikes(JSON.parse(results.data.original.data.like.likes).length);
      } else {
        // setLikes(0);
      }
    } catch (error) {
      console.log("like error :" + error);
    }
  };

  return (
    <div className="d-flex" style={{ position: "relative" }}>
      <div key={subComments.id} className={subComments.id ? "ms-20" : ""}>
        <div className="flex gap-2 mt-6">
          <Link to={"/profile/" + subComments.user_id}>
            <img
              className="rounded-full"
              style={{ width: "40px", height: "40px" }}
              src={
                subComments.user_image
                  ? `${URL}/storage/${subComments.user_image}`
                  : PFP
              }
              alt="PFP"
            />
          </Link>
          <div>
            <Link className="flex" to={"/profile/" + subComments.user_id}>
              <p className="text-lg capitalize">
                {subComments.first_name + " " + subComments.last_name}
              </p>
              {subComments.type && (
                <img className="w-4 h-4 m-2" src={subComments.type} alt="" />
              )}
            </Link>
            <div>
              {edit ? (
                <UpdateComment
                  value={subComments.text}
                  data={subComments}
                  setEdit={setEdit}
                  subComment={true}
                />
              ) : (
                <>
                  <p>{subComments.text}</p>
                  {subComments.image && (
                    <img
                      src={`${URL}/storage/${subComments.image}`}
                      alt=""
                      style={{ width: "150px", height: "150px" }}
                    />
                  )}
                </>
              )}
            </div>
            <div className="flex gap-1 text-stone-400 py-2">
              <button
                className={`h-fit ${isLiked && "text-blue-600"}`}
                // onClick={likeTheComment}
                onClick={() => likeTheSubComment()}
              >
                {t("Like") + " ."}
              </button>
              {/* <button
              className="h-fit"
              // onClick={() => setIsWriting(!isWriting)}
            >
              {t("Comment") + " ."}
            </button> */}
              <p>{normalTime + " ."}</p>
              <p className="text-violet-700">{likes + " " + t("Likes")}</p>
            </div>
          </div>
        </div>
        {/* {isWriting && <CreateComment post={subComments} isReplying={isWriting} />} */}
      </div>
      <div
        className="p-absolute"
        style={{ left: "0px", position: "absolute", marginTop: "10px" }}
      >
        <DropdownComment
          buttonData={<img src={vertical3dots} alt="" role="button" />}
          labels={["Edit", "Delete"]}
          post_id={subComments.id}
          post={subComments}
          subComment={true}
          setEdit={setEdit}
        />
      </div>
    </div>
  );
}
