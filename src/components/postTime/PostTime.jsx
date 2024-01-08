import React from "react";
import "./PostTime.scss";
function PostTime({ createdAt }) {
  // console.log(createdAt);
  
  const dateObject = new Date(createdAt);
  const formattedDate = new Intl.DateTimeFormat("ar", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })?.format(dateObject);
  return (
    <div className="post__Time">
      {/* في الساعة 10:45 صباحا · 1/12/2023 · المنشور من الجوال */}
      {formattedDate}
    </div>
  );
}

export default PostTime;
