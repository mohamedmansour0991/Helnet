import home from "../../assets/images/home.png";
import graduation from "../../assets/images/graduation.png";
import freelance from "../../assets/images/freelance.png";
import cake from "../../assets/images/cake.png";
import link from "../../assets/images/link.png";
import Rectangle from "../../assets/images/Rectangle.png";
import { Dialog, Transition } from "@headlessui/react";
import { useState } from "react";
import sea from "../../assets/videos/sea.mp4";
import { Fragment } from "react";
import xicon from "../../assets/images/xicon.png";
import Left from "../../assets/images/Left.png";
import right from "../../assets/images/right.png";
import BoxReelComponents from "../../components/boxReelComponents/boxReelComponents";
import FiltersBar from "../../components/ui/filtersBar/FiltersBar";
import { useSelector } from "react-redux";
import { getDataPostReels } from "../../components/posts/getDataPost";
import InfiniteScroll from "react-infinite-scroll-component";

const Reels = () => {
  const { token, deletePost_id, update } = useSelector((state) => state.auth);

  const { items, hasMore, loadMore } = getDataPostReels(
    1,
    token,
    deletePost_id,
    update,
    "post/get_post_reel"
  );

  // مراجعة سطر 225

  return (
    <>
      <div className="grid gap-3">
        <div className="bg-white rounded-xl">
          {/* <FiltersBar /> */}
          <InfiniteScroll
            dataLength={items.length}
            next={loadMore}
            hasMore={hasMore}
            loader={<div className="lds-default  m-auto d-flex"></div>}
          >
            <div className="reelsComponents gap-4">
              {/* sidebar */}
              {items.map((video, index) => (
                <BoxReelComponents video={video} index={index} />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};

export default Reels;
