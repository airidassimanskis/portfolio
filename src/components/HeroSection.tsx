import React from "react"
import "./css/HeroSection.css"

const HeroSection = () => {
    const scrollToElement = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            const headerHeight = 100
            const elementRect = element.getBoundingClientRect()
            const targetScrollPosition =
                elementRect.top + window.scrollY - headerHeight

            const animationDuration = 500
            const easing = (t: number) => t

            const startTime = performance.now()
            const initialScrollY = window.scrollY

            const animateScroll = (currentTime: number) => {
                const elapsed = currentTime - startTime

                if (elapsed < animationDuration) {
                    const progress = easing(elapsed / animationDuration)
                    const newScrollY =
                        initialScrollY +
                        progress * (targetScrollPosition - initialScrollY)

                    window.scrollTo({
                        top: newScrollY,
                        behavior: "auto",
                    })

                    requestAnimationFrame(animateScroll)
                } else {
                    window.scrollTo({
                        top: targetScrollPosition,
                        behavior: "smooth",
                    })
                }
            }

            requestAnimationFrame(animateScroll)
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
