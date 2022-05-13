import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import { siteLogo } from './Images'
import City from './pages/City'
import Admin from './pages/Admin'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { verifyUser } from './services/Auth'
import { useState, useEffect } from 'react'

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  //Sign-up was only utilized to set admin logins
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
                <SignIn siteLogo={siteLogo} setUser={setUser} />
              )
            }
          />
          {/* <Route
            path="signup"
            element={<SignUp siteLogo={siteLogo} setUser={setUser} />}
          /> */}
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
