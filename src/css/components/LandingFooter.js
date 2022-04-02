import React from "react";

const LandingFooter = () => {
    const date = new Date()
    const year = date.getFullYear()
    return <>
        <footer className="landing-footer">
            <div className="landing-footer-desc">
                <div className="footer-desc-about">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dicta iusto dolores molestiae, magnam ducimus cum repellat quae nemo quaerat aut totam voluptatum sequi optio. Obcaecati rem optio architecto aperiam neque saepe modi culpa, sit necessitatibus commodi libero quos laborum enim cum repellat vel ullam et quisquam consequuntur laboriosam fugit nostrum quas ex. Debitis animi</p>
                </div>
                <div className="footer-desc-right">
                    <div className="footer-desc-quickLinks">
                        <h2>Quick Links</h2>
                        <ul className="footer-desc-links">
                            <li>Home</li>
                            <li>About</li>
                            <li>Features</li>
                            <li>Team</li>
                            <li>Login</li>
                        </ul>
                    </div>
                    <div className="footer-desc-followUs">
                        <h2>Follow Us</h2>
                        <div className="footer-social-links">
                            <a href="https://www.facebook.com">Facebook</a>
                            <a href="https://www.facebook.com">Instagram</a>
                            <a href="https://www.facebook.com">Github</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="landing-footer-bottom">
                <div className="footer-bottom-left">
                    <h2><span className="footer-bottom-title">Speak It Out</span> is a part of web sorcerers company.</h2>
                </div>
                <div className="footer-bottom-right">
                    <h2>&copy; {year} All Rights Reserved</h2>
                </div>
            </div>
        </footer>
    </>
}

export default LandingFooter