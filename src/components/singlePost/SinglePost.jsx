import {
  AudioPlayer,
  Gallery,
  InteractionBar,
  PostHeader,
  VideoPlayer,
} from "../ui";
import PostTime from "../postTime/PostTime";
import { user } from "/public/fakeData";
import Category from "../category/Category";
import { t } from "i18next";
import "./singlePost.scss";

export default function SinglePost({ data }) {
  return (
    <div className="singlePost mb-3" key={data.post_id}>
      <PostHeader user={data} />

      <div className="singlePost__body">
        {/* handel the text post  */}
        {data?.text && (
          <p className="singlePost__body--text">{t(data?.text)}</p>
        )}

        {/* handel the images post  */}
        {data.post_classification?.name == "image" && (
          <Gallery data={data.image} target={data} />
        )}

        {/* handel the audio post  */}
        {data?.post_data?.post_audio?.length > 0 && (
          <AudioPlayer data={data.post_data?.post_audio} />
        )}

        {/* handel the video post  */}
        {data?.video && (
          <VideoPlayer data={data.video} user={user} />
        )}

        {/* handel the link post  */}
        {data?.post_data?.post_link && <p>{data.post_data?.post_link}</p>}

        {/* handel the store post  */}
        {data?.category && <Category data={data} />}

        <PostTime />

        <InteractionBar />
      </div>
    </div>
  );
}
