import axios from "axios";
import SinglePost from "../singlePost/SinglePost";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getDataPostProfile } from "./getDataPost";
import { refrechPosts } from "../../rtk/slices/authSlice";
import { useParams } from "react-router-dom";
// import getDataPost from "./getDataPost";

export default function PostsProfile({ profile }) {
  const { token, deletePost_id, update } = useSelector((state) => state.auth);
  const params = useParams().id;

  const { items, hasMore, loadMore } = getDataPostProfile(
    1,
    token,

    `post/get_post_user/${params}`
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
        {items
          ? items.map((post) => <SinglePost key={post.id} data={post} />)
          : ""}
      </div>
    </InfiniteScroll>
  );
}
