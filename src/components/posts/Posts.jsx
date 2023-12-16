import SinglePost from "../singlePost/SinglePost";
import { CreatePost } from "../ui";
// import { data } from "/public/fakeData";

export default function Posts({ data }) {
  return (
    <div className="grid gap-3">
      {data
        ? data.map((post) => <SinglePost key={post.post_id} data={post} />)
        : ""}
    </div>
  );
}
