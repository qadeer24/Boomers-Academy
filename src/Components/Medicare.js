import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MailSubmition from './MailSubmition';
import Header from './Headers/Header';
import Footer from './Footer';


const Medicare = ({LoginisActive, SignUpisActive, LoginClick, SignUpClick, overlayIsActive}) => {


    const [isOpen, setIsOpen] = useState(false);

    const [isSlid, setIsSlid] = useState(false);

    const handleSlide = () => {
        setIsSlid(!isSlid);
    };

    const divStyle = {
        width: "200px",
        height: "100px",
        backgroundColor: "lightblue",
        position: "relative",
        transition: "transform 0.5s ease",
        transform: isSlid ? "translateX(200px)" : "translateX(0)"
    };
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
                    <Link to={'/about'} className='mx-2 marketing-page-nav-bar-link'>ABOUT</Link>
                    <Link to={'/medicare-plan'} className='mx-2 marketing-page-nav-bar-link' style={{ color: "#EC1C27" }}>MEDICARE PLAN</Link>
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


            {/* heading */}
            <div className='medicare-heading'>
                <h1>Medicare Plan Carriers</h1>
                <p>We offer a range of Medicare Advantage, Medicare Supplement, and other Medicare-related products from leading insurance carriers.</p>
            </div>

            {/* search bar and total records on page */}
            <div className='d-flex justify-content-between mx-3'>
                <input type="text" className='medicare-search-bar' placeholder='Search...' />
                <div className='medicare-dropdown' style={{ color: "#3A3A3A" }}>
                    <div className="mt-1">Show Records:</div>
                    <div class="dropdown">
                        <button class={ overlayIsActive ? 'negative-z-index dropdown-toggle medicare-dropdown-button' : " dropdown-toggle medicare-dropdown-button" } type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
            <div className=''>
                <div className="medicare-table">

                    {/* table-header */}
                    <div className="medicare-table-header">
                        <div className='col-1 col-1-header' style={{ backgroundColor: "#FD1A2A" }}><img src="Icons\arrow-down-wide-short-solid.svg" alt="" /> Carrier Name <img src="Icons\sort-white.svg" className='ms-4' alt="" /></div>
                        <div className='col-2 col-2-header' style={{ backgroundColor: "#F9CC3E" }}>Broker Support Phone <img src="Icons\sort-black.svg" className='ms-4' alt="" /></div>
                        <div className='col-3 col-3-header' style={{ backgroundColor: "#FD1A2A" }}>Broker Portal Link <img src="Icons\sort-white.svg" alt="" /></div>
                        <div className='col-4 col-4-header' style={{ backgroundColor: "#F9CC3E" }}>Provider Search Link <img src="Icons\sort-black.svg" alt="" /></div>
                        <div className='col-5 col-5-header' style={{ backgroundColor: "#FD1A2A" }}>2023 Certification Instructions <img src="Icons\sort-white.svg" alt="" /></div>
                        <div className='col-6 col-6-header' style={{ backgroundColor: "#F9CC3E" }}>2023 Certification Link <img src="Icons\sort-black.svg" className='ms-4' alt="" /></div>
                    </div>
                    {/* table-rows */}
                    <div className="rows">
                        <div className="row row-1" style={{ backgroundColor: "#EFEFEF" }}>
                            <div className="col-1 data-col data-col-1" style={{ margin: "0 0.34rem" }}>Aetna / SilverScript</div>
                            <div className="col-2 data-col data-col-1">866-714-9301</div>
                            <div className="col-3 data-col data-col-1">Login <img src="Icons\circle-right-solid.svg" className='medicare-table-login-img' alt="" /></div>
                            <div className="col-4 data-col data-col-1">Search</div>
                            <div className="col-5 data-col data-col-2">Must attend live webinar or in-person training. Online Exam. Exam Release Date – June 29</div>
                            <div className="col-6 data-col data-col-1">Login <img src="Icons\circle-right-solid.svg" className='medicare-table-login-img' alt="" /></div>
                        </div>
                        <div className="row row-2" style={{ backgroundColor: "#F2F2F2" }}>
                            <div className="col-1 data-col data-col-1" style={{ margin: "0 0.34rem", padding: "2rem 1rem" }}>Alignment Health Plan</div>
                            <div className="col-2 data-col data-col-1">888-793-5700</div>
                            <div className="col-3 data-col data-col-1">Login <img src="Icons\circle-right-solid.svg" className='medicare-table-login-img' alt="" /></div>
                            <div className="col-4 data-col data-col-1">Search</div>
                            <div className="col-5 data-col data-col-2">Must attend live webinar or in-person training. Online Exam. Exam Release Date – Aug 15th</div>
                            <div className="col-6 data-col data-col-1">Login <img src="Icons\circle-right-solid.svg" className='medicare-table-login-img' alt="" /></div>
                        </div>
                        <div className="row row-3" style={{ backgroundColor: "#EFEFEF" }}>
                            <div className="col-1 data-col data-col-1" style={{ margin: "0 0.34rem", padding: "2rem 1rem" }}>Anthem Blue Cross of CA</div>
                            <div className="col-2 data-col data-col-1">888-209-7839</div>
                            <div className="col-3 data-col data-col-1">Login <img src="Icons\circle-right-solid.svg" className='medicare-table-login-img' alt="" /></div>
                            <div className="col-4 data-col data-col-1">Search</div>
                            <div className="col-5 data-col data-col-3">Optional live webinar or in-person training. Online Exam. Please use access code: EXTERNAL-SELFREG. Exam Release Date – Jun 28th</div>
                            <div className="col-6 data-col data-col-1">Login <img src="Icons\circle-right-solid.svg" className='medicare-table-login-img' alt="" /></div>
                        </div>
                        <div className="row row-4" style={{ backgroundColor: "#F2F2F2" }}>
                            <div className="col-1 data-col data-col-1" style={{ margin: "0 0.34rem" }}>Aspire Health Plan</div>
                            <div className="col-2 data-col data-col-1">831-644-7408</div>
                            <div className="col-3 data-col data-col-1">Login <img src="Icons\circle-right-solid.svg" className='medicare-table-login-img' alt="" /></div>
                            <div className="col-4 data-col data-col-1">Search</div>
                            <div className="col-5 data-col data-col-2">Must attend live webinar or in-person training. Online Exam. Exam Release Date – TBD</div>
                            <div className="col-6 data-col data-col-1">Login <img src="Icons\circle-right-solid.svg" className='medicare-table-login-img' alt="" /></div>
                        </div>
                        <div className="row row-5" style={{ backgroundColor: "#EFEFEF" }}>
                            <div className="col-1 data-col data-col-1" style={{ margin: "0 0.34rem" }}>Blue Shield of CA</div>
                            <div className="col-2 data-col data-col-1">800-559-5905</div>
                            <div className="col-3 data-col data-col-1">Login <img src="Icons\circle-right-solid.svg" className='medicare-table-login-img' alt="" /></div>
                            <div className="col-4 data-col data-col-1">Search</div>
                            <div className="col-5 data-col data-col-2">Optional live webinar or in-person training. Online Exam. Exam Release Date – Jul 25th</div>
                            <div className="col-6 data-col data-col-1">Login <img src="Icons\circle-right-solid.svg" className='medicare-table-login-img' alt="" /></div>
                        </div>
                        <div className="row row-6" style={{ backgroundColor: "#F2F2F2" }}>
                            <div className="col-1 data-col data-col-1" style={{ margin: "0 0.34rem", padding: "1rem 1rem" }}>Brand New Day Health Plan</div>
                            <div className="col-2 data-col data-col-1">866-255-4795</div>
                            <div className="col-3 data-col data-col-1">Login <img src="Icons\circle-right-solid.svg" className='medicare-table-login-img' alt="" /></div>
                            <div className="col-4 data-col data-col-1">Search</div>
                            <div className="col-5 data-col data-col-2">Optional live webinar or in-person training. Online Exam. Exam Release Date – 2nd week of Aug</div>
                            <div className="col-6 data-col data-col-1">Login <img src="Icons\circle-right-solid.svg" className='medicare-table-login-img' alt="" /></div>
                        </div>
                        <div className="row row-7" style={{ backgroundColor: "#EFEFEF" }}>
                            <div className="col-1 data-col data-col-1" style={{ margin: "0 0.34rem", padding: "1rem 1rem" }}>CCA Health California</div>
                            <div className="col-2 data-col data-col-1">844-848-2548</div>
                            <div className="col-3 data-col data-col-1">Login <img src="Icons\circle-right-solid.svg" className='medicare-table-login-img' alt="" /></div>
                            <div className="col-4 data-col data-col-1">Search</div>
                            <div className="col-5 data-col data-col-1">Online Exam. Exam Release Date – Sept 1st</div>
                            <div className="col-6 data-col data-col-1">Login <img src="Icons\circle-right-solid.svg" className='medicare-table-login-img' alt="" /></div>
                        </div>
                        <div className="row row-8" style={{ backgroundColor: "#F2F2F2" }}>
                            <div className="col-1 data-col data-col-1" style={{ margin: "0 0.34rem" }}>Central Health Plan</div>
                            <div className="col-2 data-col data-col-1">626-388-2375</div>
                            <div className="col-3 data-col data-col-1">Login <img src="Icons\circle-right-solid.svg" className='medicare-table-login-img' alt="" /></div>
                            <div className="col-4 data-col data-col-1">Search</div>
                            <div className="col-5 data-col data-col-2">Optional live webinar or in-person training. Online Exam. Exam Release Date – 2nd week of Aug</div>
                            <div className="col-6 data-col data-col-1">Login <img src="Icons\circle-right-solid.svg" className='medicare-table-login-img' alt="" /></div>
                        </div>
                        <div className="row row-9" style={{ backgroundColor: "#EFEFEF" }}>
                            <div className="col-1 data-col data-col-1" style={{ margin: "0 0.34rem", padding: "1rem 1rem" }}>Clever Care Health Plan</div>
                            <div className="col-2 data-col data-col-1">877-525-3837</div>
                            <div className="col-3 data-col data-col-1">Login <img src="Icons\circle-right-solid.svg" className='medicare-table-login-img' alt="" /></div>
                            <div className="col-4 data-col data-col-1">Search</div>
                            <div className="col-5 data-col data-col-1">Online Exam.</div>
                            <div className="col-6 data-col data-col-1">Login <img src="Icons\circle-right-solid.svg" className='medicare-table-login-img' alt="" /></div>
                        </div>
                        <div className="row row-10" style={{ backgroundColor: "#F2F2F2" }}>
                            <div className="col-1 data-col data-col-1" style={{ margin: "0 0.34rem" }}>Humana</div>
                            <div className="col-2 data-col data-col-1">800-309-3163</div>
                            <div className="col-3 data-col data-col-1">Login <img src="Icons\circle-right-solid.svg" className='medicare-table-login-img' alt="" /></div>
                            <div className="col-4 data-col data-col-1">Search</div>
                            <div className="col-5 data-col data-col-2">Optional live webinar or in-person training. Online Exam. Exam Release Date – June 28th</div>
                            <div className="col-6 data-col data-col-1">Login <img src="Icons\circle-right-solid.svg" className='medicare-table-login-img' alt="" /></div>
                        </div>
                        <div className="row row-11" style={{ backgroundColor: "#EFEFEF" }}>
                            <div className="col-1 data-col data-col-1" style={{ margin: "0 0.34rem", padding: "1rem 1.5rem" }}>Imperial Health Plan</div>
                            <div className="col-2 data-col data-col-1">800-838-5197</div>
                            <div className="col-3 data-col data-col-1">Login <img src="Icons\circle-right-solid.svg" className='medicare-table-login-img' alt="" /></div>
                            <div className="col-4 data-col data-col-1">Search</div>
                            <div className="col-5 data-col data-col-2">Optional live webinar or in-person training. Online Exam. Exam Release Date – TBD</div>
                            <div className="col-6 data-col data-col-1">Login <img src="Icons\circle-right-solid.svg" className='medicare-table-login-img' alt="" /></div>
                        </div>
                        <div className="row row-12" style={{ backgroundColor: "#F2F2F2" }}>
                            <div className="col-1 data-col data-col-1" style={{ margin: "0 0.34rem", padding: "1rem 1rem" }}>Providence Health Plan</div>
                            <div className="col-2 data-col data-col-1">877-245-4077</div>
                            <div className="col-3 data-col data-col-1">Login <img src="Icons\circle-right-solid.svg" className='medicare-table-login-img' alt="" /></div>
                            <div className="col-4 data-col data-col-1">Search</div>
                            <div className="col-5 data-col data-col-1">Coming Soon.</div>
                            <div className="col-6 data-col data-col-1">Login <img src="Icons\circle-right-solid.svg" className='medicare-table-login-img' alt="" /></div>
                        </div>
                        <div className="row row-13" style={{ backgroundColor: "#EFEFEF" }}>
                            <div className="col-1 data-col data-col-1" style={{ margin: "0 0.34rem" }}>Scan Health Plan</div>
                            <div className="col-2 data-col data-col-1">888-445-2038</div>
                            <div className="col-3 data-col data-col-1">Login <img src="Icons\circle-right-solid.svg" className='medicare-table-login-img' alt="" /></div>
                            <div className="col-4 data-col data-col-1">Search</div>
                            <div className="col-5 data-col data-col-2">Optional live webinar or in-person training. Online Exam. Exam Release Date – Jul 6th</div>
                            <div className="col-6 data-col data-col-1">Login <img src="Icons\circle-right-solid.svg" className='medicare-table-login-img' alt="" /></div>
                        </div>
                        <div className="row row-14" style={{ backgroundColor: "#F2F2F2" }}>
                            <div className="col-1 data-col data-col-1" style={{ margin: "0 0.34rem" }}>United Health care</div>
                            <div className="col-2 data-col data-col-1">888-381-8581</div>
                            <div className="col-3 data-col data-col-1">Login <img src="Icons\circle-right-solid.svg" className='medicare-table-login-img' alt="" /></div>
                            <div className="col-4 data-col data-col-1">Search</div>
                            <div className="col-5 data-col data-col-1">Online Exam.</div>
                            <div className="col-6 data-col data-col-1">Login <img src="Icons\circle-right-solid.svg" className='medicare-table-login-img' alt="" /></div>
                        </div>
                        <div className="row row-15" style={{ backgroundColor: "#EFEFEF" }}>
                            <div className="col-1 data-col data-col-1" style={{ margin: "0 0.34rem", padding: "1rem 1rem" }}>WellCare Health Plan</div>
                            <div className="col-2 data-col data-col-1">866-822-1339</div>
                            <div className="col-3 data-col data-col-1">Login <img src="Icons\circle-right-solid.svg" className='medicare-table-login-img' alt="" /></div>
                            <div className="col-4 data-col data-col-1">Search</div>
                            <div className="col-5 data-col data-col-1">Online Exam.</div>
                            <div className="col-6 data-col data-col-1">Login <img src="Icons\circle-right-solid.svg" className='medicare-table-login-img' alt="" /></div>
                        </div>
                    </div>

                </div>
            </div>
            {/* Section-6 (Medicare)*/}
            <div className="Section-6-bg medicare-sec-6-wrap"><div className='Section-6-bg-img'></div></div>
            <div className="Section-6-wrap mail-submit-medicare">
                <MailSubmition/>
            </div>


            {/* Footer */}
            <Footer/>
        </>
    )
}

export default Medicare
