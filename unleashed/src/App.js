import './styles/App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Nav />
      <main>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/airlines" element={<Airline />} />
          <Route path="/cities" element={<City />} />
          <Route path="/countries" element={<Country />} />
          <Route path="*" element={<Home />} /> */}
        </Routes>
      </main>
    </div>
  )
}

export default App
