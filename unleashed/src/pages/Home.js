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
    const res = await axios.get('http://localhost:3001/country')
    setCountries(res.data.country)
  }

  const getAirlines = async () => {
    const res = await axios.get('http://localhost:3001/airline')
    setAirlines(res.data.airline)
  }

  useEffect(() => {
    getCountries()
  }, [])

  useEffect(() => {
    getAirlines()
  }, [])

  //intro breakdown between logo and countries
  //country/airline search function?
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
      <div className="post-link">
        If you find city recommendations of interest. Please follow Ruthie for
        her travel recommendations. Please see the link here or at the
        navigation bar.
        <a href="http://localhost:3000/city">Ruthie Recommends</a>
      </div>
      <div>
        <section>
          {countries.map((countries) => (
            <div>
              <CountryLayout
                name={countries.name}
                flag_img={countries.flag_img}
                requirements={countries.requirements}
                url={countries.url}
              />
            </div>
          ))}
        </section>
      </div>
      <div>
        <section>
          {airlines.map((airlines) => (
            <div>
              <AirLayout
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
  )
}

export default Home
