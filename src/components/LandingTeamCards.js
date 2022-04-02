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
                    <a href= {props.fb} target={"_blank"} rel = "noreferrer">
                        <FacebookOutlined className="team-socials-logo"/>
                    </a>
                    <a href= {props.insta} target={"_blank"} rel = "noreferrer">
                        <Instagram className="team-socials-logo"/>
                    </a>
                    <a href= {props.github} target={"_blank"} rel = "noreferrer">
                        <GitHub className="team-socials-logo"/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default LandingTeamCards