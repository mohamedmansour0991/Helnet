import React, { useEffect } from "react";
import CardStore from "../../../components/cardStore/CardStore";
import { Image1 } from "/src/assets/images/icons";
import { useDispatch, useSelector } from "react-redux";
import { getDataNews } from "../../../components/posts/getDataPost";
import InfiniteScroll from "react-infinite-scroll-component";
import { refrechPostsProductNews } from "../../../rtk/slices/productSlice";
import { useParams } from "react-router-dom";

function Used() {
  const products = [
    {
      name: "بيع",
      icon: Image1,
      desc: "كيبورد حمراء اللون متغبرة الألوان للألعاب والاستخدام اليومي السريع",
      rate: 745,
      star: 5,
      price: "70$",
      plus: "حصرى",
    },
    {
      name: "بيع",
      icon: Image1,
      desc: "كيبورد حمراء اللون متغبرة الألوان للألعاب والاستخدام اليومي السريع",
      rate: 745,
      star: 5,
      price: "70$",
      plus: "حصرى",
    },
    {
      name: "بيع",
      icon: Image1,
      desc: "كيبورد حمراء اللون متغبرة الألوان للألعاب والاستخدام اليومي السريع",
      rate: 745,
      star: 5,
      price: "70$",
      plus: "حصرى",
    },
    {
      name: "بيع",
      icon: Image1,
      desc: "كيبورد حمراء اللون متغبرة الألوان للألعاب والاستخدام اليومي السريع",
      rate: 745,
      star: 5,
      price: "70$",
      plus: "الاكثر مبيعا",
    },
    {
      name: "بيع",
      icon: Image1,
      desc: "كيبورد حمراء اللون متغبرة الألوان للألعاب والاستخدام اليومي السريع",
      rate: 745,
      star: 3,
      price: "70$",
    },
    {
      name: "مستعمل",
      icon: Image1,
      desc: "كيبورد حمراء اللون متغبرة الألوان للألعاب والاستخدام اليومي السريع",
      rate: 745,
      star: 5,
      price: "70$",
      plus: "الاكثر مبيعا",
    },
    {
      name: "عرض منتج",
      icon: Image1,
      desc: "كيبورد حمراء اللون متغبرة الألوان للألعاب والاستخدام اليومي السريع",
      rate: 745,
      star: 5,
      price: "70$",
    },
  ];
  const { token, deletePost_id, update } = useSelector((state) => state.auth);
  const { updateNews } = useSelector((state) => state.store);
  const { items, hasMore, loadMore } = getDataNews(
    1,
    token,
    deletePost_id,
    updateNews,
    "product/get-used-product"
  );
  const name = useParams().name;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("first");
    // if (updateNews.id) {
    dispatch(refrechPostsProductNews({}));
    // }
  }, [name]);
  return (
    <InfiniteScroll
      dataLength={items.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<div className="lds-default  m-auto d-flex"></div>}
    >
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
        {/* {items &&
          items.map((e, index) => <CardStore products={e} key={index} />)} */}
        {items &&
          items
            .filter((e) => e.old === 1)
            .map((filteredItem, index) => (
              <CardStore products={filteredItem} key={index} />
            ))}
      </div>
    </InfiniteScroll>
  );
}

export default Used;
