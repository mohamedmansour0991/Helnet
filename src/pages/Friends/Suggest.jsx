import React, { useEffect } from "react";
import FriendBox from "../../components/friendBox/friendBox";
import "./Friends.scss";
import { useSelector } from "react-redux";
// import getDataPost from "../../components/posts/getDataPost";
import InfiniteScroll from "react-infinite-scroll-component";
import { FiltersBar } from "../../components/ui";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import {
  getDataFriends,
  getDataSuggest,
} from "../../components/posts/getDataPost";
function Suggest({ type }) {
  const { user, token, refrech } = useSelector((state) => state.auth);
  // const { items, hasMore, loadMore } = getDataPost(1, token, refrech, type);
  const name = useParams().name;
  const { items, hasMore, loadMore } = getDataSuggest(1, token, type);
  // useEffect(() => {}, [name]);
  console.log(type);
  const { t } = useTranslation();
  console.log(items);
  return (
    <InfiniteScroll
      dataLength={items.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<div className="lds-default  m-auto d-flex"></div>}
    >
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
                <FriendBox key={post.post_id} user={post} type={"suggest"} />
              ))
            : ""}
        </div>
      </div>
    </InfiniteScroll>
  );
}

export default Suggest;
