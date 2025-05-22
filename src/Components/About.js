import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MailSubmition from './MailSubmition';
import Header from './Headers/Header';
import Footer from './Footer';

const About = ({LoginisActive, SignUpisActive, LoginClick, SignUpClick, overlayIsActive}) => {
    
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <>
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
                    <Link to={'/about'} className='mx-2 marketing-page-nav-bar-link' style={{ color: "#EC1C27" }}>ABOUT</Link>
                    <Link to={'/medicare-plan'} className='mx-2 marketing-page-nav-bar-link'>MEDICARE PLAN</Link>
                    <Link to={'/get-contracted'} className='mx-2 marketing-page-nav-bar-link'>GET CONTRACTED</Link>
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

            <div className='video-container'>
                <div className="about-overlay">
                    <h3>Who We Are</h3>
                    <h4>Boomers Insurance, a leading Medicare Field Marketing Organization (FMO)</h4>
                    <div className="about-overlay-line"></div>
                    <p>Based out of Downey, California, Boomers Insurance specializes in providing training, support, and technology to independent insurance agents, helping them to effectively market and sell Medicare insurance products in 46 states. The company offers a range of Medicare Advantage, Medicare Supplement, and other Medicare-related products from leading insurance carriers</p>
                </div>
                <iframe
                    src="https://www.youtube.com/embed/v0ZG817c9kY?controls=1&rel=0&playsinline=0&modestbranding=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fboomersacademy.com&widgetid=1&forigin=https%3A%2F%2Fboomersacademy.com%2Fabout%2F&aoriginsup=1&gporigin=https%3A%2F%2Fboomersacademy.com%2Ftraining%2F&vf=2"
                    title="YouTube video"
                    className='about-video'
                    allowFullScreen
                ></iframe>
            </div>

            {/* Section-6 (Medicare) */}
            <div className="Section-6-bg Section-6-bg-about  pt-3"><div className='Section-6-bg-img'></div></div>
            <div className="Section-6-wrap mail-submit-about">
                <MailSubmition/>
            </div>


            {/* Footer */}
            <Footer/>

        </>
    )
}

export default About
