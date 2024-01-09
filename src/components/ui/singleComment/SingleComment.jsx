/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import { t } from "i18next";
import { useEffect, useRef, useState } from "react";
import CreateComment from "../createComment/CreateComment";
import { PFP } from "../../../assets/images";
import axios from "axios";
import { useSelector } from "react-redux";
import { vertical3dots } from "../../../assets/images/icons";
import DropdownComment from "../dropdown/DropdownComment";
import CreateSubComment from "../createSubComment/createSubComment";
import SingleSubComment from "../singleSubComment/singleSubComment";
import SubCommentSections from "../SubCommentSections/SubCommentSections";
import Input from "../input/Input";
import UpdateComment from "../../UpdateComment/UpdateComment";

export default function SingleComment({ data, user, parent_comment_id, post }) {
  const [isWriting, setIsWriting] = useState(false);
  const dateObject = new Date(data.updated_at);
  const normalTime = dateObject.toLocaleTimeString();
  const [likes, setLikes] = useState(data?.likes);
  const [isLiked, setIsLiked] = useState(data?.liked);
  const [edit, setEdit] = useState(false);
  // console.log(parent_comment_id);
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const { token } = useSelector((state) => state.auth);
  const [showAllReplay, setShowAllReplay] = useState(false);
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

  const commentRef = useRef();

  const handleClickOutside = (event) => {
    if (edit && !commentRef.current.contains(event.target)) {
      setEdit(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [edit]);

  const likeTheComment = async () => {
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
        { post_comment_id: data.id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(results.data.original.data.like.likes);

      // if (results.data.original.data !== undefined) {
      //   setLikes(JSON.parse(results.data.original.data.like.likes).length);
      // } else {
      //   setLikes(0);
      // }

      setIsLiked(!isLiked);
    } catch (error) {
      console.log("like error :" + error);
    }
  };

  return (
    // <div key={data.id} className={data.parent === null ? "" : "ms-20"}>
    <div className="d-flex w-full relative">
      <div key={data.id}>
        <div className="flex gap-2 mt-6">
          <Link to={"/profile/" + data.user_id}>
            {data?.user_image ? (
              <img
                className="rounded-full"
                src={`${URL}/storage/${data?.user_image}`}
                alt=""
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                // onClick={toggleDropdown}
              />
            ) : (
              <img
                className="rounded-full"
                src={user.image ? user.image : PFP}
                alt="PFP"
              />
            )}
          </Link>
          <div>
            <Link className="flex" to={"/profile/" + user.id}>
              <p className="text-lg capitalize">
                {data.first_name + " " + data.last_name}
              </p>
              {data.type && (
                <img className="w-4 h-4 m-2" src={data.type} alt="" />
              )}
            </Link>
            <div ref={commentRef}>
              {edit ? (
                <UpdateComment
                  value={data.text}
                  data={data}
                  setEdit={setEdit}
                />
              ) : (
                <>
                  <p>{data.text}</p>
                  {data.image && (
                    <img
                      src={`${URL}/storage/${data.image}`}
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
                onClick={likeTheComment}
              >
                {t("Like") + " ."}
              </button>
              <button
                className={`h-fit ${
                  isWriting ? "text-blue-600 underline" : ""
                }`}
                onClick={() => {
                  setIsWriting(!isWriting);
                  setShowAllReplay(true);
                }}
              >
                {t("Comment")}
              </button>
              {" ."}
              <p>{normalTime + " ."}</p>
              <p className="text-violet-700">{likes + " " + t("Likes")}</p>
            </div>
          </div>
        </div>
        {isWriting && <CreateSubComment post={data} isReplying={isWriting} />}

        {data.subcomment > 0 ? (
          <>
            {!showAllReplay && (
              <div className="mx-3" onClick={() => setShowAllReplay(true)}>
                عرض كل الردود ({data.subcomment})
              </div>
            )}
            {showAllReplay && (
              <SubCommentSections data={data} showAllReplay={showAllReplay} />
            )}
          </>
        ) : (
          <>
            {/* {showAllReplay && ( */}
            <SubCommentSections data={data} showAllReplay={showAllReplay} />
            {/* )} */}
          </>
        )}
        {/* {showAllReplay && (
          <SubCommentSections data={data} showAllReplay={showAllReplay} />
        )} */}

        {/* {subComments &&
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
        ))} */}
      </div>
      <div
        className="p-absolute"
        style={{ left: "0px", position: "absolute", marginTop: "10px" }}
      >
        <DropdownComment
          buttonData={<img src={vertical3dots} alt="" role="button" />}
          labels={["Edit", "Delete"]}
          post_id={data.id}
          post={data}
          setEdit={setEdit}
        />
      </div>
    </div>
  );
}
