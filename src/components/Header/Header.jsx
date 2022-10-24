import React, { useState } from 'react'
import "./header.css";

const Header = () => {
    /* ====== Change Background Header ====== */
    window.addEventListener("scroll", function() {
        const header = document.querySelector(".header");
        //Quando a altura do scroll for maior ou igual a 200vh -> adicionar a classe scroll-header para a tag com o header tag
        if(this.scrollY >= 200) {
            header.classList.add("scroll-header");
        }else {
            header.classList.remove("scroll-header");
        }
    })

    /* ====== Toggle Menu ====== */
    const [toggle, setToggle] =  useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">
                    Matheus Amâncio
                </a>

                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a 
                                href="#home" 
                                onClick={() => setActiveNav("#home")}
                                className={
                                    activeNav === "#home" ? "nav__link active-link"
                                    : "nav__link"
                                }
                            >
                            <i className="fa-solid fa-house nav__icon"></i>
                                Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a 
                                href="#about"
                                onClick={() => setActiveNav("#about")}
                                className={
                                    activeNav === "#about" ? "nav__link active-link"
                                    : "nav__link"
                                }
                            >
                                <i className="fa-solid fa-user nav__icon"></i>
                                Sobre mim
                            </a>
                        </li>
                        
                        <li className="nav__item">
                            <a 
                                href="#skills"
                                onClick={() => setActiveNav("#skills")}
                                className={
                                    activeNav === "#skills" ? "nav__link active-link"
                                    : "nav__link"
                                }
                            >
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
                            <a 
                                href="#projects"
                                onClick={() => setActiveNav("#projects")}
                                className={
                                    activeNav === "#projects" ? "nav__link active-link"
                                    : "nav__link"
                                }
                            >
                            <i className="fa-solid fa-image nav__icon"></i>
                                Projetos
                            </a>
                        </li>
                        <li className="nav__item">
                            <a 
                                href="#contact"
                                onClick={() => setActiveNav("#contact")}
                                className={
                                    activeNav === "#contact" ? "nav__link active-link"
                                    : "nav__link"
                                }
                            >
                            <i className="fa-solid fa-envelope nav__icon"></i>
                                Contato
                            </a>
                        </li>
                    </ul>
                    <i className="fa-solid fa-x nav__close" onClick={() => setToggle(!toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
                    <i className="fa-solid fa-table-cells-large"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;