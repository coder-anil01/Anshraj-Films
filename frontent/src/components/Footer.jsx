import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_container">
            <div>
                <img className="footer_logo" src="https://res.cloudinary.com/coderanil/image/upload/v1732191178/ANSHRAJ-Films_nphnse.png" alt="Logo" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem quam suscipit consequatur obcaecati neque harum nesciunt facilis a voluptatibus asperiores!</p>
                <img src="https://res.cloudinary.com/coderanil/image/upload/v1732113085/youtube-certified_traeeb.png" alt="" />
            </div>
            <div>
                <h3>Sitemap</h3>
                <div className="footer-items">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/Monetization'>Monetization</NavLink>
                    <NavLink to='/Productions & Properties'>Productions & Properties</NavLink>
                    <NavLink to='/YouTube Network'>YouTube Network</NavLink>
                    <NavLink to='/News'>News</NavLink>
                    <NavLink to='/About'>About Us</NavLink>
                    <NavLink to='/Contact'>Contact</NavLink>
                </div>
            </div>
            <div>
                <h3>Sitemap</h3>
                <div className="footer-items">
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
      </div>
    </>
  )
}

export default Footer
