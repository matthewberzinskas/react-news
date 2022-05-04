import React, { useState, useEffect } from "react";
import uuid from "react-uuid";

import NewsItem from "./NewsItem";
import { API, URL, QUERY, COUNTRY } from "../config/Config";

// Default, top 20 headlines for USA
const DEFAULT = URL + QUERY + COUNTRY + API;

export default function NewsFeed(props) {
  console.log("newsFeed props", props);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let query = "";
    if (props.query === "") {
      //Default top headlines
      query = URL + QUERY + COUNTRY + API;
    } else {
      query = `https://newsapi.org/v2/everything?q=${props.query + API}`;
    }

    console.log("fetching from:", query);
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
  }, [props.query]);

  if (error) {
    return (
      <div>
        {console.log("Error in fetch\n", error.message)}
        Error loading news.
      </div>
    );
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="newsFeed">
        {props.query ? (
          <div>
            Displaying results for <span className="fw-bold">{props.query}</span>
            <br />
            {items.totalResults} results found.
          </div>
        ) : (
          `Displaying top headlines.`
        )}
        
        {items.articles.map((item) => (
          <NewsItem key={uuid()} data={item} />
        ))}
      </div>
    );
  }
}
