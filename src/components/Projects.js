import React from 'react'

function Projects() {
    return (
        <div data-aos="fade-down" data-aos-duration="700">
            <h3 id="projects" className="general-title">Projects</h3>
            <div className="container">

                {/* Project 1: R+Co Replica Website */}
                <div className="project-card">
                    <h4 id="project-1" class="project-title card-title general-title">R+Co Replication</h4>
                    <div className="img-container">
                        <a href="https://khaledajaj2026.github.io/RCO_replication" target="_blank" rel="noreferrer">
                            <img className="main-img" src="rco-replica.png" alt="screenshot of r+co replica" />
                        </a>
                    </div>
                    <div class="card-body">
                        <ul className="skills-used">
                            <li>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1024px-Sass_Logo_Color.svg.png?20150315202757" alt="used sass" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207" alt="used react" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png?20120221235433" alt="used javascript" />
                            </li>
                        </ul>
                        <p class="card-text">A replica of the e-commerce website "R+Co"</p>
                        <p className="git-link"><a href="https://github.com/KhaledAjaj2026/RCO_replication" className="git-link_anchor" target="_blank" rel="noreferrer">GitHub repo</a></p>
                    </div>
                </div>
                {/* Project 2: Survey Form */}
                <div className="project-card">
                    <h4 id="project-2" class="project-title card-title general-title">Survey Form</h4>
                    <div className="img-container">
                        <a href="https://khaledajaj2026.github.io/survey-form/" target="_blank" rel="noreferrer">
                            <img className="main-img" src="survey-form.png" alt="screenshot of survey form" />
                        </a>
                    </div>
                    <div class="card-body">
                        <ul className="skills-used">
                            <li>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png?20120221235433" alt="used javascript" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png" alt="used bootstrap" />
                            </li>
                        </ul>
                        <p class="card-text">Survey form that uses semantic HTML5 tags</p>
                        <p className="git-link"><a href="https://github.com/KhaledAjaj2026/survey-form" className="git-link_anchor" target="_blank" rel="noreferrer">GitHub repo</a></p>
                    </div>
                </div>
                {/* Project 3: Rock Paper Scissors */}
                <div className="project-card">
                    <h4 id="project-3" class="project-title card-title general-title">Rock-Scissors-Paper</h4>
                    <div className="img-container">
                        <a href="https://khaledajaj2026.github.io/rock-paper-scissors/" target="_blank" rel="noreferrer">
                            <img className="main-img" src="rock-paper-scissors.png" alt="screenshot of rock-paper-scissors" />
                        </a>
                    </div>
                    <div class="card-body">
                        <ul className="skills-used">
                            <li>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png?20120221235433" alt="used javascript" />
                            </li>
                        </ul>
                        <p class="card-text">"Rock-Paper-Scissors" app made with vanilla JS</p>
                        <p className="git-link"><a href="https://github.com/KhaledAjaj2026/rock-paper-scissors" className="git-link_anchor" target="_blank" rel="noreferrer">GitHub repo</a></p>
                    </div>
                </div>
                {/* Empty Project Card: Coming Soon */}
                <div className="project-card">
                    <div class="card-body">
                        <h4 id="project-unfinished" class="card-title general-title">Coming Soon</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
