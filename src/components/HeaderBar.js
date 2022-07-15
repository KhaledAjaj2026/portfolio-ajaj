import React, { PureComponent } from 'react'

class HeaderBar extends PureComponent {

    menuClick() {
        const x = document.getElementById("menu-items");
        if (x.style.display === "block") {
          x.style.display = "none";
          } else {
            x.style.display = "block";
        }
      }

    render() {
        return (
            <div className="header-bar-container">
                <div clasNames="name">
                    <h2 className="khaled">khaled</h2>
                </div>
                <div id="menu-items">
                    <a href="#top" className="item" onClick={this.menuClick}>
                        <h4>Home</h4>
                    </a>
                    <a href="#skills" className="item" onClick={this.menuClick}>
                        <h4>Skills</h4>
                    </a>
                    <a href="#projects" className="item" onClick={this.menuClick}>
                        <h4>Projects</h4>
                    </a>
                    <a href="#contact" className="item" onClick={this.menuClick}>
                        <h4>Contact</h4>
                    </a>
                </div>
                <div id="icon" onClick={this.menuClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list"
                        viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </div>
            </div>
        )
    }
}

export default HeaderBar
