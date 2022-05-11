import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import { siteLogo } from './Images'
import City from './pages/City'
import Admin from './pages/Admin'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { useState, useEffect } from 'react'

const [user, setUser] = useState(null)

useEffect(() => {
  const fetchUser = async () => {
    const user = await verifyUser()
    user ? setUser(user) : setUser(null)
  }
  fetchUser()
}, [])

const App = () => {
  return (
    <div>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home siteLogo={siteLogo} />} />
          <Route path="/city" element={<City siteLogo={siteLogo} />} />
          <Route
            path="/admin"
            element={
              user ? (
                <Admin siteLogo={siteLogo} user={user} />
              ) : (
                <Redirect to="/sign-in" />
              )
            }
          />
          <Route
            path="signup"
            element={<SignUp siteLogo={siteLogo} setUser={setUser} />}
          />
          <Route
            path="signin"
            element={<SignIn siteLogo={siteLogo} setUser={setUser} />}
          />
          <Route path="*" element={<Home siteLogo={siteLogo} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
