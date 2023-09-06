import React from "react"
import "./css/Skills.css"

const Skills = () => {
    return (
        <div className="skills" id="skills">
            <h1 className="biiiig">Skills</h1>
            <div className="skills-main-container">
                <div className="skills-languages">
                    <h3 className="skills-title">Programming Languages</h3>
                    <div className="skills-wrapper">
                        <div className="skills-item">
                            <img src="./images/javascript.svg" />
                        </div>
                        <div className="skills-item">
                            <img src="./images/typescript.svg" />
                        </div>
                        <div className="skills-item">
                            <img
                                src="./images/python.svg"
                                style={{ width: "50px", height: "50px" }}
                            />
                        </div>
                    </div>
                </div>

                <div className="skills-front">
                    <h3 className="skills-title">Front-End</h3>
                    <div className="skills-wrapper">
                        <div className="skills-item">
                            <img src="./images/react.svg" />
                        </div>
                        <div className="skills-item">
                            <img
                                src="./images/html.svg"
                                style={{ width: "50px", height: "50px" }}
                            />
                        </div>
                        <div className="skills-item">
                            <img
                                src="./images/css.svg"
                                style={{ width: "50px", height: "50px" }}
                            />
                        </div>
                        <div className="skills-item">
                            <img src="./images/sass.svg" />
                        </div>
                        <div className="skills-item">
                            <img src="./images/bootstrap.svg" />
                        </div>
                        <div className="skills-item">
                            <img
                                src="./images/tailwind.svg"
                                style={{ width: "50px", height: "50px" }}
                            />
                        </div>
                    </div>
                </div>

                <div className="skills-back">
                    <h3 className="skills-title">Back-End</h3>
                    <div className="skills-wrapper">
                        <div className="skills-item">
                            <img src="./images/nodejs.svg" />
                        </div>
                        <div className="skills-item skills-express">
                            <img src="./images/expressjs.svg" />
                        </div>
                    </div>
                </div>

                <div className="skills-other">
                    <h3 className="skills-title">Other</h3>
                    <div className="skills-wrapper">
                        <div className="skills-item">
                            <img src="./images/mysql.svg" />
                        </div>
                        <div className="skills-item">
                            <img src="./images/mongodb.svg" />
                        </div>
                        <div
                            className="skills-item"
                            style={{ width: "50px", height: "50px" }}
                        >
                            <img src="./images/firebase.svg" />
                        </div>
                        <div className="skills-item">
                            <img src="./images/linux.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
