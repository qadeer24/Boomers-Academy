import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MailSubmition from './MailSubmition';
import Header from './Headers/Header';
import Footer from './Footer';

const GetContracted = ({ LoginisActive, SignUpisActive, LoginClick, SignUpClick, overlayIsActive }) => {

    const [isOpen, setIsOpen] = useState(true);

    const [Responsive, setResponsive] = useState(true);
    const ResponsiveClick = () => {
        setResponsive(!Responsive);
    };

    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <div className='getContracted'>

                {/* Header */}
                <Header
                    overlayIsActive={overlayIsActive}
                    LoginisActive={LoginisActive}
                    SignUpisActive={SignUpisActive}
                    LoginClick={LoginClick}
                    SignUpClick={SignUpClick}
                />

                {/* Nav-Bar */}
                <div className="landing-page-nav-bar mx-5 px-5">
                    <Link to={'/'} className='mx-3'>
                        <img src="Images\logo.svg" alt="" />
                    </Link>
                    <div className='d-flex landing-page-nav-bar-Links my-5'>
                        <Link to={'/about'} className='mx-2 marketing-page-nav-bar-link'>ABOUT</Link>
                        <Link to={'/medicare-plan'} className='mx-2 marketing-page-nav-bar-link'>MEDICARE PLAN</Link>
                        <Link to={'/get-contracted'} className='mx-2 marketing-page-nav-bar-link' style={{ color: "#EC1C27" }}>GET CONTRACTED</Link>
                        <Link to={'/marketing'} className='mx-2 marketing-page-nav-bar-link'>MARKETING</Link>
                        <Link to={'/training'} className='mx-2 marketing-page-nav-bar-link'>TRAINING</Link>
                        <Link to={'/'} className='ms-2 marketing-page-nav-bar-link'>TECHNOLOGY</Link>
                    </div>
                </div>
                {/* Nav-bar for Mobile */}
                <div className="landing-page-nav-bar-responsive my-4">
                    <Link to={'/'} className='mx-4'>
                        <img src="Images\logo.svg" alt="" />
                    </Link>
                    {/* Hamburger Icon */}
                    <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                        <img src={isOpen ? '/Icons/xmark-solid.svg' : '/Icons/bars-solid.svg'} />
                    </div>

                    {/* Navigation Menu */}
                    <nav className={`menu ${isOpen ? "active" : ""}`}>
                        <ul>
                            <li style={{ borderBottom: "1px solid grey" }}><Link to={'/about'} className='mx-4 landing-page-nav-bar-link'>ABOUT</Link></li>
                            <li style={{ borderBottom: "1px solid grey" }}><Link to={'/medicare-plan'} className='mx-4 landing-page-nav-bar-link'>MEDICARE PLAN</Link></li>
                            <li style={{ borderBottom: "1px solid grey" }}><Link to={'/get-contracted'} className='mx-4 landing-page-nav-bar-link'>GET CONTRACTED</Link></li>
                            <li style={{ borderBottom: "1px solid grey" }}><Link to={'/marketing'} className='mx-4 landing-page-nav-bar-link'>MARKETING</Link></li>
                            <li style={{ borderBottom: "1px solid grey" }}><Link to={'/training'} className='mx-4 landing-page-nav-bar-link'>TRAINING</Link></li>
                            <li style={{ borderBottom: "1px solid grey" }}><Link to={'/'} className='ms-4 landing-page-nav-bar-link'>TECHNOLOGY</Link></li>
                        </ul>
                    </nav>
                </div>

                {/* Section-6 (Medicare)*/}
                <div className={overlayIsActive ? "negative-z-index" : " "}>
                    <div className="Section-6-bg pt-3"><div className='Section-6-bg-img'></div></div>
                    <div className="Section-6-wrap mail-submit-get-contracted" >
                        <MailSubmition />
                    </div>
                </div>

                {/* Footer */}
                <Footer />

                <div className="app">

                    {isOpen && (
                        <>
                            <div className="overlay" onClick={() => setIsOpen(false)} />
                            <div className="popup">
                                <div className="popup-scroll">
                                    <div onClick={() => setIsOpen(false)} className='get-contracted-popup-close'>
                                        <img src="Icons\xmark-solid.svg" alt="" />
                                    </div>
                                    <h3>Online Contracting System</h3>
                                    <p className='py-4'>Welcome to Boomers insurance Online Contracting System, powered by SuranceBay. We are pleased to provide agents an opportunity to contract with multiple Medicare carriers with one-click and at their convenience.</p>
                                    <p>The online contracting process is simple and easy! To prepare for your contracting process, you will need to have a copy of your E&O insurance (PDF format recommended), a copy of a voided check (PDF format recommended), and your state license number(s).</p>
                                    <p className='py-3'>Click below to access SuranceBay.</p>
                                    <p>Please remember to save the username and password for Surancebay and all your carriers portal websites. If you are unsure of your credentials to access your contracting portal, please visit the login page and click on ‘Password Recovery.’ If you have never created an account with SuranceBay & Boomers Insurance , you will need to click on ‘New User.’</p>
                                    <p className='pt-3'>If you experience any issues during the contracting process and have questions about how to proceed, please contact our dedicated Contracting</p>
                                    <p className='pb-3'>Liaisons at 1-800-815-1943.</p>
                                    <button className='get-contracted-button'>Start Contracting</button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>



            <div className='getContracted-responsive'>

                <div className={Responsive ? "d-none" : ""}>
                    {/* Header */}
                    <div className="header-landing-page" style={{ backgroundColor: "#f9cc3e" }}>

                        {/* Header-Right-Side */}
                        <div className='Registration-Header-Right-Side'>
                            <div className='Registration-Header-Right-Side-img'></div>
                            <div> 1-800-815-1943(TTY:711)</div>
                        </div>

                        {/* Header-Right-Side */}
                        <div className='Registration-Header-left-Side'>
                            <div onClick={LoginClick} className='Registration-Header-left-Side-col2 d-flex mx-4' style={{ textDecoration: "none", color: "white" }}>
                                <div className='Registration-Header-left-Side-col2-img'></div>
                                <div style={{ cursor: "pointer" }}>Sign in</div>
                            </div>
                        </div>

                    </div>

                    {/* Nav-bar for Mobile */}
                    <div className="landing-page-nav-bar-responsive my-4">
                        <div className='mx-4'>
                            <img src="Images\logo.svg" alt="" />
                        </div>
                        {/* Hamburger Icon */}
                        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                            <img src={isOpen ? '/Icons/bars-solid.svg' : '/Icons/xmark-solid.svg'} />
                        </div>

                        {/* Navigation Menu */}
                        <nav className={`menu ${isOpen ? "" : "active"}`}>
                            <ul>
                                <li style={{ borderBottom: "1px solid grey" }}><Link to={'/about'} className='mx-4 landing-page-nav-bar-link'>ABOUT</Link></li>
                                <li style={{ borderBottom: "1px solid grey" }}><Link to={'/medicare-plan'} className='mx-4 landing-page-nav-bar-link'>MEDICARE PLAN</Link></li>
                                <li style={{ borderBottom: "1px solid grey" }}><Link to={'/get-contracted'} className='mx-4 landing-page-nav-bar-link'>GET CONTRACTED</Link></li>
                                <li style={{ borderBottom: "1px solid grey" }}><Link to={'/marketing'} className='mx-4 landing-page-nav-bar-link'>MARKETING</Link></li>
                                <li style={{ borderBottom: "1px solid grey" }}><Link to={'/training'} className='mx-4 landing-page-nav-bar-link'>TRAINING</Link></li>
                                <li style={{ borderBottom: "1px solid grey" }}><Link to={'/'} className='ms-4 landing-page-nav-bar-link'>TECHNOLOGY</Link></li>
                            </ul>
                        </nav>
                    </div>

                    {/* Section-6 (Medicare)*/}
                    <div className={isOpen ? "" : "get-contracted-sec-6-margin"}>
                        <div className="Section-6-bg pt-3"><div className='Section-6-bg-img'></div></div>
                        <div className="Section-6-wrap">
                            <div className="mail-submit-get-contracted ">
                                <div className='section-6-img mt-2'><img src="Icons\envelope-open-text-solid.svg" alt="" /></div>
                                <div className="Section-6-text ms-4 me-2">
                                    <h5>Subsribe To Our Newsletter</h5>
                                    <p>Receive weekly newsletter coaching materials, new courses, popular book and much more !</p>
                                </div>
                                <input className="Section-6-input me-3" type="text" placeholder='Email Address' />
                                <button className='Section-6-button my-2'>Submit</button>

                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <Footer />

                </div>


                <div className={Responsive ? "app" : "d-none app"}>

                    {isOpen && (
                        <>
                            <div />
                            <div>
                                <div className="popup-scroll">
                                    <div onClick={ResponsiveClick} className='get-contracted-popup-close'>
                                        <img src="Icons\xmark-solid.svg" alt="" />
                                    </div>
                                    <h3>Online Contracting System</h3>
                                    <p className='py-4'>Welcome to Boomers insurance Online Contracting System, powered by SuranceBay. We are pleased to provide agents an opportunity to contract with multiple Medicare carriers with one-click and at their convenience.</p>
                                    <p>The online contracting process is simple and easy! To prepare for your contracting process, you will need to have a copy of your E&O insurance (PDF format recommended), a copy of a voided check (PDF format recommended), and your state license number(s).</p>
                                    <p className='py-3'>Click below to access SuranceBay.</p>
                                    <p>Please remember to save the username and password for Surancebay and all your carriers portal websites. If you are unsure of your credentials to access your contracting portal, please visit the login page and click on ‘Password Recovery.’ If you have never created an account with SuranceBay & Boomers Insurance , you will need to click on ‘New User.’</p>
                                    <p className='pt-3'>If you experience any issues during the contracting process and have questions about how to proceed, please contact our dedicated Contracting</p>
                                    <p className='pb-3'>Liaisons at 1-800-815-1943.</p>
                                    <button className='get-contracted-button'>Start Contracting</button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>


        </>
    )
}

export default GetContracted
