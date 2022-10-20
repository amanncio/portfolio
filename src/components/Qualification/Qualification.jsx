import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="qualification section">
            <h2 className="section__title">Competências</h2>
            <span className="section__subtitle">Minha jornada</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div 
                        className={
                            toggleState === 1 
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                            }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i> Educação
                    </div>

                    <div 
                        className={
                            toggleState === 2 
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                            }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experiência
                    </div>
                </div>

                <div className="qualification__sections">
                    <div 
                        className={
                            toggleState === 1
                                ? "qualification__content qualification__content-active" 
                                : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Técnico em Desenvolvimento de Sistemas</h3>
                                <span className="qualification__subtitle">ETEGEC</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 08/2021 - 12/2022 (Em andamento)
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Auxiliar de Veterinário</h3>
                                <span className="qualification__subtitle">Instituto sulamericaon</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2020
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Ensino Médio Completo</h3>
                                <span className="qualification__subtitle">Anglo Líder</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2015
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                        {/* <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">UX Expert</h3>
                                <span className="qualification__subtitle">Spain - Institute</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>
                        </div> */}
                        
                    </div>

                    <div 
                        className={
                            toggleState === 2
                                ? "qualification__content qualification__content-active" 
                                : "qualification__content"
                        }>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Desenvolvimento Frontend (Estágio)</h3>
                                <span className="qualification__subtitle">DBC COmpany</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 02/2022 - 03/2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Curso Java Web Full-Stack - CH(447)</h3>
                                <span className="qualification__subtitle">Generation Brasil - Bootcamp</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 09/2021 - 12/2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Auxiliar Administrativo</h3>
                                <span className="qualification__subtitle">SEFAZ-PE</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 01/2015 - 02/2015
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Qualification