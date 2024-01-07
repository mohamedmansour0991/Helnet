import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { useTranslation } from "react-i18next";
import {
  getDataFriends,
  getDataSearch,
} from "../../components/posts/getDataPost";
import "./Search.scss";
import { useNavigate } from "react-router-dom";
function Search() {
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const [text, setText] = useState();
  const { items, setPage, setItems, hasMore } = getDataSearch(
    1,
    token,
    "search-general",
    text
  );
  const { t } = useTranslation();

  console.log(items);
  return (
    // <InfiniteScroll
    //   dataLength={items.length}
    //   next={loadMore}
    //   hasMore={hasMore}
    //   loader={<div className="lds-default  m-auto d-flex"></div>}
    // >
    <>
      <div className="2xl:w-4/5  rounded-xl w-full">
        <div className="bg-white search">
          <input
            type="text"
            name=""
            id=""
            placeholder="ابحث هنا "
            onKeyUp={(e) => {
              // if (e.key !== "Enter") return; // تحقق مما إذا كان المفتاح المضغوط هو Enter
              setItems([]);
              setPage(1);
              setText(e.target.value);
            }}
          />
          {items &&
            items.map((s, index) => (
              <div
                className="d-flex p-2 align-items-center gap-3 cursor-pointer"
                key={index}
                onClick={() => navigate(`/profile/${s.id}`)}
              >
                {s.profile.image && (
                  <img
                    src={`${URL}/storage/${s.profile.image}`}
                    alt=""
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                )}
                <h3 className="m-0 p-0">{s.first_name}</h3>
              </div>
            ))}
        </div>
      </div>
      {items.length > 0 && (
        <>
          {hasMore && (
            <button onClick={() => setPage((pre) => pre + 1)}>
              عرض المزيد
            </button>
          )}
        </>
      )}
    </>
    // </InfiniteScroll>
  );
}

export default Search;
