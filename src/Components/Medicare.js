import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Medicare = () => {

    const socialsecurityLink = () => {
        window.location.href = "https://www.ssa.gov/medicare/part-d-extra-help";
    };
    const medicareLink = () => {
        window.location.href = "https://boomers-insurance.com/uploads/medicaree-handbook.pdf";
    };
    const dentalLink = () => {
        window.location.href = "https://brokers.dentalforeveryone.com/?id=3783564B-78F9-4F47-9606-D3A3D81A86EA";
    };
    const CoveredCaliforniaLink = () => {
        window.location.href = "https://www.coveredca.com/";
    };
    const FacebookLink = () => {
        window.location.href = "https://www.facebook.com/boomersacademy";
    };
    const twitterLink = () => {
        window.location.href = "https://twitter.com/boomer_medicare";
    };
    const YoutubeLink = () => {
        window.location.href = "https://www.youtube.com/channel/UCoddn59U3CZgPCxB6D70qsg/videosere";
    };
    const LinkedinLink = () => {
        window.location.href = "https://www.linkedin.com/company/boomers-insurance-services/";
    };
    const VimeoLink = () => {
        window.location.href = "https://vimeo.com/boomersacademy";
    };

    const [LoginisActive, setLoginIsActive] = useState(false);

    const LoginClick = () => {
        setLoginIsActive(!LoginisActive);
    };

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
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

            {/* Nav-Bar */}
            <div className="landing-page-nav-bar mx-5 px-5">
                <div className='mx-3'>
                    <img src="Images\logo.svg" alt="" />
                </div>
                <div className='d-flex landing-page-nav-bar-Links my-5'>
                    <Link to={'/'} className='mx-2 marketing-page-nav-bar-link'>ABOUT</Link>
                    <Link to={'/'} className='mx-2 marketing-page-nav-bar-link' style={{ color: "#EC1C27" }}>MEDICARE PLAN</Link>
                    <Link to={'/'} className='mx-2 marketing-page-nav-bar-link'>GET CONTRACTED</Link>
                    <Link to={'/'} className='mx-2 marketing-page-nav-bar-link'>MARKETING</Link>
                    <Link to={'/'} className='mx-2 marketing-page-nav-bar-link'>TRAINING</Link>
                    <Link to={'/'} className='ms-2 marketing-page-nav-bar-link'>TECHNOLOGY</Link>
                </div>
            </div>
            {/* Nav-bar for Mobile */}
            <div className="landing-page-nav-bar-responsive my-4">
                <div className='mx-4'>
                    <img src="Images\logo.svg" alt="" />
                </div>
                {/* Hamburger Icon */}
                <div className="hamburger my-4" onClick={() => setIsOpen(!isOpen)}>
                    <span className={isOpen ? "open-navbar" : "close-navbar"}></span>
                </div>

                {/* Navigation Menu */}
                <nav className={`menu ${isOpen ? "active" : ""}`}>
                    <ul>
                        <li style={{ borderBottom: "1px solid grey" }}><Link to={'/'} className='mx-4 landing-page-nav-bar-link'>ABOUT</Link></li>
                        <li style={{ borderBottom: "1px solid grey" }}><Link to={'/'} className='mx-4 landing-page-nav-bar-link'>MEDICARE PLAN</Link></li>
                        <li style={{ borderBottom: "1px solid grey" }}><Link to={'/'} className='mx-4 landing-page-nav-bar-link'>GET CONTRACTED</Link></li>
                        <li style={{ borderBottom: "1px solid grey" }}><Link to={'/'} className='mx-4 landing-page-nav-bar-link'>MARKETING</Link></li>
                        <li style={{ borderBottom: "1px solid grey" }}><Link to={'/'} className='mx-4 landing-page-nav-bar-link'>TRAINING</Link></li>
                        <li style={{ borderBottom: "1px solid grey" }}><Link to={'/'} className='ms-4 landing-page-nav-bar-link'>TECHNOLOGY</Link></li>
                    </ul>
                </nav>
            </div>

            {/* heading */}
            <div className='medicare-heading'>
                <h1>Medicare Plan Carriers</h1>
                <p>We offer a range of Medicare Advantage, Medicare Supplement, and other Medicare-related products from leading insurance carriers.</p>
            </div>

            {/* search bar and total records on page */}
            <div className='d-flex justify-content-between'>
                <input type="text" className='medicare-search-bar' placeholder='Search...' />
                <div className='d-flex' style={{color: "#3A3A3A"}}>
                    <div className="mt-1">Show Records:</div>
                    <div class="dropdown">
                        <button class=" dropdown-toggle medicare-dropdown-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <div className='medicare-dropdown-button-text'>All</div>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">1</a></li>
                            <li><a class="dropdown-item" href="#">2</a></li>
                            <li><a class="dropdown-item" href="#">3</a></li>
                            <li><a class="dropdown-item" href="#">4</a></li>
                            <li><a class="dropdown-item" href="#">5</a></li>
                            <li><a class="dropdown-item" href="#">6</a></li>
                            <li><a class="dropdown-item" href="#">7</a></li>
                            <li><a class="dropdown-item" href="#">8</a></li>
                            <li><a class="dropdown-item" href="#">9</a></li>
                            <li><a class="dropdown-item" href="#">10</a></li>
                            <li><a class="dropdown-item" href="#">11</a></li>
                            <li><a class="dropdown-item" href="#">12</a></li>
                            <li><a class="dropdown-item" href="#">13</a></li>
                            <li><a class="dropdown-item" href="#">14</a></li>
                        </ul>
                    </div>
                </div>
            </div>


            {/* table */}
        
            {/* table-header */}
            <div className="medicare-table-header">
                <div className='col-1 col-1-header' style={{backgroundColor:"#FD1A2A"}}><img src="Icons\arrow-down-wide-short-solid.svg" alt="" /> Carrier Name <img src="Icons\sort-white.svg" className='ms-4' alt="" /></div>
                <div className='col-2 col-2-header' style={{backgroundColor:"#F9CC3E"}}>Broker Support Phone <img src="Icons\sort-black.svg" className='ms-4' alt="" /></div>
                <div className='col-3 col-3-header' style={{backgroundColor:"#FD1A2A"}}>Broker Portal Link <img src="Icons\sort-white.svg" alt="" /></div>
                <div className='col-4 col-4-header' style={{backgroundColor:"#F9CC3E"}}>Provider Search Link <img src="Icons\sort-black.svg" alt="" /></div>
                <div className='col-5 col-5-header' style={{backgroundColor:"#FD1A2A"}}>2023 Certification Instructions <img src="Icons\sort-white.svg" alt="" /></div>
                <div className='col-6 col-6-header' style={{backgroundColor:"#F9CC3E"}}>2023 Certification Link <img src="Icons\sort-black.svg" className='ms-4' alt="" /></div>
            </div>
            {/* table-rows */}
            <div className="row" style={{backgroundColor:"#EFEFEF"}}>
                <div className="col-1 data-col" style={{margin: "0 0.34rem"}}>Aetna / SilverScript</div>
                <div className="col-2 data-col">866-714-9301</div>
                <div className="col-3 data-col">Login <img src="Icons\circle-right-solid.svg" className='medicare-table-login-img' alt="" /></div>
                <div className="col-4 data-col">Search</div>
                <div className="col-5 data-col">Must attend live webinar or in-person training. Online Exam. Exam Release Date – June 29</div>
                <div className="col-6 data-col">Login <img src="Icons\circle-right-solid.svg" className='medicare-table-login-img' alt="" /></div>
            </div>
        </>
    )
}

export default Medicare
