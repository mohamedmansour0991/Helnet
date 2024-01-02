/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import { t } from "i18next";
import { useEffect, useState } from "react";
import CreateComment from "../createComment/CreateComment";
import { PFP } from "../../../assets/images";
import axios from "axios";
import { useSelector } from "react-redux";

export default function SingleComment({ data, user, parent_comment_id, post }) {
  const [isWriting, setIsWriting] = useState(false);
  const dateObject = new Date(data.updated_at);
  const normalTime = dateObject.toLocaleTimeString();
  const [subComments, setSubComments] = useState([]);
  const [likes, setLikes] = useState(data.likes);
  const [isLiked, setIsLiked] = useState(false);
  // console.log(data);

  // console.log(parent_comment_id);
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const { token } = useSelector((state) => state.auth);

  // const getAllSubComments = async () => {
  //   try {
  //     const results = await axios.post(
  //       `${URL}/api/post/show_sub_comment`,
  //       { post_id: post.id, parent_comment_id: parent_comment_id },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     if (results.status === 429) {
  //       // Implement backoff logic here
  //       console.log("Too Many Requests. Retrying after some time...");
  //       await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds
  //       getAllSubComments();
  //       return;
  //     }

  //     // get all the comments
  //     results.data.original.comment &&
  //       setSubComments(results.data.original.comment.data);
  //   } catch (error) {
  //     console.log("get the comments error :" + error);
  //   }
  // };

  // const getCommentLikes = async () => {
  //   try {
  //     const results = await axios.get(
  //       `${URL}/api/post/getwhoLikedComment/${data.id}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     if (results.status === 429) {
  //       // Implement backoff logic here
  //       console.log("Too Many Requests. Retrying after some time...");
  //       await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds
  //       getCommentLikes();
  //       return;
  //     }
  //     results.data.original.data &&
  //       console.log(results.data.original.data.length);

  //     if (results.data.original.data !== null) {
  //       // get all the likes
  //       setLikes(results.data.original.data.length);

  //       // check if the current user liking the post
  //       const isLikedByCurrentUser = results.data.original.data.some(
  //         (i) => i.id === user.id
  //       );
  //       setIsLiked(isLikedByCurrentUser);
  //     }
  //   } catch (error) {
  //     console.log("get the likes error :" + error);
  //   }
  // };

  const likeTheComment = async () => {
    if (isLiked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
    setIsLiked(!isLiked);
    try {
      const results = await axios.post(
        `${URL}/api/post/comment_like`,
        { post_comment_id: data.id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(results.data.original.data.like.likes);

      if (results.data.original.data !== undefined) {
        setLikes(JSON.parse(results.data.original.data.like.likes).length);
      } else {
        setLikes(0);
      }

      setIsLiked(!isLiked);
    } catch (error) {
      console.log("like error :" + error);
    }
  };

  useEffect(() => {
    // getAllSubComments();
    // getCommentLikes();
    // likeTheComment();
  }, []);

  return (
    <div key={data.id} className={data.parent === null ? "" : "ms-20"}>
      <div className="flex gap-2 mt-6">
        <Link to={"path" + user.id}>
          <img
            className="rounded-full"
            src={user.image ? user.image : PFP}
            alt="PFP"
          />
        </Link>
        <div>
          <Link className="flex" to={"path" + user.id}>
            <p className="text-lg capitalize">
              {user.first_name + " " + user.last_name}
            </p>
            {user.type && (
              <img className="w-4 h-4 m-2" src={user.type} alt="" />
            )}
          </Link>
          <p>{data.text + " " + data.id}</p>
          <div className="flex gap-1 text-stone-400 py-2">
            <button
              className={`h-fit ${isLiked && "text-blue-600"}`}
              onClick={likeTheComment}
            >
              {t("Like") + " ."}
            </button>
            <button className="h-fit" onClick={() => setIsWriting(!isWriting)}>
              {t("Comment") + " ."}
            </button>
            <p>{normalTime + " ."}</p>
            <p className="text-violet-700">{likes + " " + t("Likes")}</p>
          </div>
        </div>
      </div>

      {subComments &&
        subComments.map((subComment) => (
          <>
            <SingleComment
              key={subComment.id}
              id={subComment.id}
              user={user}
              data={subComment}
            />
            {isWriting && (
              <CreateComment
                post={data}
                // parent_comment_id={data.id}
                getAllComments={getAllSubComments}
                isReplying={isWriting}
                parent_comment_id={parent_comment_id}
              />
            )}
          </>
        ))}
      {isWriting && <CreateComment post={data} isReplying={isWriting} />}
    </div>
  );
}
