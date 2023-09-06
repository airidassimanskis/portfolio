import { useRef } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import "./css/Navbar.css"

const Navbar = () => {
    const navRef: any = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    const scrollToElement = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            const headerHeight = 100
            const elementRect = element.getBoundingClientRect()
            const targetScrollPosition =
                elementRect.top + window.scrollY - headerHeight

            const navRef = document.querySelector("nav")

            if (navRef) {
                navRef.style.transition = "none"
            }

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

                    if (navRef) {
                        setTimeout(() => {
                            navRef.style.transition = ""
                        }, 500)
                    }
                }
            }

            requestAnimationFrame(animateScroll)

            if (navRef && navRef.classList.contains("responsive_nav")) {
                showNavbar()
            }
        }
    }

    const navItems = [
        { id: "about", label: "About me" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "qualifications", label: "Resume" },
        { id: "contacts", label: "Contact me" },
    ]

    return (
        <header>
            <a
                className="logo"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                <h3 className="navbar-typewriter-text">
                    &lt;dev&gt;Airidas&lt;/dev&gt;
                </h3>
            </a>
            <nav ref={navRef}>
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={() => {
                            if (
                                navRef.current.classList.contains(
                                    "responsive_nav"
                                )
                            ) {
                                showNavbar()
                            }
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
