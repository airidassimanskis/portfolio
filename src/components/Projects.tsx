import React from "react"
import "./css/Projects.css"

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            
            <div className="flex-container">
                <div className="project-card">
                    <h3 className="project-title"></h3>
                    <img src="" alt="" className="project-image"/>
                    <p className="project-description"></p>
                    <i className="project-github">code icon</i>
                    <i className="project-site">site icon</i>
                </div>
            </div>

        </div>
    )
}

export default Projects
