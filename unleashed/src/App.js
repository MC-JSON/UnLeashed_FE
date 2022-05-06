import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
// import Airline from './pages/Airline'
// import City from './pages/City'
import Country from './pages/Country'

const App = () => {
  return (
    <div>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/airline" element={<Airline />} />
          <Route path="/city" element={<City />} /> */}
          <Route path="/country/:id" element={<Country />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
