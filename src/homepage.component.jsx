import React, { } from "react";

import "./homepage.style.scss"

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div menu-item>
                <div className="content">
                    <div className="title">
                        HATS
                    </div>
                    <span className="subtitle">little</span>
                </div>
            </div>
            <div menu-item>
                <div className="content">
                    <div className="title">
                        SHOES
                    </div>
                    <span className="subtitle">medium </span>
                </div>
            </div>
            <div menu-item>
                <div className="content">
                    <div className="title">
                        CLOTHING
                    </div>
                    <span className="subtitle">big</span>
                </div>
            </div>
            <div menu-item>
                <div className="content">
                    <div className="title">
                        SHOES
                    </div>
                    <span className="subtitle">medium </span>
                </div>
            </div>
            <div menu-item>
                <div className="content">
                    <div className="title">
                        SHOES
                    </div>
                    <span className="subtitle">medium </span>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;