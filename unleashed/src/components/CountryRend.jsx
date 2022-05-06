const CountryRend = (props) => {
  return (
    <div className="card">
      <h3>{props.name}</h3>
      <div className="img-wrapper" onClick={props.onclick}>
        <img src={props.flag_img} alt="Flag" />
      </div>
      </div>
  )
}

export default CountryRend