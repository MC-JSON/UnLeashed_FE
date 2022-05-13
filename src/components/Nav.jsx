import { Link } from 'react-router-dom'

//nav bar build
const Nav = () => {
  return (
    <header>
      <nav className="navbar">
        <div>
          <Link to="/">Home</Link>
          <Link to="/city">Ruthie</Link>
        </div>
      </nav>
    </header>
  )
}

export default Nav
