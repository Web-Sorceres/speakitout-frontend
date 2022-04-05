import {React, useState} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const LandingNavbar = () => {
    const [hamMenu, setHamMenu] = useState(false);
    const handleHamMenu = () => {
        !hamMenu ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "visible"
        setHamMenu((prevState) => {
            return !prevState;
        });
    };
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
            <div className="landingNavSmall">
                        {hamMenu ? (
                            <CloseIcon className="landingNavHam" onClick={handleHamMenu} />
                        ) : (
                            <MenuIcon className="landingNavHam" onClick={handleHamMenu} />
                        )}
                        {hamMenu && (
                            <div className="landingNavSmallOverlay">
                                <ul className="navMenuItemsSmall">
                                    <li className="navmenuItemSmallOne">
                                        <a href="/">Home</a>
                                    </li>
                                    <li className="navmenuItemSmallTwo">
                                        <a href="/">Features</a>
                                    </li>
                                    <li className="navmenuItemSmallThree">
                                        <a href="/">About</a>
                                    </li>
                                    <li className="navmenuItemSmallFour">
                                        <a href="/">Contact</a>
                                    </li>
                                    <li className="navmenuItemSmallFive">
                                        <a href="/">Login</a>
                                    </li>
                                    <li className="navmenuItemSmallSix">
                                        <a href="/">Sign Up</a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
        </>
    )
}

export default LandingNavbar