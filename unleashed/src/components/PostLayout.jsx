const PostLayout = (props) => {
  return (
    <div className="card">
      <div className="img-wrapper">
        <img src={props.image} alt="City" />
      </div>
      <div className="info-wrapper">
        <h2>{props.name}</h2>
        <h3>{props.date}</h3>
        <p>{props.description}</p>
        <a href={props.stay}>{props.stay}</a>
        <a href={props.treat}>{props.treat}</a>
        <a href={props.walk}>{props.walk}</a>
      </div>
    </div>
  )
}

export default PostLayout
