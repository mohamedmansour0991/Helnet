import {
  AudioPlayer,
  Gallery,
  InteractionBar,
  PostHeader,
  VideoPlayer,
} from "../ui";
import PostTime from "../postTime/PostTime";
import { user } from "/public/fakeData";
import { Star, whatsapp } from "../../assets/images/icons";
import Category from "../category/Category";
import { t } from "i18next";
import "./singlePost.scss";
import { useSelector } from "react-redux";

export default function SinglePost({ data, notPar, isFullScreen = false }) {
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const { user } = useSelector((state) => state.auth);
  return (
    <div
      className={`singlePost w-full mb-3 ${isFullScreen ? "max-w-none" : "max-w-4xl"
        }`}
      key={data.id}
    >
      <PostHeader user={data} notPar={notPar} />

      <div className="flex items-center justify-between">
        <div className="singlePost__body w-full">
          {/* handel the text post  */}
          {data?.text && (
            <p className="singlePost__body--text">{t(data?.text)}</p>
          )}
          {data?.details && (
            <p className="singlePost__body--text">
              {" "}
              التفاصيل : {t(data?.details)}
            </p>
          )}
          {data?.price && (
            <p className="singlePost__body--text"> السعر : {t(data?.price)}</p>
          )}
          {data?.contact && (
            <p className="singlePost__body--text">
              {" "}
              التواصل : {t(data?.contact)}
            </p>
          )}

          {/* handel the images post  */}
          {data.image?.length > 0 && (
            <Gallery data={data.image} target={data} />
          )}

          {/* handel the audio post  */}
          {data?.audio && (
            <AudioPlayer data={`${URL}/storage/${data.audio}`} user={data} />
          )}

          {/* handel the video post  */}
          {data?.video && <VideoPlayer data={data.video} user={user} />}

          {/* handel the link post  */}
          {data?.post_data?.post_link && <p>{data.post_data?.post_link}</p>}

          {/* handel the store post  */}
          {data?.category && <Category data={data} />}
          {data?.created_at && <PostTime createdAt={data.created_at} />}
          {!notPar && <InteractionBar data={data} />}
        </div>
      </div>
    </div>
  );
}
