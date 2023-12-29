import { useState, useEffect } from "react";

const getDataPost = (initialPage, token, deletePost_id, update, api) => {
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(initialPage);

  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${URL}/api/${api}?page=${page}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (data.status === 429) {
        // Implement backoff logic here
        console.log("Too Many Requests. Retrying after some time...");
        await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds
        fetchData(); // Retry the request
        return;
      }
      // console.log(data);
      if (page > 0) {
        // Append the new data to the existing items

        setItems((prevItems) => [...prevItems, ...data?.data]);
      } else {
        // Set the initial data
        setItems([...data?.data]);
      }

      // Check if there is more data to load
      if (data?.data?.length === 0) {
        setHasMore(false);
      }
    };

    if (hasMore) {
      fetchData();
    }
  }, [page, hasMore, token]);

  const updatePost = (postId, updatedData) => {
    setItems((prevItems) =>
      prevItems.map((post) =>
        post.id === postId ? { ...post, ...updatedData } : post
      )
    );
  };

  const addOrUpdatePost = (update) => {
    const existingPostIndex = items.findIndex((post) => post.id === update.id);

    if (existingPostIndex !== -1) {
      // Post found, update it
      updatePost(update.id, update);
    } else {
      // Post not found, add it to the beginning of the array
      setItems((prevItems) => [update, ...prevItems]);
    }
  };

  useEffect(() => {
    addOrUpdatePost(update);
  }, [update]);

  useEffect(() => {
    // console.log(deletePost_id, "ASd");
    const deletePost_idHandle = (deletePost_id) => {
      setItems((prevItems) =>
        prevItems.filter((post) => post.id !== deletePost_id.post_id)
      );
    };
    // console.log(items);
    deletePost_idHandle(deletePost_id);
  }, [deletePost_id]);
  return { items, hasMore, loadMore };
};

export default getDataPost;
