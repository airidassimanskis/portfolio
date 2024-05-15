import React from "react"
import "./css/Projects.css"

const Projects = () => {
    const projects = [
        {
            title: "Example business site",
            image: "",
            description:
                "An example website for a business",
            technologies: ["React", "TypeScript", "Tailwind.css", "Vite"],
            github: "https://github.com/airidassimanskis/fencas",
            site: "https://fencas.vercel.app/",
        },
        {
            title: "Trivia game (W.I.P)",
            image: "",
            description:
                "Trivia game, WORK IN PROGRESS",
            technologies: ["React", "Next.js", "TypeScript", "Tailwind.css"],
            github: "https://github.com/airidassimanskis/trivia-singleplayer",
            site: "https://triviaq.vercel.app/",
        },
        {
            title: "Restaurant menu",
            image: "",
            description: "This was a school project done by a few people",
            technologies: ["Vanilla JavaScript", "HTML", "Bootstrap"],
            github: "https://github.com/airidassimanskis/meniu-group",
            site: "https://meniu-ten.vercel.app/",
        },
        {
            title: "Portfolio",
            image: "",
            description: "The portfolio you are currently viewing",
            technologies: ["React", "TypeScript", "CSS", "Vite"],
            github: "https://github.com/airidassimanskis/portfolio",
            site: "https://airidassimanskis.vercel.app/",
        },
        {
            title: "E-Maitinimas Mobile App",
            image: "",
            description:
                "A mobile app alternative of 'e-maitinimas.lt'. This was made during an internship",
            technologies: [
                "React Native",
                "Expo",
                "TypeScript",
                "Node.js",
                "MySQL",
            ],
        },
        {
            title: "Internal ordering system",
            image: "",
            description:
                "A website for a company to simplify ordering products from manufacturers",
            technologies: [
                "React",
                "Next.js",
                "Tailwind.css",
                "Node.js",
                "Express.js",
                "MongoDB",
            ],
        },
        {
            title: "Discord Bot",
            image: "",
            description: "A discord bot made with nextcord, deployed with fly.io",
            technologies: ["Python", "nextcord","MongoDB"],
            github: "https://github.com/airidassimanskis/discord-bot-public",
            site: "https://top.gg/bot/853722386972147732",
        },
    ]

    return (
        <div className="projects" id="projects">
            <h1 className="biiiig">Projects</h1>
            <div className="projects-flex">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3 className="project-title">{project.title}</h3>
                        {/* <img
                            className="project-image"
                            src={project.image}
                            alt=""
                        /> */}
                        <p className="project-description">
                            {project.description}
                        </p>
                        <p className="project-technologies">
                            {project.technologies.join(", ")}
                        </p>
                        <div className="project-links">
                            {project.github && (
                                <button
                                    className="project-button"
                                    onClick={() =>{
                                        window.open(project.github, "_blank")
                                    }}
                                >
                                    <span>Code</span>
                                </button>
                            )}
                            {project.site && (
                                <button
                                    className="project-button"
                                    onClick={() =>{
                                        window.open(project.site, "_blank")
                                    }}
                                >
                                    <span>Link</span>
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
