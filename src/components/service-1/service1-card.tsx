import React from "react";
import "./service1-card.css"

export const Service1 = () => {
    return (
        <div className="container_service1">
            <div className="_service1">
                <div className="service1_info">
                    <h2>What’s different about Manage?</h2>
                    <p>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams. </p>
                </div>
                <div className="wins">
                    <div className="service1_window1">
                        <div>
                            <button>01</button>
                        </div>
                        <div>
                            <h3>Track company-wide progress</h3>
                            <p>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
                        </div>
                    </div>
                    <div className="service1_window2">
                        <div>
                            <button>02</button>
                        </div>
                        <div>
                            <h3>Advanced built-in reports</h3>
                            <p>Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
                        </div>
                    </div>
                    <div className="service1_window3">
                        <div>
                            <button>03</button>
                        </div>
                        <div>
                            <h3>Everything you need in one place</h3>
                            <p>Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
                        </div>
                    </div>    
                </div>    
            </div>
        </div>
    )
}

