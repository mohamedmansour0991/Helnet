import { t } from "i18next";
import { useParams } from "react-router-dom";
import { Aside, MainMenu, Navbar, Posts } from "/src/components";
import { CreatePost, FiltersBar } from "../../components/ui";
import {
  asking,
  easy,
  buy,
  news,
  personal,
  easytouse,
} from "../../assets/images/icons";
import { storeData } from "../../../public/fakeData";
import Buy from "./buy/Buy";
import "./Store.scss";
import { useEffect, useState } from "react";
import StoreForm from "../../components/form/Form";
import Used from "./Used/Used";
import { useDispatch, useSelector } from "react-redux";
import { refrechPostsProductNews } from "../../rtk/slices/productSlice";
import PostsServices from "../../components/posts/PostsServices";

function Store() {
  const direction = localStorage.getItem("direction");
  const { updateNews } = useSelector((state) => state.store);

  const name = useParams().name;
  const dispatch = useDispatch();

  const mainMenuLabels = [
    { name: t("new"), icon: buy, link: "store/new" },
    { name: t("used"), icon: easy, link: "store/used" },
    { name: t("services"), icon: asking, link: "store/services" },
  ];

  const [newList, setNewList] = useState([]);
  const [usedList, setUsedList] = useState([]);
  const [servicesList, setServicesList] = useState([]);

  useEffect(() => {
    const filteredNewList = storeData.filter((item) => item.category === "new");
    setNewList(filteredNewList);

    const filteredUsedList = storeData.filter(
      (item) => item.category === "used"
    );
    setUsedList(filteredUsedList);

    const filteredServicesList = storeData.filter(
      (item) => item.category === "service"
    );
    setServicesList(filteredServicesList);
  }, []);

  useEffect(() => {
    console.log("first");
    // if (updateNews.id) {
    dispatch(refrechPostsProductNews({}));
    // }
  }, [name]);

  return (
    <div className="bg-body">
      <Navbar />
      <main className={`main ${direction}`}>
        <MainMenu mainMenuLabels={mainMenuLabels} />
        <div className="container no-scrollbar">
          <div className="m-auto rounded-xl w-fit">
            <CreatePost
              isNormalPost={false}
              placeholder={"Request a service or offer your product now"}
              buttons={[
                {
                  value: "Show the new product",
                  title: "Show the new product",
                  image: news,
                },
                {
                  value: "View a used product",
                  title: "View a used product",
                  image: easytouse,
                },
                {
                  value: "Service Request",
                  title: "Service Request",
                  image: personal,
                },
              ]}
            />

            {name === "services" ? (
              <>
                {/* <FiltersBar /> */}
                <PostsServices data={servicesList} />
              </>
            ) : name == "used" ? (
              <>
                {/* <FiltersBar /> */}
                <Used />
              </>
            ) : (
              <div className="bg-white m-auto w-fit p-4 mt-4 rounded-2xl">
                <Buy />
              </div>
            )}
          </div>
        </div>
        <Aside />
      </main>
    </div>
  );
}

export default Store;
