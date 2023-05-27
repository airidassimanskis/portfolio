import React, { useRef, useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import "./css/Navbar.css"

const Navbar = () => {
    const navRef: any = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <header>
            <a
                className="logo-a"
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" })
                }}
            >
                <h3>&lt;dev&gt;Airidas&lt;/dev&gt;</h3>
            </a>
            <nav ref={navRef}>
                <a
                    href="#about"
                    onClick={() => {
                        navRef.current.classList.toggle("responsive_nav")
                    }}
                >
                    About me
                </a>
                <a
                    href="#skills"
                    onClick={() => {
                        navRef.current.classList.toggle("responsive_nav")
                    }}
                >
                    Skills
                </a>
                <a
                    href="#projects"
                    onClick={() => {
                        navRef.current.classList.toggle("responsive_nav")
                    }}
                >
                    Projects
                </a>
                <a
                    href="#contacts"
                    onClick={() => {
                        navRef.current.classList.toggle("responsive_nav")
                    }}
                >
                    Contacts
                </a>
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
