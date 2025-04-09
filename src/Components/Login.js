import React, { useState } from "react";
import './style.css'
import { Link } from "react-router-dom";

const Login = () => {

    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <>
            <div style={{ backgroundColor: "black" }}>

                {/* Nav-Bar */}
                <div className="landing-page-nav-bar mx-5 px-5">
                    <div className='mx-3'>
                        <img src="Images\logo.svg" alt="" />
                    </div>
                    <div className='d-flex landing-page-nav-bar-Links my-5'>
                        <Link to={'/'} className='mx-2 landing-page-nav-bar-link'>ABOUT</Link>
                        <Link to={'/'} className='mx-2 landing-page-nav-bar-link'>MEDICARE PLAN</Link>
                        <Link to={'/'} className='mx-2 landing-page-nav-bar-link'>GET CONTRACTED</Link>
                        <Link to={'/'} className='mx-2 landing-page-nav-bar-link'>MARKETING</Link>
                        <Link to={'/'} className='mx-2 landing-page-nav-bar-link'>TRAINING</Link>
                        <Link to={'/'} className='ms-2 landing-page-nav-bar-link'>TECHNOLOGY</Link>
                    </div>
                    <div className="profile my-4">
                        {/* Image */}
                        <div className="profile-img  "></div>
                        {/* Hover */}
                        <div className="profile-hover">
                            {/* Hover-Name */}
                            <div className="d-flex ms-4">
                                <div className="profile-img-2  "></div>
                                <div className="mx-3">
                                    <span className="profile-span">John Doe</span>
                                    <p className="profile-text">carla51@rush.net</p>
                                </div>
                            </div>
                            {/* Progress-bar */}
                            <div>
                                <div className="d-flex progress-bar-wrap ms-4 mb-1">
                                    <div className="profile-text font-13">Profile Progress</div>
                                    <div className="profile-text font-13">50%</div>
                                </div>
                                <div className="progress-bar ms-4"><div className="progress-bar-fill"></div></div>
                                <div className="profile-option-border">
                                    <div className="profile-option font-13">
                                        <div className="default-profile-logo ms-4"></div>
                                        Profile
                                    </div>
                                </div>
                                <div className="Websites-options px-4">
                                    <p className="mt-3">Websites</p>
                                    <div className="website-1 d-flex">
                                        <div className="website-1-logo"></div>
                                        <div className="pt-1">Boomers Medicare Academy</div>
                                    </div>
                                    <div className="website-2 d-flex">
                                        <div className="website-2-logo"></div>
                                        <div className="pt-1">Boomers Insurance Services</div>
                                    </div>
                                </div>
                                <div className="Agencies-options px-4">
                                    <p className="mt-2">Agencies</p>
                                    <div className="Agencies-1 d-flex">
                                        <div className="website-2-logo"></div>
                                        <div className="pt-1">Boomers Insurance Services</div>
                                    </div>
                                </div>
                                <div className="dark-mode-toggle-btn mx-3 my-3">
                                    <div className="py-2 px-1 d-flex">
                                        <div className="dark-mode-toggle-btn-img"></div>
                                        <div className="dark-mode-text mt-1">Dark Mode</div>
                                        <label className="switch">
                                            <input type="checkbox" onChange={toggleDarkMode} checked={darkMode} />
                                            <span className="slider"></span>
                                        </label>
                                    </div>
                                </div>
                                <button className="log-out-button mx-4">Logout</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Login
