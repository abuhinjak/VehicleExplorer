import {useState} from 'react'
import { NavLink } from 'react-router-dom'

import './navbar.scss'

import logo from '../../assets/img/logo.png'

function Navbar() {
    const [showMenu, setShowMenu] = useState(false)

    const handleShowMenu = (prev) => {
        setShowMenu(!prev)
    }  

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
                <div className="hamb--menu-container d-flex d-md-none">
                    <div className={`hamb--menu ${showMenu ? 'show' : ''}`} onClick={() => handleShowMenu(showMenu)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                
                <nav className="main--navbar">
                    <ul className={`navbar--items ${showMenu ? 'show' : ''}`}>
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
