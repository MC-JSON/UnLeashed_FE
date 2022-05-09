const AirLayout = (props) => {
  return (
    <div className="card">
      <div className="img-wrapper">
      <a href={props.url}><img src={props.logo} alt="Logo" /></a>
      </div>
      <div className="info-wrapper">
        <h2>{props.name}</h2>
        <p>{props.reservations}</p>
      </div>
      <br />
    </div>
  )
}

export default AirLayout