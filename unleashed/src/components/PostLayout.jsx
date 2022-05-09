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
        <a href={props.stay}>STAY {props.stay}</a>
        <br />
        <a href={props.treat}>TREAT {props.treat}</a>
        <br />
        <a href={props.walk}>WALK {props.walk}</a>
      </div>
    </div>
  )
}

export default PostLayout
