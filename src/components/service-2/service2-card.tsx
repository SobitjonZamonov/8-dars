import React from "react";
import service_photo from "../../assets/Oval(1).svg";
import "./service2-card.css";

export const Service2 = () => {
    return (
        <section className="testimonials">
            <h2>What they’ve said</h2>
            <div className="testimonial-container">
                <div className="testimonial">
                    <img src={service_photo} alt="Anisha Li" />
                    <h3>Anisha Li</h3>
                    <p>“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</p>
                </div>
                <div className="testimonial">
                    <img src={service_photo} alt="Ali Bravo" />
                    <h3>Ali Bravo</h3>
                    <p>“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”</p>
                </div>
            </div>
            <button className="btn">Get Started</button>
        </section>
    );
};
