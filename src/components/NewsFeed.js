import React, { useState, useEffect } from "react";
import uuid from "react-uuid";

import NewsItem from "./NewsItem";
import { API, URL, QUERY, COUNTRY } from "../config/Config";

export default function NewsFeed() {
  let query = URL + QUERY + COUNTRY + API;
  console.log(query);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(query)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("Retrieved.");
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="newsFeed">
        {console.log(JSON.stringify(items, null, 2))}
        Retrieved {items.totalResults} news articles, top {items.articles.length} displayed.
        {items.articles.map((item) => (
          <NewsItem key={uuid()} data={item} />
        ))}
      </div>
    );
  }
}
