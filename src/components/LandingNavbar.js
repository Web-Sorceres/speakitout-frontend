import React from "react";

const LandingNavbar = () => {
    return (
        <>
            <div className="landing-navbar">
                <div className="logo">
                    Speak It Out
                </div>
                <ul className="landing-menu-items">
                    <li>Home</li>
                    <li>Features</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Login</li>
                    <button>Sign Up</button>
                </ul>
            </div>
        </>
    )
}

export default LandingNavbar