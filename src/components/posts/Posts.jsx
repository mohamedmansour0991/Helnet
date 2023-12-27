import axios from "axios";
import SinglePost from "../singlePost/SinglePost";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Posts({ data }) {
  const { user, token, refrech } = useSelector((state) => state.auth);
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;

  const dispatch = useDispatch();

  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Simulate loading data from an API or other source
    if (page > 1) {
      const fetchData = async () => {
        // You should replace this with your actual data fetching logic.
        const response = await fetch(`${URL}/api/post/post?page=${page}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log(data.data);
        // Append the new data to the existing items
        setItems((prevItems) => [...prevItems, ...data.data]);

        // Check if there is more data to load
        console.log(data.data);
        if (data.data.length === 0) {
          setHasMore(false);
        }
      };
      if (hasMore) {
        fetchData();
      }
    }
  }, [page, hasMore, token]); // Include 'hasMore' as a dependency to re-trigger when it changes.

  const loadMore = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    const fetchData = async () => {
      console.log(token);
      // You should replace this with your actual data fetching logic.
      const response = await fetch(`${URL}/api/post/post?page=${1}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(data, "ll");

      // Append the new data to the existing items
      setItems([]);
      setItems([...data.data]);

      // Check if there is more data to load
      if (data.data.length === 0) {
        setHasMore(false);
      }
    };
    fetchData();
  }, [refrech, token]);
  return (
    <div className="grid gap-3 w-100 d-flex align-items-center flex-column">
      {data
        ? data.map((post) => <SinglePost key={post.post_id} data={post} />)
        : ""}
    </div>
  );
}
