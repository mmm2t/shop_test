import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

const Navbar = ({authenticated, setAuthenticated}) => {
  const menuList = ["All", "Whales", "Seals", "Fishes", "Penguins", "Others"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const navigate=useNavigate();
  const goToLogin = () => {
    if(authenticated){
      setAuthenticated(false);
      navigate('/products');
    } else {
      navigate('/login');
    }
  }

  const search = (event) => {
    if(event.key === "Enter"){
      navigate(`/products?q=${event.target.value}`);
    }
  }

  const handleMenuClick = (category) => {
    if (category === 'All') {
      navigate('/products');
    } else {
      navigate(`/products?category=${category}`);
    }
    setIsMenuOpen(false); // Close mobile menu after selection
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const toggleSearch = () => {
    setIsSearchExpanded(!isSearchExpanded);
  }

  return (
    <div className="navbar-gradient">
      <div className="navbar-top">
        <div className="hamburger-menu" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </div>
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticated ? "Log out" : "Log in"}</div>
        </div>
      </div>
      <div className="logo-container">
        <img
          src="https://i.pinimg.com/736x/30/46/f6/3046f6e2958c99155794e49a7e224c4a.jpg"
          alt="Logo"
          className="logo"
        onClick={()=>navigate('/products')}/>
      </div>
      <div className="menu-container">
        <ul className={`menu-list ${isMenuOpen ? 'menu-open' : ''}`}>
          {menuList.map((menu) => (
            <li key={menu} onClick={()=>handleMenuClick(menu)}>{menu}</li>
          ))}
        </ul>
        <div className={`search-bar ${isSearchExpanded ? 'search-expanded' : ''}`}>
          <FontAwesomeIcon 
            icon={faSearch} 
            className="search-icon"
            onClick={toggleSearch}
          />
          <input 
            type="text" 
            className='search-box' 
            placeholder="Search" 
            onKeyPress={(event)=>search(event)}
            onFocus={() => setIsSearchExpanded(true)}
            onBlur={() => setIsSearchExpanded(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
