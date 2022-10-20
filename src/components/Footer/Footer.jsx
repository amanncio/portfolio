import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Matheus Amâncio</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">Sobre</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projetos</a>
                </li>

                <li>
                    <a href="#contact" className="footer__link">Contato</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://github.com/amanncio" className="footer__social-link" target="_blank" rel="noreferrer">
                    <i className="bx bxl-github"></i>
                </a>

                <a href="https://www.linkedin.com/in/matheusamanncio/" className="footer__social-link" target="_blank" rel="noreferrer">
                    <i className="bx bxl-linkedin"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Matheus Amâncio. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer;