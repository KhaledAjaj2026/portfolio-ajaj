import React from 'react'

function Contact() {
    return (
        <div data-aos="fade-down" data-aos-duration="700">
            <h3 id="contact" className="general-title">Contact</h3>
            <div className="container">
                <div className="forms">
                    <form>
                        <div>
                            <label for="contact-name" className="_label">Name:</label>
                            <input type="text" id="contact-name" placeholder="Enter Name"></input>
                            <label for="contact-email" className="_label">Email:</label>
                            <input type="email" id="contact-email" placeholder="Enter Email"></input>
                        </div>
                        <label for="contact-msg" className="_label msg">Message:</label>
                        <textarea id="contact-msg" placeholder="Type message here..." rows="8" wrap="hard" max-length="500"></textarea>
                        <button type="submit" id="contact-submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
