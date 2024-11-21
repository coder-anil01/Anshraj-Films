import { NavLink } from 'react-router-dom';
import '../style/Navbar.css';

const Navbar = () => {


  return (
    <>
    <div className="navbar">
      <div className="navbar-container">
        <NavLink to='/'><img className='navbar-logo' src="https://res.cloudinary.com/coderanil/image/upload/v1732191178/ANSHRAJ-Films_nphnse.png" alt="Nav-logo" /></NavLink>
        <div className="navbar-items">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/Monetization'>Monetization</NavLink>
          <NavLink to='/Productions & Properties'>Productions & Properties</NavLink>
          <NavLink to='/YouTube Network'>YouTube Network</NavLink>
          <NavLink to='/News'>News</NavLink>
          <NavLink to='/About'>About Us</NavLink>
          <NavLink to='/Contact'>Contact</NavLink>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar
