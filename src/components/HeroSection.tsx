import React from "react"
import "./css/HeroSection.css"

const HeroSection = () => {
    const scrollToElement = (id: any) => {
        const element = document.getElementById(id)
        if (element) {
            const offsetTop = element.offsetTop - 64
            const scrollToPosition = offsetTop - 20

            setTimeout(() => {
                window.requestAnimationFrame(() => {
                    window.scrollTo({
                        top: scrollToPosition,
                        behavior: "smooth",
                    })
                })
            }, 150)
        }
    }

    return (
        <div className="hero-wrapper">
            <img className="hero-svg" src="./hero.svg" draggable="false" />

            <div className="hero-scroll">
                <p>Hi, I'm</p>
                <div className="hero-words">
                    <span>Airidas Šimanskis</span>
                    <span>a Full-Stack web developer</span>
                    <span>making your ideas come to life</span>
                </div>
            </div>

            <button
                className="hero-down-button"
                onClick={() => scrollToElement("about")}
            >
                <div className="hero-down-button-arrow"></div>
            </button>
        </div>
    )
}

export default HeroSection
