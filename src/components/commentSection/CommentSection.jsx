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
  const { user, token, updateComment } = useSelector((state) => state.auth);

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
  const updatePost = (postId, updatedData) => {
    setComments((prevItems) =>
      prevItems.map((post) =>
        post.id === postId ? { ...post, ...updatedData } : post
      )
    );
  };

  const addOrUpdatePost = (update) => {
    const existingPostIndex = comments.findIndex(
      (post) => post.id === updateComment.id
    );

    if (existingPostIndex !== -1) {
      // Post found, update it
      updatePost(updateComment.id, updateComment);
    } else {
      // Post not found, add it to the beginning of the array
      setComments((prevItems) => [updateComment, ...prevItems]);
    }
  };

  useEffect(() => {
    addOrUpdatePost(updateComment);
  }, [updateComment]);

  useEffect(() => {
    getAllComments();
  }, []);

  return (
    <>
      <Modal isOpen={isCommentModelOpen} closeModal={closeCommentModal}>
        <SinglePost data={post} />

        <CreateComment post={post} />

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
