import React from "react";
import "./footer-card.css"
import logo from "../../assets/Group6(2).svg"
import social_networks from "../../assets/Group27.svg"

export const Footer = () => {
    return (
        <div className="footer_container">
            <div className="_footer">
                <div className="row1">
                    <img  className="" src={logo} alt="logo" />
                    <br />
                    <img  className="social_media" src={social_networks} alt="social_networks" />
                </div>
                <div className="row2">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>
                <div className="row3">
                    <ul>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Community</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="row4">
                    <div>
                        <input type="text"  placeholder="Updates in your inbox…"/>
                        <button>Go</button>
                    </div>
                    <h3>Copyright 2020. All Rights Reserved</h3>
                </div>
            </div>
        </div>
    )
}