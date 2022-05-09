import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import { siteLogo } from './Images'
// import Airline from './pages/Airline'
import City from './pages/City'
// import Country from './pages/Country'

const App = () => {
  return (
    <div>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home siteLogo={siteLogo} />} />
          {/* <Route path="/airline" element={<Airline siteLogo={siteLogo} />} /> */}
          <Route path="/city" element={<City siteLogo={siteLogo} />} />
          {/* <Route
            path="/country/:id"
            element={<Country siteLogo={siteLogo} />}
          />
          <Route
            path="/airline/:id"
            element={<Airline siteLogo={siteLogo} />}
          /> */}
          <Route path="*" element={<Home siteLogo={siteLogo} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
