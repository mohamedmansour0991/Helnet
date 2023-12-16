import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Gallery, InteractionBar, VideoPlayer } from "../ui";
import { vertical3dots } from "../../assets/images/icons";
import { PFP } from "../../assets/images";
import "./singlePost.scss";
import PostTime from "../postTime/PostTime";

export default function SinglePost({ data }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  console.log(data);
  const storageLink = "";

  const user = {
    user_id: "1",
    username: "noobmaster69",
    first_name: "abdo",
    last_name: "alaa",
    user_img: "",
    posts: {},
  };

  const openProfile = () => {
    navigate("/");
  };

  return (
    <div className="singlePost" key={data.post_id}>
      <div className="singlePost__header">
        <div className="singlePost__header--user">
          <img
            className="singlePost__header--user__image"
            role="button"
            src={user?.user_img ? storageLink + e.user.profile.user_img : PFP}
            alt="PFP"
          />

          <div className="singlePost__header--user__data">
            <div className="userData">
              <p className="name" role="button" onClick={openProfile}>
                {user?.username}
              </p>
            </div>
            {/* <p className="postingTime">{moment(e?.created_at).fromNow(true)}</p> */}
          </div>
        </div>

        <div className="singlePost__header--aside">
          <img src={vertical3dots} alt="" role="button" />
        </div>
      </div>

      <div className="singlePost__body">
        {data.post_data.post_text && (
          <p className="singlePost__body--text">
            {t(data.post_data.post_text)}
          </p>
        )}

        {data.post_data?.post_images.length > 0 && (
          <Gallery data={data.post_data?.post_images} />
        )}

        {data.post_data?.post_video && (
          <VideoPlayer data={data.post_data.post_video} />
        )}

        {data.post_data.post_link && <p>{data.post_data.post_link}</p>}
        <PostTime/>
        <InteractionBar />
      </div>
    </div>
  );
}
