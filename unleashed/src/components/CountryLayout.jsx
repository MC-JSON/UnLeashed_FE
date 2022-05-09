const CountryLayout = (props) => {
  return (
    <div className="card">
      <div className="img-wrapper">
        <img src={props.flag_img} alt="Flag" />
      </div>
      <div className="info-wrapper">
        <h2>{props.name}</h2>
        <p>{props.requirements}</p>
        <a href={props.url}>{props.url}</a>
      </div>
      <br />
    </div>
  )
}

export default CountryLayout