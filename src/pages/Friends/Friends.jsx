import React, { useEffect } from "react";
import FriendBox from "../../components/friendBox/friendBox";
import "./Friends.scss";
import { useSelector } from "react-redux";
// import getDataPost from "../../components/posts/getDataPost";
import InfiniteScroll from "react-infinite-scroll-component";
import { FiltersBar } from "../../components/ui";
import { useTranslation } from "react-i18next";
import { getDataFriends } from "../../components/posts/getDataPost";
function Friends({ type }) {
  const { token } = useSelector((state) => state.auth);
  const { items, hasMore, loadMore } = getDataFriends(1, token, type);
  const { t } = useTranslation();
  console.log(items);
  return (
    <InfiniteScroll
      dataLength={items.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<div className="lds-default  m-auto d-flex"></div>}
    >
      <div className="2xl:w-4/5  rounded-xl w-full">
        <div className="friends">
          <FiltersBar
            data={[
              { name: t("Friends"), link: "friends" },
              { name: t("Suggests"), link: "suggests" },
              { name: t("Request"), link: "request" },
            ]}
          />
          <div className="friends__page">
            {items
              ? items.map((post) => (
                  <FriendBox key={post.post_id} data={post} />
                ))
              : ""}
          </div>
        </div>
      </div>
    </InfiniteScroll>
  );
}

export default Friends;
