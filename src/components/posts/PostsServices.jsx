import axios from "axios";
import SinglePost from "../singlePost/SinglePost";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getDataPostServicess } from "./getDataPost";

// import getDataPost from "./getDataPost";

export default function PostsServices({}) {
  const { token, deletePost_id, update } = useSelector((state) => state.auth);
  const { updateServicese, deleteServicese_id } = useSelector(
    (state) => state.store
  );

  const { items, hasMore, loadMore } = getDataPostServicess(
    1,
    token,
    deleteServicese_id,
    updateServicese,
    "post/get_services"
  );

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
