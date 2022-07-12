import React from 'react'

function Projects() {
    return (
        <div data-aos="fade-down" data-aos-duration="700">
            <h3 id="projects" className="general-title">Projects</h3>
            <div className="container">
                <div className="project-card">
                    <h4 id="project-1" class="card-title general-title">R+Co Replication</h4>
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
                <div className="project-card">
                    {/* <div className="image-window">
                        <a href="_blank">
                            <img className="main-img" src="" alt="coming soon" />
                        </a>
                    </div> */}
                    <div class="card-body">
                        <h4 id="project-2" class="card-title general-title">Coming Soon</h4>
                        {/* <ul className="skills-used">
                            <li>
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                            </li>
                        </ul>
                        <p class="card-text">More projects on the way!</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
