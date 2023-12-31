import React from "react";
import VideoCard from "../../components/videoCard/VideoCard";
import "./Videos.scss";
import { Frame, Frame35, Frame36 } from "../../assets/images/icons";
import FiltersBar from "../../components/ui/filtersBar/FiltersBar";
import { useSelector } from "react-redux";
import { getDataPostVideos } from "../../components/posts/getDataPost";
import InfiniteScroll from "react-infinite-scroll-component";
function Videos() {
  const { token, deletePost_id, update } = useSelector((state) => state.auth);

  const { items, hasMore, loadMore } = getDataPostVideos(
    1,
    token,
    deletePost_id,
    update,
    "post/get_post_video"
  );
  const videos = [
    {
      src: Frame36,
      title: "🔥🔥 كشف مصدر مسؤول بالأهلي حقيقة وجود اتصالات مع الاتحاد",
      time: "منذ ساعات",
      watch: "132,757 مشاهدة",
      img: Frame,
    },
    {
      src: Frame35,
      title: "🔥🔥 كشف مصدر مسؤول بالأهلي حقيقة وجود اتصالات مع الاتحاد",
      time: "منذ ساعات",
      watch: "132,757 مشاهدة",
      img: Frame,
    },
    {
      src: Frame36,
      title: "🔥🔥 كشف مصدر مسؤول بالأهلي حقيقة وجود اتصالات مع الاتحاد",
      time: "منذ ساعات",
      watch: "132,757 مشاهدة",
      img: Frame,
    },
    {
      src: Frame36,
      title: "🔥🔥 كشف مصدر مسؤول بالأهلي حقيقة وجود اتصالات مع الاتحاد",
      time: "منذ ساعات",
      watch: "132,757 مشاهدة",
      img: Frame,
    },
    {
      src: Frame36,
      title: "🔥🔥 كشف مصدر مسؤول بالأهلي حقيقة وجود اتصالات مع الاتحاد",
      time: "منذ ساعات",
      watch: "132,757 مشاهدة",
      img: Frame,
    },
    {
      src: Frame36,
      title: "🔥🔥 كشف مصدر مسؤول بالأهلي حقيقة وجود اتصالات مع الاتحاد",
      time: "منذ ساعات",
      watch: "132,757 مشاهدة",
      img: Frame,
    },
    {
      src: Frame36,
      title: "🔥🔥 كشف مصدر مسؤول بالأهلي حقيقة وجود اتصالات مع الاتحاد",
      time: "منذ ساعات",
      watch: "132,757 مشاهدة",
      img: Frame,
    },
    {
      src: Frame36,
      title: "🔥🔥 كشف مصدر مسؤول بالأهلي حقيقة وجود اتصالات مع الاتحاد",
      time: "منذ ساعات",
      watch: "132,757 مشاهدة",
      img: Frame,
    },
    {
      src: Frame36,
      title: "🔥🔥 كشف مصدر مسؤول بالأهلي حقيقة وجود اتصالات مع الاتحاد",
      time: "منذ ساعات",
      watch: "132,757 مشاهدة",
      img: Frame,
    },
    {
      src: Frame36,
      title: "🔥🔥 كشف مصدر مسؤول بالأهلي حقيقة وجود اتصالات مع الاتحاد",
      time: "منذ ساعات",
      watch: "132,757 مشاهدة",
      img: Frame,
    },
    {
      src: Frame36,
      title: "🔥🔥 كشف مصدر مسؤول بالأهلي حقيقة وجود اتصالات مع الاتحاد",
      time: "منذ ساعات",
      watch: "132,757 مشاهدة",
      img: Frame,
    },
  ];
  return (
    <div className="videosPage__wrapper">
      <FiltersBar />
      <InfiniteScroll
        dataLength={items.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<div className="lds-default  m-auto d-flex"></div>}
      >
        <div className="videos__page">
          <VideoCard videos={videos} />
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default Videos;
