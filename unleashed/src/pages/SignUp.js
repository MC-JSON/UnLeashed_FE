import { useState } from 'react'
import { signUp } from '../services/Auth'
import { useHistory } from 'react-router-dom'

const SignUp = (props) => {
  let history = useHistory()

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
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
      const user = await signUp(form)
      setUser(user)
      history.push('/admin')
    } catch (error) {
      setFormValues({
        name: '',
        isError: true,
        errorMsg: 'Invalid Sign Up Details',
        email: '',
        password: '',
        passwordConfirmation: ''
      })
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? 'danger' : ''
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button type="submit">Sign Up</button>
    }
  }

  const { name, email, password, passwordConfirmation } = form

  return (
    <div>
      <form onSubmit={handleSubmit} className="login-form">
        <h3>Sign Up</h3>
        <div className="name-input">
          <input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="User Name"
            value={name}
            required
          />
        </div>
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
          <input
            onChange={handleChange}
            type="passwordConfirmation"
            name="password"
            placeholder="Confirm Password"
            value={passwordConfirmation}
            required
          />
        </div>
        {renderError()}
      </form>
    </div>
  )
}

export default SignUp
