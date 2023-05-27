import { useRef } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import "./css/Navbar.css"

const Navbar = () => {
    const navRef: any = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    const scrollToElement = (id: any) => {
        if (navRef.current.classList.contains("responsive_nav")) {
            navRef.current.classList.toggle("responsive_nav")
        }
        
        const element = document.getElementById(id)
        if (element) {
            const navbarHeight = navRef.current.offsetHeight
            const offsetTop = element.offsetTop - navbarHeight

            const extraOffset = 20
            const scrollToPosition = offsetTop - extraOffset

            setTimeout(() => {
                window.requestAnimationFrame(() => {
                    window.scrollTo({
                        top: scrollToPosition,
                        behavior: "smooth",
                    })
                    console.log("scrolling to " + scrollToPosition)
                })
            }, 300)
        }
    }

    const navItems = [
        { id: "about", label: "About me" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "contacts", label: "Contacts" },
    ]

    return (
        <header>
            <a
                className="logo-a"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                <h3>&lt;dev&gt;Airidas&lt;/dev&gt;</h3>
            </a>
            <nav ref={navRef}>
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={() => {
                            scrollToElement(item.id)
                        }}
                    >
                        {item.label}
                    </a>
                ))}
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
