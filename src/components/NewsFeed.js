import NewsItem from "./NewsItem"
import {API, URL, QUERY, COUNTRY } from '../config/Config'

export default function NewsFeed() {

  console.log(URL+QUERY+COUNTRY+API)

  return (
    <div className="news-feed border">
      NewsFeed Placeholder
      <NewsItem/>
    </div>
  )
}