import { useState } from 'react'
import { signIn } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'

const SignIn = (props) => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    isError: false,
    errorMsg: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { setUser } = props
    try {
      const user = await signIn(formValues)
      setUser(user)
      navigate('https://ruunleashed.herokuapp.com/admin')
    } catch (error) {
      setFormValues({
        isError: true,
        errorMsg: 'Invalid Login',
        email: '',
        password: ''
      })
    }
  }

  const renderError = () => {
    const toggleForm = formValues.isError ? 'danger' : ''
    if (formValues.isError) {
      return (
        <div className="signs">
          <button type="submit" className={toggleForm}>
            {formValues.errorMsg}
          </button>
        </div>
      )
    } else {
      return (
        <div className="signs">
          <button type="submit">Sign In</button>
        </div>
      )
    }
  }

  const { email, password } = formValues

  return (
    <div>
      <div>
        <Logo siteLogo={props.siteLogo} />
      </div>
      <form onSubmit={handleSubmit} className="login-form">
        <h3>Sign In</h3>
        <div className="email-input">
          <input
            onChange={handleChange}
            name="email"
            type="text"
            placeholder="Email Address"
            value={email}
            required
          />
        </div>
        <div className="password-input">
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            required
          />
        </div>
        <br />
        {renderError()}
      </form>
    </div>
  )
}

export default SignIn
