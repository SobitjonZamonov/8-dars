import React from "react";
import "./hero-card.css";
import hero_img from "../../assets/Group19.svg";

export const Hero = () => {
    return (
        <div className="container_hero">
            <div className="hero__info">
                <h2>Bring everyone together to build better products.</h2>
                <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                <button>Get Started</button>
            </div>
            <div className="hero__image">
                <img src={hero_img} alt="heroimg" />
            </div>
        </div>
    )
}