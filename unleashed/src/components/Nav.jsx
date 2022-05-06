import { Link } from 'react-router-dom'

//nav bar build
const Nav = () => {
  return (
    <header>
      <nav className="navbar">
        <div>
          <Link to="/">Home</Link>
          <Link to="/airlines">Air</Link>
          <Link to="/countries">Land</Link>
          <Link to="/cities">City Fun</Link>
        </div>
      </nav>
    </header>
  )
}

export default Nav
