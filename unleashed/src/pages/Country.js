import axios from 'axios'
import CountryLayout from '../components/CountryLayout'
import { useState, useEffect } from 'react'

const Country = () => {
  const [countries, setCountries] = useState([])

  //retrieve and set Countries
  const getCountries = async () => {
    const res = await axios.get('http://localhost:3001/country')
    setCountries(res.data.country)
  }

  useEffect(() => {
    getCountries()
  }, [])

  return (
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
  )
}

export default Country
