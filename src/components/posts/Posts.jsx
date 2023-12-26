import axios from "axios";
import SinglePost from "../singlePost/SinglePost";
import { useSelector } from "react-redux";

export default function Posts({ data }) {
  const { token } = useSelector((state) => state.auth);

  const getData = async () => {
    try {
      const res = axios.get("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="grid gap-3 w-100 d-flex align-items-center flex-column">
      {data
        ? data.map((post) => <SinglePost key={post.post_id} data={post} />)
        : ""}
    </div>
  );
}
