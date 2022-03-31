import React from "react";
import PeopleIcon from '@mui/icons-material/People';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const LandingFeatures = () => {
    return (
        <>
            <div className="landing-features-container">
                <div className="landing-features-heading">
                    <h1>Key Features</h1>
                    <p>Reason why can it be the best for you to confess on our site.</p>
                </div>
                <div className="landing-features">
                    <div className="landing-feature community">
                        <div className="landing-feature-logo">
                            <PeopleIcon className="landing-feature-logo-img"/>
                            <h2>Community</h2>
                        </div>
                        <div className="landing-feature-desc">
                            <p>We bring together all the students together in one place with a common place for all of them to confess.</p>
                            <button>Read More</button>
                        </div>
                    </div>
                    <div className="landing-feature privacy">
                        <div className="landing-feature-logo">
                            <LockIcon className="landing-feature-logo-img"/>
                            <h2>Privacy</h2>
                        </div>
                        <div className="landing-feature-desc">
                            <p>We respect your privacy, hence we have come up with a fair user privacy policyand terms of use.</p>                           
                            <button>Read More</button>
                        </div>
                    </div>
                    <div className="landing-feature identity">
                        <div className="landing-feature-logo">
                            <VisibilityOffIcon className="landing-feature-logo-img"/>
                            <h2>Hidden Identity</h2>
                        </div>
                        <div className="landing-feature-desc">
                            <p>You can be yourself to the fullest and express yourself as your identity will be completely hidden.</p>
                            <button>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingFeatures