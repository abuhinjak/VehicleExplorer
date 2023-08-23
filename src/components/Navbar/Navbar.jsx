import { NavLink } from 'react-router-dom'

import './navbar.scss'

import logo from '../../assets/img/logo.png'

function Navbar() {
  return (
    <header className="main--header-wrap fixed-top">
        <div className="container main--header">
            <NavLink to="/">
                <div className="nav--logo">
                    <div className="nav--logo-img">
                        <img src={logo} alt="Vehica Logo" />
                    </div>
                    <span className="logo--title">Vehica</span>
                </div>
            </NavLink>
            <nav className="main--navbar">
                <ul className="navbar--items">
                    <li className="navbar--item">
                        <NavLink to="/" activeclassname="active">Home</NavLink>
                    </li>
                    <li className="navbar--item">
                        <NavLink to="/makes">Listing</NavLink>
                    </li>
                    <li className="navbar--item">
                        <NavLink to="/about">About</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Navbar
