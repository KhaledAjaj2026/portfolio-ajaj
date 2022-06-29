import React from 'react'
import Aos from 'aos'

Aos.init();

function HomePage() {
    return (
        <div className="homepage">
            <h1 className="full-name" data-aos="fade-down" data-aos-duration="700" data-aos-delay="300">I'm Khaled Ajaj</h1>
            <p id="pitch" data-aos="fade-down" data-aos-duration="700" data-aos-delay="300">A front-end developer, using my passion for <span>visual arts</span> to make creative solutions.</p>
            <div className="arrow-down"></div>
        </div>
    )
}

export default HomePage
