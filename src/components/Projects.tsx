import React from "react"
import "./css/Projects.css"

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <div className="projects-flex">

                <div className="project-card">
                    <h3 className="project-title">Meniu Group</h3>
                    <img src="" alt="" className="project-image"/>
                    <p className="project-description">This was a project done by a few people, we used vanilla JavaScript, HTML and CSS</p>
                    <a className="project-github projects-button"><span>Code</span></a>
                    <a className="project-site projects-button"><span>Link</span></a>
                </div>

            </div>
        </div>
    )
}

export default Projects
