import React from "react"
import "./css/Qualifications.css"

function Qualifications() {
    return (
        <div className="qualifications" id="qualifications">
            <h1 className="biiiig">Resume</h1>
            <div className="qualifications-wrapper">
                <div className="resume-wrapper">
                    <h2 className="qualifications-title">Resume</h2>
                    <a
                        href="./pdf/resume.pdf"
                        target="_blank"
                        className="qualifications-button"
                    >
                        <span>Preview</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Qualifications
