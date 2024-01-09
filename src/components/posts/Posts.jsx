import axios from "axios";
import SinglePost from "../singlePost/SinglePost";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getDataPost } from "./getDataPost";
import { refrechPosts } from "../../rtk/slices/authSlice";
// import getDataPost from "./getDataPost";

export default function Posts({}) {
  const { token, deletePost_id, update } = useSelector((state) => state.auth);

  const { items, hasMore, loadMore } = getDataPost(
    1,
    token,
    deletePost_id,
    update,
    "post/post"
  );
  const dispatch = useDispatch();

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<div className="lds-default  m-auto d-flex"></div>}
    >
      <div className="flex items-center flex-col gap-3 w-full">
        {items[0]?.id
          ? items.map((post) => <SinglePost key={post.id} data={post} />)
          : ""}
      </div>
    </InfiniteScroll>
  );
}
