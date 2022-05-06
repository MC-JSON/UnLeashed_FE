import axios from 'axios'
import CountryRend from '../components/CountryRend'
import Logo from '../components/Logo'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

//home page build
const Home = (props) => {
  const [countries, setCountries] = useState([])
  const navigate = useNavigate()

  //retrieve and set Countries
  const getCountries = async () => {
    const res = await axios.get('http://localhost:3001/country')
    setCountries(res.data.country)
  }

  useEffect(() => {
    getCountries()
  }, [])

  const navCountry = (countries) => {
    navigate(`/country/${countries}`)
  }

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
    </div>
  )
}

export default Home
