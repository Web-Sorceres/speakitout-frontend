import React from "react";
import { FacebookOutlined, Instagram, GitHub } from "@mui/icons-material";

const LandingTeamCards = ({ ...props }) => {
    const imageName = props.name.split(" ")[0].toLowerCase()
    return (
        <>
            <div className="team-card-container">
                <div className="team-card-desc">
                    <img src= {`assets/${imageName}.jpg`} alt="" />
                    <h2>{props.name}</h2>
                    <p>{props.role}</p>
                </div>
                <div className="team-card-socials">
                    <a href= "" target={"_blank"}>
                        <FacebookOutlined className="team-socials-logo"/>
                    </a>
                    <a href="" target={"_blank"}>
                        <Instagram className="team-socials-logo"/>
                    </a>
                    <a href="" target={"_blank"}>
                        <GitHub className="team-socials-logo"/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default LandingTeamCards