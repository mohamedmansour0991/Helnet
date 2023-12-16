import { Gallery, InteractionBar, PostHeader, VideoPlayer } from "../ui";
import PostTime from "../postTime/PostTime";
import { t } from "i18next";
import { user } from "/public/fakeData";
import "./singlePost.scss";

export default function SinglePost({ data }) {
  return (
    <div className="singlePost" key={data.post_id}>
      <PostHeader user={user} />

      <div className="singlePost__body">
        {data.post_data.post_text && (
          <p className="singlePost__body--text">
            {t(data.post_data.post_text)}
          </p>
        )}

        {data.post_data?.post_images.length > 0 && (
          <Gallery data={data.post_data?.post_images} target={data.post_id} />
        )}

        {data.post_data?.post_video && (
          <VideoPlayer data={data.post_data.post_video} />
        )}

        {data.post_data.post_link && <p>{data.post_data.post_link}</p>}
        <PostTime />
        <InteractionBar />
      </div>
    </div>
  );
}
