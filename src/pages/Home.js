import React from 'react';
import LandingNavbar from '../components/LandingNavbar';
import LandingFeatures from '../components/LandingFeatures';

function Home(props) {
    return (
        <div>
            <LandingNavbar />
            <div className="landing-header">
                <div className="landing-header-left">
                    <div className="landing-header-left-heading">
                        <h1>Confess With</h1>
                        <h1 className="secracy">Secracy</h1>
                    </div>
                    <div className="landing-header-left-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quaerat iusto asperiores voluptas quo. Et, doloremque molestiae sunt maiores deserunt eius deleniti, earum debitis necessitatibus est numquam consequuntur sapiente! Dicta.
                    </div>
                    <div className="landing-header-left-button">
                        <button>Log in</button>
                    </div>
                </div>
                <div className="landing-header-right">
                    <img src="assets/iPhone_X_MockUp_white-removebg-preview 1.png" alt="" />
                </div>
            </div>
            <LandingFeatures />
            <div className="landing-newsletter">
                <div className="landing-newsletter-heading">
                    <h2>Subscribe to our newsletter</h2>
                    <p>Never miss any exciting updates and news(maal masala).</p>
                </div>
                <div>
                    <form action="" className='landing-newsletter-form'>
                        <input type= "email" placeholder='Enter your email' required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;