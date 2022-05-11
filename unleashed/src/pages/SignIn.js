import { useState } from 'react'
import { signIn } from '../services/Auth'
import { useHistory } from 'react-router-dom'

const SignIn = (props) => {
  let history = useHistory()

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
      const user = await signIn(form)
      setUser(user)
      history.push('/admin')
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
    const toggleForm = form.isError ? 'danger' : ''
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button type="submit">Sign In</button>
    }
  }

  const { email, password } = form

  return (
    <div>
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
        {renderError()}
      </form>
    </div>
  )
}

export default SignIn
