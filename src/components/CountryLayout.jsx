const CountryLayout = (props) => {

  return (
    <div className="card">
      <div className="img-wrapper">
      <a href={props.url}><img className="img2" src={props.flag_img} alt="Flag" /></a>
      </div>
      <div className="info-wrapper">
        <h2>{props.name}</h2>
        <p className="rez">{props.requirements}</p>
      </div>
      <br />
    </div>
  )
}

export default CountryLayout