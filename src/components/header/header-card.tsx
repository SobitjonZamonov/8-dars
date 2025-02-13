import React from "react";
import "./header-card.css";
import logo from '../../assets/Group6.svg';

export const Header = () => {
    return (
        <div className="container_header">
            <div className="header__block">
                <a href=""><img src={logo} alt="" /></a>
                <ul>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Community</a></li>
                </ul>
                <button>Get Started</button>
            </div>
        </div>
    )
}  