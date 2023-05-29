import "./css/Footer.css"
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai"

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="footer-links">
                <a
                    href="https://www.linkedin.com/in/airidassimanskis/"
                    target="_blank"
                >
                    <AiFillLinkedin size={30}></AiFillLinkedin>
                </a>

                <a href="https://github.com/airidassimanskis" target="_blank">
                    <AiFillGithub size={30}></AiFillGithub>
                </a>

                <a
                    onClick={() =>
                        window.open(
                            "mailto:airidassimanskis@gmail.com",
                            "_blank"
                        )
                    }
                >
                    <AiOutlineMail size={32}></AiOutlineMail>
                </a>
            </div>
            <p className="footer-copyright">&copy; 2023 Airidas Šimanskis</p>

            <button
                className="footer-button"
                onClick={() => window.scrollTo(0, 0)}
            >
                <div className="footer-button-arrow"></div>
            </button>
        </footer>
    )
}

export default Footer
