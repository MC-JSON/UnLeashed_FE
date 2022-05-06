import { Link } from 'react-router-dom'

//nav bar build
const Nav = () => {
  return (
    <header>
      <nav className="navbar">
        <div>
          <Link to="/">Land</Link>
          <Link to="/airlines">Air</Link>
          <Link to="/cities">Trots</Link>
        </div>
      </nav>
    </header>
  )
}

export default Nav
