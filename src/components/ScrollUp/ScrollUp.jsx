import React from 'react'
import "./scrollUp.css"

const ScrollUp = () => {
    window.addEventListener("scroll", function() {
        const scrollUp = document.querySelector(".scrollup");
        //Quando a altura do scroll for maior ou igual a 560vh -> adicionar a classe show-scroll para a tag com o scroll-top class.
        if(this.scrollY >= 560) {
            scrollUp.classList.add("show-scroll");
        }else {
            scrollUp.classList.remove("show-scroll");
        }
    })

    return (
        <a href="#home" className="scrollup">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    )
}

export default ScrollUp