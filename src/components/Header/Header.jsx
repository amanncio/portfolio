import React from 'react'
import "./header.css";

const Header = () => {
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Amancio</a>

            <div className="nav__menu">
                <ul className='nav__list grid'>
                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link">
                        <i className="fa-solid fa-house nav__icon"></i>
                            Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i className="fa-solid fa-user nav__icon"></i>
                            About
                        </a>
                    </li>
                    
                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <i className="fa-solid fa-file-code nav__icon"></i>
                            Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#services" className="nav__link">
                            <i className="fa-solid fa-briefcase nav__icon"></i>
                            Services
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link">
                        <i className="fa-solid fa-image nav__icon"></i>
                            Portifólio
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                        <i className="fa-solid fa-envelope nav__icon"></i>
                            Contact
                        </a>
                    </li>
                </ul>
                <i className="fa-solid fa-x nav__close"></i>
            </div>
            <div className="nav__toggle">
                <i className="fa-solid fa-table-cells-large"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header;