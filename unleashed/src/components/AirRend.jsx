const AirRend = (props) => {
  return (
    <div className="card">
      <h3>{props.name}</h3>
      <div className="img-wrapper" onClick={props.onclick}>
        <img src={props.logo} alt="Logo" />
      </div>
      </div>
  )
}

export default AirRend