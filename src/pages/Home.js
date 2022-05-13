import axios from 'axios'
import CountryLayout from '../components/CountryLayout'
import AirLayout from '../components/AirLayout'
import Logo from '../components/Logo'
import { useState, useEffect } from 'react'

//home page build
const Home = (props) => {
  const [countries, setCountries] = useState([])
  const [airlines, setAirlines] = useState([])

  //retrieve and set Countries
  const getCountries = async () => {
    const res = await axios.get(
      'https://whispering-dawn-47473.herokuapp.com/country'
    )
    setCountries(res.data.country)
  }

  const getAirlines = async () => {
    const res = await axios.get(
      'https://whispering-dawn-47473.herokuapp.com/airline'
    )
    setAirlines(res.data.airline)
  }

  useEffect(() => {
    getCountries()
  }, [])

  useEffect(() => {
    getAirlines()
  }, [])

  return (
    <div>
      <div>
        <Logo siteLogo={props.siteLogo} />
      </div>
      <div className="intro">
        Welcome to UnLeashed, a central hub for dog international travel
        information. You will see below listings for both country and airline
        canine requirements. A short introduction of requirements is provided,
        please utilize the links for a more intensive breakdown of requirements
        from the country/airline websites.
      </div>
      <br />
      <div className="post-link">
        If you find city recommendations of interest. Please follow Ruthie for
        her travel recommendations. Please use the link below or at the
        navigation bar.
        <a href="https://ruunleashed.herokuapp.com/city">Ruthie Recommends</a>
      </div>
      <br />
      <div className="column-container">
        <div className="map countries-map">
          <section>
            {countries.map((countries) => (
              <div>
                <CountryLayout
                  key={countries.id}
                  name={countries.name}
                  flag_img={countries.flag_img}
                  requirements={countries.requirements}
                  url={countries.url}
                />
              </div>
            ))}
          </section>
        </div>
        <div className="map airlines-map">
          <section>
            {airlines.map((airlines) => (
              <div>
                <AirLayout
                  key={airlines.id}
                  name={airlines.name}
                  logo={airlines.logo}
                  reservations={airlines.reservations}
                  url={airlines.url}
                />
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home