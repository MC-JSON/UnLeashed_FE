import { Link } from 'react-router-dom'

//nav bar build
const Nav = () => {
  return (
    <header>
      <nav className="navbar">
        <div>
          <Link to="/">Home</Link>
          <Link to="/pottery">About</Link>
          <Link to="/types">Categorical</Link>
          <Link to="/create">Create</Link>
        </div>
      </nav>
    </header>
  )
}

export default Nav
