import axios from 'axios'
import CountryRend from '../components/CountryRend'
import AirRend from '../components/AirRend'
import Logo from '../components/Logo'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

//home page build
const Home = (props) => {
  const [countries, setCountries] = useState([])
  const [airlines, setAirlines] = useState([])
  const navigate = useNavigate()

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

  const navCountry = (countries) => {
    navigate(`/country/${countries}`)
  }

  const navAirline = (airlines) => {
    navigate(`/airline/${airlines}`)
  }

  //intro breakdown between logo and countries
  //country/airline search function?
  return (
    <div>
      <div>
        <Logo siteLogo={props.siteLogo} />
      </div>
      <section>
        {countries.map((countries) => (
          <div>
            <CountryRend
              onclick={() => navCountry(countries.name)}
              name={`${countries.name}`}
              flag_img={countries.flag_img}
            />
          </div>
        ))}
      </section>
      <section>
        {airlines.map((airlines) => (
          <div>
            <AirRend
              onclick={() => navAirline(airlines.name)}
              name={`${airlines.name}`}
              logo={airlines.logo}
            />
          </div>
        ))}
      </section>
    </div>
  )
}

export default Home
