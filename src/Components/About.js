import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MailSubmition from './MailSubmition';
import Header from './Headers/Header';
import Footer from './Footer';

const About = ({
    LoginisActive,
    SignUpisActive,
    LoginClick,
    SignUpClick,
    overlayIsActive,
}) => {   
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
