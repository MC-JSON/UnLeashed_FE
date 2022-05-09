// import axios from 'axios'
// import Logo from '../components/Logo'
// import AirLayout from '../components/AirLayout'
// import { useState, useEffect } from 'react'

// const Airline = (props) => {
//   const [airlines, setAirlines] = useState([])

//   //retrieve and set Airlines
//   const getAirlines = async () => {
//     const res = await axios.get('http://localhost:3001/airline')
//     setAirlines(res.data.airline)
//   }

//   useEffect(() => {
//     getAirlines()
//   }, [])

//   //airline breakdown between logo and countries
//   return (
//     <div>
//       <div>
//         <Logo siteLogo={props.siteLogo} />
//       </div>
//       <section>
//         {airlines.map((airlines) => (
//           <div>
//             <AirLayout
//               name={airlines.name}
//               logo={airlines.logo}
//               reservations={airlines.reservations}
//               url={airlines.url}
//             />
//           </div>
//         ))}
//       </section>
//     </div>
//   )
// }

// export default Airline
