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
        <div>
          STAY: 
        <a href={props.stayLink}>{props.stay}</a>
        </div>
        <br />
        <div>
          TREAT: 
        <a href={props.treatLink}>{props.treat}</a>
        </div>
        <br />
        <div>
          WALK:
        <a href={props.walkLink}>{props.walk}</a>
      </div>
      </div>
    </div>
  )
}

export default PostLayout
