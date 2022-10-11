import React, { useState } from 'react'
import "./header.css";

const Header = () => {
    /* ====== Toggle Menu ====== */
    const [toggle, setToggle] =  useState(false)

  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">
                Matheus Amâncio
            </a>

            <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link">
                        <i className="fa-solid fa-house nav__icon"></i>
                            Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i className="fa-solid fa-user nav__icon"></i>
                            Sobre mim
                        </a>
                    </li>
                    
                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <i className="fa-solid fa-file-code nav__icon"></i>
                            Skills
                        </a>
                    </li>

                    {/* <li className="nav__item">
                        <a href="#services" className="nav__link">
                            <i className="fa-solid fa-briefcase nav__icon"></i>
                            Services
                        </a>
                    </li> */}

                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link">
                        <i className="fa-solid fa-image nav__icon"></i>
                            Portfólio
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                        <i className="fa-solid fa-envelope nav__icon"></i>
                            Contato
                        </a>
                    </li>
                </ul>
                <i className="fa-solid fa-x nav__close" onClick={() => setToggle(!  toggle)}></i>
            </div>
            <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
                <i className="fa-solid fa-table-cells-large"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header;