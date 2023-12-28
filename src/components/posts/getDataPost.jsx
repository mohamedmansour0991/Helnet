import { useState, useEffect } from "react";

const getDataPost = (initialPage, token, refresh, api) => {
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
      console.log(data);
      if (page > 1) {
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

  useEffect(() => {
    console.log(1);
    const fetchData = async () => {
      const response = await fetch(
        `${URL}/api/${api}?page=${initialPage}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      // Set the initial data
      console.log(data);
      setItems([...data?.data]);

      // Check if there is more data to load
      if (data?.data.length === 0) {
        setHasMore(false);
      }
    };

    fetchData();
  }, [refresh, token, initialPage]);

  return { items, hasMore, loadMore };
};

export default getDataPost;
