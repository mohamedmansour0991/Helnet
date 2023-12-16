import React from "react";
import VideoCard from "../../components/videoCard/VideoCard";
import "./Videos.scss";
import { Frame, Frame35, Frame36 } from "../../assets/images/icons";
import FiltersBar from "../../components/ui/filtersBar/FiltersBar";
function Videos() {
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
      <div className="videos__page">
        <VideoCard videos={videos} />
      </div>
    </div>
  );
}

export default Videos;
