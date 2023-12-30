/* eslint-disable react/prop-types */
import SingleComment from "../ui/singleComment/SingleComment";
import { CreateComment, Modal } from "../ui";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import SinglePost from "../singlePost/SinglePost";

export default function CommentSection({
  post,
  isCommentModelOpen,
  closeCommentModal,
  setCommentsNumber,
}) {
  const [comments, setComments] = useState([]);

  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const { user, token } = useSelector((state) => state.auth);

  const getAllComments = async () => {
    try {
      const results = await axios.post(
        `${URL}/api/post/comment`,
        { post_id: post.id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(results);
      // get all the comments
      setComments(results.data.original.comment.data);
      setCommentsNumber(results.data.original.comment.data.length);
    } catch (error) {
      console.log("get the comments error :" + error);
    }
  };

  useEffect(() => {
    getAllComments();
  }, []);

  return (
    <>
      <Modal isOpen={isCommentModelOpen} closeModal={closeCommentModal}>
        <SinglePost data={post} />

        <CreateComment post={post} getAllComments={getAllComments} />

        {comments &&
          comments.map((comment) => (
            <SingleComment
              post={post}
              key={comment.id}
              parent_comment_id={comment.id}
              user={user}
              data={comment}
            />
          ))}
      </Modal>
    </>
  );
}
