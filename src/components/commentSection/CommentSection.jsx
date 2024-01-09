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
  comments,
  setComments,
  setCommentsNumber,
}) {
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const { user, token, updateComment, deleteComment_id } = useSelector(
    (state) => state.auth
  );
  console.log(post);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getAllComments = async () => {
    try {
      const results = await axios.post(
        `${URL}/api/post/comment?page=${page}`,
        { post_id: post.id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (page > 1) {
        setComments((prevItems) => [
          ...prevItems,
          ...results.data.original.data.data,
        ]);
      } else {
        setComments([...results.data.original.data.data]);
      }

      if (results.data.original.data.data.length === 0) {
        setHasMore(false);
      }
      // get all the comments

      // setComments(results.data.original.data.data);
      setCommentsNumber(results.data.original.data.data.length);
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
  }, [page]);
  useEffect(() => {
    // console.log(deleteComment_id, "ASd");
    const deleteComment_idHandle = (deleteComment_id) => {
      setComments((prevItems) =>
        prevItems.filter((post) => post.id !== deleteComment_id.post_id)
      );
    };

    deleteComment_idHandle(deleteComment_id);
  }, [deleteComment_id]);

  return (
    <>
      <Modal
        isOpen={isCommentModelOpen}
        closeModal={closeCommentModal}
        hasCloseButton
        closeButtonLeft
        childrenPadding="px- py-0 sm:py-3"
      >
        <SinglePost data={post} notPar={true} />

        {comments[0]?.id &&
          comments.map((comment) => (
            <SingleComment
              post={post}
              key={comment.id}
              parent_comment_id={comment.id}
              user={user}
              data={comment}
            />
          ))}

        {comments.length > 0 && (
          <>
            {hasMore && (
              <button onClick={() => setPage((pre) => pre + 1)}>
                عرض المزيد
              </button>
            )}
          </>
        )}
        <div
          className="sticky bottom-0"
          style={{
            background: "#fff",
            minHeight: "60px",
            borderTop: "1px solid",
          }}
        >
          <CreateComment post={post} />
        </div>
      </Modal>
    </>
  );
}
