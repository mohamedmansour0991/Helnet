import SinglePost from "../singlePost/SinglePost";
import { CreatePost } from "../ui";
import {
  testImage1,
  testImage2,
  testImage3,
  testImage4,
  testImage5,
  testImage6,
} from "../../assets/images";
import { testVideo } from "../../assets/videos";

export default function Posts({ data }) {
  return (
    <div className="grid gap-3">
      <CreatePost />
      {data
        ? data.map((post) => <SinglePost key={post.post_id} data={post} />)
        : ""}
    </div>
  );
}
