import "./App.css"
import About from "./components/About"
import Contacts from "./components/Contacts"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import HeroSection from "./components/HeroSection"
import Qualifications from "./components/Qualifications"

import { useEffect } from "react"

function App() {
    console.log("Hi :D")

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show")
                } 
                else {
                    entry.target.classList.remove("show")
                }
            })
        })

        const hiddenElements = document.querySelectorAll(".hidden")
        hiddenElements.forEach((element) => {
            observer.observe(element)
        })
    }, [])

    return (
        <div className="App">
            <Navbar/>
            <HeroSection/>
            <div className="hidden">
            <About />
            </div>

            <div className="hidden">
            <Skills />
            </div>

            <div className="hidden">
            <Projects />
            </div>

            <div className="hidden">
            <Qualifications/>
            </div>

            <div className="hidden">
            <Contacts />
            </div>

            <Footer />
        </div>
    )
}

export default App
