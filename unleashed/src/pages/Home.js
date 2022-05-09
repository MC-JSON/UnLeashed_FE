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
