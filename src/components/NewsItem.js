export default function NewsItem (props) {

  let data = props.data;
  console.log("newsItem props", props)

  return (
    <div className="card border p-2">
      <img src={data.urlToImage} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h4 className="card-title">{data.title}</h4>
        <p className="card-text">{data.description}</p>
        <a href="#" class="btn btn-secondary">Read More...</a>
      </div>
    </div>
  )
}