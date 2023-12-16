import SinglePost from "../singlePost/SinglePost";
import { CreatePost } from "../ui";

export default function Posts({ data }) {
  return (
    <div className="grid gap-3">
      <CreatePost />
      {data
        ? data.map((post, index) => <SinglePost key={index} data={post} />)
        : ""}
    </div>
  );
}
