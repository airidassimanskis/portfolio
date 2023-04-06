import React, { useRef } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import "./css/Navbar.css"

const Navbar = () => {
    const navRef: any = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <header className="finisher-header">
            <h3>devAS</h3>
            <nav ref={navRef}>
                <a href="#about">About me</a>
                <a href="#projects">Projects</a>
                <a href="#contacts">Contacts</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn nav-open-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    )
}

export default Navbar
