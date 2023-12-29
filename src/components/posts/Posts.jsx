import axios from "axios";
import SinglePost from "../singlePost/SinglePost";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import getDataPost from "./getDataPost";

export default function Posts({ data }) {
  const { user, token, deletePost_id, update } = useSelector(
    (state) => state.auth
  );
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const { items, hasMore, loadMore } = getDataPost(
    1,
    token,
    deletePost_id,
    update,
    "post/post"
  );
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(deletePost_id);
  }, [deletePost_id]);
  return (
    <div className="grid gap-3 w-100 d-flex align-items-center flex-column">
      <InfiniteScroll
        dataLength={items.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<div className="lds-default  m-auto d-flex"></div>}
      >
        {items
          ? items.map((post) => <SinglePost key={post.id} data={post} />)
          : ""}
      </InfiniteScroll>
    </div>
  );
}
