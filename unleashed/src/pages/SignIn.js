import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const SignIn = ({ setUser, toggleAuthenticated }) => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    adminEmail: '',
    adminPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ adminEmail: '', adminPassword: '' })
    setUser(payload)
    toggleAuthenticated(true)
    navigate('/admin')
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="email-input">
          <input
            onChange={handleChange}
            name="adminEmail"
            type="email"
            placeholder="Email Address"
            value={formValues.adminEmail}
            required
          />
        </div>
        <div className="password-input">
          <input
            onChange={handleChange}
            type="password"
            name="adminPassword"
            placeholder="Password"
            value={formValues.adminPassword}
            required
          />
        </div>
        <div className="sign-in-button">
          <button
            disabled={!formValues.adminEmail || !formValues.adminPassword}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
