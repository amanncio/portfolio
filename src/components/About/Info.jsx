import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className="bx bx-award about_icon"></i>
                <h3 className="about__title">Experiências</h3>
                <span className="about__subtitle">2 anos de Estudos</span>
            </div>
            
            <div className="about__box">
                <i className="bx bx-briefcase-alt about_icon"></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">4 + Projects</span>
            </div>

            <div className="about__box">
                <i className="bx bx-support about_icon"></i>
                <h3 className="about__title">Entre em contato</h3>
                <span className="about__subtitle">Online 24/7</span>
            </div>
        </div>
    )
}

export default Info;