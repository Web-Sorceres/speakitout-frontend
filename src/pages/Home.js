import React from 'react';
import LandingNavbar from '../components/LandingNavbar';
import LandingFeatures from '../components/LandingFeatures';
import LandingTeamCards from '../components/LandingTeamCards'
import team from '../data/teaminfo';
import LandingFooter from '../components/LandingFooter';

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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quaerat iusto asperiores voluptas quo. Et, doloremque molestiae sunt maiores deserunt eius deleniti, earum debitis necessitatibus est numquam consequuntur sapiente! Dicta.</p>
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
            <div className="landing-about">
                <h2>About</h2>
                <div className="landing-about-container">
                    <div className="landing-about-left">
                        <img src="assets/phoneabout.png" alt="" />
                    </div>
                    <div className="landing-about-right">
                        <h3>About our app</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda officiis non ex architecto necessitatibus consectetur ea debitis, harum, quae neque quibusdam eum, maiores culpa reprehenderit cupiditate quis saepe accusantium magnam dolorem quisquam error aut. Nostrum at illum natus, assumenda voluptatem illo odio culpa doloremque molestiae odit deleniti dolore perferendis dolorem. Obcaecati ab maiores cumque, non quas voluptatibus iusto earum deserunt?<br /> <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque perferendis molestias cum, asperiores cumque nostrum blanditiis velit necessitatibus tempore aperiam.</p>
                    </div>
                </div>
            </div>
            <div className="landing-newsletter">
                <div className="landing-newsletter-heading">
                    <h2>Subscribe to our newsletter</h2>
                    <p>Never miss any exciting updates and news(maal masala).</p>
                </div>
                <form action="" className='landing-newsletter-form'>
                    <input type="email" placeholder='Enter your email' required />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
            <div className="team-card-wrapper">
                <h2 className='team-card-heading'>Our Team</h2>
                <div className="team-card">
                    {team.map((item, index) =>
                        <LandingTeamCards
                            key={index + 1}
                            name={item.name}
                            role={item.role}
                            fb={item.facebook}
                            insta={item.instagram}
                            github={item.github}
                        />
                    )}
                </div>
            </div>
            <LandingFooter />
        </div>
    );
}

export default Home;