const PostLayout = (props) => {
  return (
    <div className="card">
      <div className="img-wrapper">
        <img className="img4" src={props.image} alt="City" />
      </div>
      <div className="info-wrapper">
        <h2 className="ruth">{props.name}</h2>
        <h3>{props.date}</h3>
        <p className="intro">{props.description}</p>
        <div>
        <h4>STAY: </h4>
        <a href={props.stayLink} className="jump">{props.stay}</a>
        <h4>TREAT: </h4> 
        <a href={props.treatLink} className="jump">{props.treat}</a>
        <h4>WALK: </h4>
        <a href={props.walkLink} className="jump">{props.walk}</a>
      </div>
      </div>
    </div>
  )
}

export default PostLayout
