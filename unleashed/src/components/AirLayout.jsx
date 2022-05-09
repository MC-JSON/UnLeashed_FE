const AirLayout = (props) => {
  return (
    <div className="card">
      <div className="img-wrapper">
        <img src={props.logo} alt="Logo" />
      </div>
      <div className="info-wrapper">
        <h2>{props.name}</h2>
        <p>{props.reservations}</p>
        <a href={props.url}>{props.url}</a>
      </div>
      <br />
    </div>
  )
}

export default AirLayout