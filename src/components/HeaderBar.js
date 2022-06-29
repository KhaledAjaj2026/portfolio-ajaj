import React from 'react'

function HeaderBar() {
    return (
        <div className="header-bar-container">
           <div className="name">
                <h2 className="khaled">khaled</h2>
            </div>
            <div className="menu-items">
                <nav>
                    <a href="#top" className="item">
                        <h4>Home</h4>
                    </a>
                    <a href="#skills" className="item">
                        <h4>Skills</h4>
                    </a>
                    <a href="#projects" className="item">
                        <h4>Projects</h4>
                    </a>
                    <a href="#contact" className="item">
                        <h4>Contact</h4>
                    </a>
                </nav>
            </div> 
        </div>
    )
}

export default HeaderBar
