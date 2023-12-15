import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  PFP,
  testImage1,
  testImage2,
  testImage3,
  testImage4,
  testImage5,
  testImage6,
} from "../../assets/images";
import { vertical3dots } from "../../assets/images/icons";
import { testVideo } from "../../assets/videos";
import { Gallery, VideoPlayer } from "../ui";
import "./singlePost.scss";

export default function SinglePost(
  {
    //  post
  }
) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const storageLink = "";
  const user = {
    user_id: "1",
    username: "noobmaster69",
    first_name: "abdo",
    last_name: "alaa",
    user_img: "",
    posts: {},
  };

  const post = {
    post_id: "1",
    post_data: {
      post_time: "3am",
      post_text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat erat blandit hendrerit aliquam. Maecenas.",
      post_images: [
        testImage1,
        testImage2,
        testImage3,
        testImage4,
        testImage5,
        testImage6,
      ],
      post_video: testVideo,
      post_link: "https://www.google.com/",
    },
    post_user: {
      user_id: "1",
    },
    post_likes: [], //users IDs
  };

  const openProfile = () => {
    navigate("/");
  };

  const openMenu = () => {};

  return (
    <div className="singlePost" key={post.post_id}>
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
          <img src={vertical3dots} alt="" role="button" onClick={openMenu} />
        </div>
      </div>

      <div className="singlePost__body">
        {post.post_data.post_text && (
          <p className="singlePost__body--text">
            {t(post.post_data.post_text)}
          </p>
        )}

        {post.post_data?.post_images.length > 0 && (
          <Gallery data={post.post_data?.post_images} />
        )}

        {post.post_data?.post_video && (
          <VideoPlayer data={post.post_data.post_video} />
        )}

        {post.post_data.post_link && (
          <p className="singlePost__body--link">{post.post_data.post_link}</p>
        )}
      </div>
    </div>
  );
}
