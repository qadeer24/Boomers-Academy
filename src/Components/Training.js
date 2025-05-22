import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MailSubmition from './MailSubmition';
import Footer from './Footer';
import Header from './Headers/Header';

const Training = ({ LoginisActive, SignUpisActive, LoginClick, SignUpClick, overlayIsActive }) => {

    const [isOpen, setIsOpen] = useState(false);


    const [goToGrid, setgoToGrid] = useState(false);
    const GridClick = () => {
        setgoToGrid(!goToGrid)
    }

    const ListClick = () => {
        setgoToGrid(!goToGrid)
    }


    const [Responsive, setResponsive] = useState(true);
    const ResponsiveClick = () => {
        setResponsive(!Responsive);
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
                    <Link to={'/medicare-plan'} className='mx-2 marketing-page-nav-bar-link'>MEDICARE PLAN</Link>
                    <Link to={'/get-contracted'} className='mx-2 marketing-page-nav-bar-link'>GET CONTRACTED</Link>
                    <Link to={'/marketing'} className='mx-2 marketing-page-nav-bar-link'>MARKETING</Link>
                    <Link to={'/training'} className='mx-2 marketing-page-nav-bar-link' style={{ color: "#EC1C27" }}>TRAINING</Link>
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

            <div className="training-container">

                {/* heading */}
                <div className='training-heading'>
                    <div>Home</div>
                    <img src="Icons\greater-than-solid.svg" alt="" />
                    <div>TRAINING</div>
                </div>

                <h1 className='py-3'>TRAINING</h1>

                {/* training search bar */}
                <div className="training-search-bar">
                    {/* search bar */}
                    <div className="d-flex">
                        <input type="text" className='training-search' placeholder='Search courses...' />
                        <div className="training-search-icon">
                            <img src="Icons\magnifying-glass-solid.svg" alt="" />
                        </div>
                    </div>

                    {/* dropdown */}
                    <div className="d-flex">
                        <div class="dropdown">
                            <button class={overlayIsActive ? "d-none" : "dropdown-toggle training-dropdown-button"} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <div className='training-dropdown-button-text'>Newly published</div>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Newly published</a></li>
                                <li><a class="dropdown-item" href="#">Title a-z</a></li>
                                <li><a class="dropdown-item" href="#">Title z-a</a></li>
                                <li><a class="dropdown-item" href="#">Price high to low</a></li>
                                <li><a class="dropdown-item" href="#">Price low to high</a></li>
                                <li><a class="dropdown-item" href="#">Popular</a></li>
                            </ul>
                        </div>
                        <div className={overlayIsActive ? "negative-z-index" : ""}>
                            <div className={goToGrid ? "training-view-options grid-selected d-flex" : "training-view-options grid-selected d-none"}>
                                <img src="Icons\grid-red.svg" alt="" />
                                <img onClick={ListClick} src="Icons\list-solid.svg" alt="" />
                            </div>
                        </div>

                        <div className={overlayIsActive ? "negative-z-index" : ""}>
                            <div className={goToGrid ? "training-view-options grid-selected d-none" : "training-view-options grid-selected d-flex"}>
                                <img onClick={GridClick} src="Icons\grid.svg" alt="" />
                                <img src="Icons\list-solid-red.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* training courses line by line */}
                <div className={goToGrid ? "goToGrid" : "goToList"}>
                    <div className="training-course">

                        <div className="training-course-img">
                            <img src="Images\product-1.webp" alt="" />
                        </div>

                        <div className="training-course-info">
                            <h3 className='training-header'>Humana’s Election Period Playbook</h3>
                            <p>by <span>Daniel Hernandez</span> in <span>New agent training</span></p>
                            <div className=" training-course-logos">
                                {/* duration */}
                                <div className='d-flex'>
                                    <img src="Icons\clock-regular.svg" alt="" />
                                    <div className='ms-2'>Lifetime</div>
                                </div>
                                {/* levels */}
                                <div className='d-flex'>
                                    <img src="Icons\level.svg" alt="" />
                                    <div className='ms-2'>All Levels</div>
                                </div>
                                {/* lessons */}
                                <div className='d-flex'>
                                    <img src="Icons\file.svg" alt="" />
                                    <div className='ms-2'>0 Lessons</div>
                                </div>
                                {/* quizzes */}
                                <div className='d-flex'>
                                    <img src="Icons\puzzle-piece-solid.svg" alt="" />
                                    <div className='ms-2'>0 Quizzes</div>
                                </div>
                                {/* Students */}
                                <div className='d-flex'>
                                    <img src="Icons\user-graduate-solid.svg" alt="" />
                                    <div className='ms-2'>8 Students  </div>
                                </div>
                            </div>
                            <p>January 18, 2023 – Humana’s Election Period Playbook gives you a holistic view of Medicare...</p>
                            <div className="d-flex justify-content-between mt-5 ">
                                <h4 className='training-free-label'>Free</h4>
                                <button className='training-button'>Read more</button>
                            </div>
                        </div>
                    </div>

                    <div className="training-course">

                        <div className="training-course-img">
                            <img src="Images\product-1.webp" alt="" />
                        </div>

                        <div className="training-course-info">
                            <h3 className='training-header'>Humana Playbook-Learn How You May Generate More Leads</h3>
                            <p>by <span>Daniel Hernandez</span> in <span>New agent training</span></p>
                            <div className=" training-course-logos">
                                {/* duration */}
                                <div className='d-flex'>
                                    <img src="Icons\clock-regular.svg" alt="" />
                                    <div className='ms-2'>Lifetime</div>
                                </div>
                                {/* levels */}
                                <div className='d-flex'>
                                    <img src="Icons\level.svg" alt="" />
                                    <div className='ms-2'>All Levels</div>
                                </div>
                                {/* lessons */}
                                <div className='d-flex'>
                                    <img src="Icons\file.svg" alt="" />
                                    <div className='ms-2'>0 Lessons</div>
                                </div>
                                {/* quizzes */}
                                <div className='d-flex'>
                                    <img src="Icons\puzzle-piece-solid.svg" alt="" />
                                    <div className='ms-2'>0 Quizzes</div>
                                </div>
                                {/* Students */}
                                <div className='d-flex'>
                                    <img src="Icons\user-graduate-solid.svg" alt="" />
                                    <div className='ms-2'>0 Students  </div>
                                </div>
                            </div>
                            <p>Learn How You May Generate More Leads September 29, 2022 – This deep-dive playbook helps...</p>
                            <div className="d-flex justify-content-between mt-5 ">
                                <h4 className='training-free-label'>Free</h4>
                                <button className='training-button'>Read more</button>
                            </div>
                        </div>
                    </div>

                    <div className="training-course">

                        <div className="training-course-img">
                            <img src="Images\product-1.webp" alt="" />
                        </div>

                        <div className="training-course-info">
                            <h3 className='training-header'>Humana’s Dual Eligible Special Needs Plans (DSNPs) Guide</h3>
                            <p>by <span>Daniel Hernandez</span> in <span>New agent training</span></p>
                            <div className=" training-course-logos">
                                {/* duration */}
                                <div className='d-flex'>
                                    <img src="Icons\clock-regular.svg" alt="" />
                                    <div className='ms-2'>Lifetime</div>
                                </div>
                                {/* levels */}
                                <div className='d-flex'>
                                    <img src="Icons\level.svg" alt="" />
                                    <div className='ms-2'>All Levels</div>
                                </div>
                                {/* lessons */}
                                <div className='d-flex'>
                                    <img src="Icons\file.svg" alt="" />
                                    <div className='ms-2'>0 Lessons</div>
                                </div>
                                {/* quizzes */}
                                <div className='d-flex'>
                                    <img src="Icons\puzzle-piece-solid.svg" alt="" />
                                    <div className='ms-2'>0 Quizzes</div>
                                </div>
                                {/* Students */}
                                <div className='d-flex'>
                                    <img src="Icons\user-graduate-solid.svg" alt="" />
                                    <div className='ms-2'>0 Students  </div>
                                </div>
                            </div>
                            <p>Humana’s Dual Eligible Special Needs Plans (DSNPs) Guide Click on 2023 2023 DSNP Playbook February...</p>
                            <div className="d-flex justify-content-between mt-5 ">
                                <h4 className='training-free-label'>Free</h4>
                                <button className='training-button'>Read more</button>
                            </div>
                        </div>
                    </div>

                    <div className="training-course">

                        <div className="training-course-img">
                            <img src="Images\product-1.webp" alt="" />
                        </div>

                        <div className="training-course-info">
                            <h3 className='training-header'>Social Media. Get Started using Linkedin.</h3>
                            <p>by <span>Daniel Hernandez</span> in <span>New agent training</span></p>
                            <div className=" training-course-logos">
                                {/* duration */}
                                <div className='d-flex'>
                                    <img src="Icons\clock-regular.svg" alt="" />
                                    <div className='ms-2'>10 Weeks</div>
                                </div>
                                {/* levels */}
                                <div className='d-flex'>
                                    <img src="Icons\level.svg" alt="" />
                                    <div className='ms-2'>All Levels</div>
                                </div>
                                {/* lessons */}
                                <div className='d-flex'>
                                    <img src="Icons\file.svg" alt="" />
                                    <div className='ms-2'>0 Lessons</div>
                                </div>
                                {/* quizzes */}
                                <div className='d-flex'>
                                    <img src="Icons\puzzle-piece-solid.svg" alt="" />
                                    <div className='ms-2'>0 Quizzes</div>
                                </div>
                                {/* Students */}
                                <div className='d-flex'>
                                    <img src="Icons\user-graduate-solid.svg" alt="" />
                                    <div className='ms-2'>11 Students  </div>
                                </div>
                            </div>
                            <p>Discussion on why social media is an important digital tactic for your brokerage.</p>
                            <div className="d-flex justify-content-between mt-5 ">
                                <h4 className='training-free-label'>Free</h4>
                                <button className='training-button'>Read more</button>
                            </div>
                        </div>
                    </div>

                    <div className="training-course">

                        <div className="training-course-img">
                            <img src="Images\product-1.webp" alt="" />
                        </div>

                        <div className="training-course-info">
                            <h3 className='training-header'>Get started marketing on Facebook</h3>
                            <p>by <span>Daniel Hernandez</span> in <span>New agent training</span></p>
                            <div className=" training-course-logos">
                                {/* duration */}
                                <div className='d-flex'>
                                    <img src="Icons\clock-regular.svg" alt="" />
                                    <div className='ms-2'>10 Weeks</div>
                                </div>
                                {/* levels */}
                                <div className='d-flex'>
                                    <img src="Icons\level.svg" alt="" />
                                    <div className='ms-2'>All Levels</div>
                                </div>
                                {/* lessons */}
                                <div className='d-flex'>
                                    <img src="Icons\file.svg" alt="" />
                                    <div className='ms-2'>0 Lessons</div>
                                </div>
                                {/* quizzes */}
                                <div className='d-flex'>
                                    <img src="Icons\puzzle-piece-solid.svg" alt="" />
                                    <div className='ms-2'>0 Quizzes</div>
                                </div>
                                {/* Students */}
                                <div className='d-flex'>
                                    <img src="Icons\user-graduate-solid.svg" alt="" />
                                    <div className='ms-2'>11 Students  </div>
                                </div>
                            </div>
                            <p>How to use Facebook to build your business.   https://www.brainshark.com/1/player/aetnams?fb=0&r3f1=dae09ecdc1cc9486d69cff9d97d0dadac798c5eb85d49ecfdcc69d9eeb8fcb9ef2cbcd908</p>
                            <div className="d-flex justify-content-between mt-5 ">
                                <h4 className='training-free-label'>Free</h4>
                                <button className='training-button'>Read more</button>
                            </div>
                        </div>
                    </div>
                </div>



                {/* training courses Grid */}
                <div className={goToGrid ? "goToList" : "goToGrid"}>

                    <div className="training-course-grid-page">
                        <div className="training-course-grid">

                            <div className="training-course-grid-img">
                                <img src="Images\product-1.webp" alt="" />
                            </div>

                            <div className="training-course-info-grid">
                                <h5 className='training-header'>Humana’s Election Period Playbook</h5>
                                <p>by <span>Daniel Hernandez</span></p>
                                <p>in <span>New agent training</span></p>
                                <div className=" training-course-grid-logos">
                                    {/* lessons */}
                                    <div className='d-flex'>
                                        <img src="Icons\file.svg" alt="" />
                                        <div className='ms-2'>0 Lessons</div>
                                    </div>
                                    {/* Students */}
                                    <div className='d-flex'>
                                        <img src="Icons\user-graduate-solid.svg" alt="" />
                                        <div className='ms-2'>8 Students  </div>
                                    </div>
                                </div>
                                <div className="">
                                    <h4 className='training-free-label'>Free</h4>
                                    <button className='training-grid-button'>Read more</button>
                                </div>
                            </div>
                        </div>

                        <div className="training-course-grid">

                            <div className="training-course-grid-img">
                                <img src="Images\product-1.webp" alt="" />
                            </div>

                            <div className="training-course-info-grid">
                                <h5 className='training-header'>Humana Playbook-Learn How You May Generate More Leads</h5>
                                <p>by <span>Daniel Hernandez</span></p>
                                <p>in <span>New agent training</span></p>
                                <div className=" training-course-grid-logos">
                                    {/* lessons */}
                                    <div className='d-flex'>
                                        <img src="Icons\file.svg" alt="" />
                                        <div className='ms-2'>0 Lessons</div>
                                    </div>
                                    {/* Students */}
                                    <div className='d-flex'>
                                        <img src="Icons\user-graduate-solid.svg" alt="" />
                                        <div className='ms-2'>0 Students  </div>
                                    </div>
                                </div>
                                <div className="">
                                    <h4 className='training-free-label'>Free</h4>
                                    <button className='training-grid-button'>Read more</button>
                                </div>
                            </div>
                        </div>

                        <div className="training-course-grid">

                            <div className="training-course-grid-img">
                                <img src="Images\product-1.webp" alt="" />
                            </div>

                            <div className="training-course-info-grid">
                                <h5 className='training-header'>Humana’s Dual Eligible Special Needs Plans (DSNPs) Guide</h5>
                                <p>by <span>Daniel Hernandez</span></p>
                                <p>in <span>New agent training</span></p>
                                <div className=" training-course-grid-logos">
                                    {/* lessons */}
                                    <div className='d-flex'>
                                        <img src="Icons\file.svg" alt="" />
                                        <div className='ms-2'>0 Lessons</div>
                                    </div>
                                    {/* Students */}
                                    <div className='d-flex'>
                                        <img src="Icons\user-graduate-solid.svg" alt="" />
                                        <div className='ms-2'>0 Students  </div>
                                    </div>
                                </div>
                                <div className="">
                                    <h4 className='training-free-label'>Free</h4>
                                    <button className='training-grid-button'>Read more</button>
                                </div>
                            </div>
                        </div>

                        <div className="training-course-grid">

                            <div className="training-course-grid-img">
                                <img src="Images\product-1.webp" alt="" />
                            </div>

                            <div className="training-course-info-grid">
                                <h5 className='training-header'>Social Media. Get Started using Linkedin.</h5>
                                <p>by <span>Daniel Hernandez</span></p>
                                <p>in <span>New agent training</span></p>
                                <div className=" training-course-grid-logos">
                                    {/* lessons */}
                                    <div className='d-flex'>
                                        <img src="Icons\file.svg" alt="" />
                                        <div className='ms-2'>0 Lessons</div>
                                    </div>
                                    {/* Students */}
                                    <div className='d-flex'>
                                        <img src="Icons\user-graduate-solid.svg" alt="" />
                                        <div className='ms-2'>11 Students  </div>
                                    </div>
                                </div>
                                <div className="">
                                    <h4 className='training-free-label'>Free</h4>
                                    <button className='training-grid-button'>Read more</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="training-course-grid">

                        <div className="training-course-grid-img">
                            <img src="Images\product-1.webp" alt="" />
                        </div>

                        <div className="training-course-info-grid">
                            <h5 className='training-header'>Get started marketing on Facebook</h5>
                            <p>by <span>Daniel Hernandez</span></p>
                            <p>in <span>New agent training</span></p>
                            <div className=" training-course-grid-logos">
                                {/* lessons */}
                                <div className='d-flex'>
                                    <img src="Icons\file.svg" alt="" />
                                    <div className='ms-2'>0 Lessons</div>
                                </div>
                                {/* Students */}
                                <div className='d-flex'>
                                    <img src="Icons\user-graduate-solid.svg" alt="" />
                                    <div className='ms-2'>0 Students  </div>
                                </div>
                            </div>
                            <div className="">
                                <h4 className='training-free-label'>Free</h4>
                                <button className='training-grid-button'>Read more</button>
                            </div>
                        </div>
                    </div>


                </div>



            </div>

            {/* Section-6 (Medicare)*/}
            <div className="Section-6-bg sec-6-training"><div className='Section-6-bg-img'></div></div>
            <div className="Section-6-wrap">
                <div className={goToGrid ? "mail-submit-training-grid" : "mail-submit-training"}>
                    <MailSubmition />
                </div>
            </div>


            {/* Footer */}
            <Footer />



        </>
    )
}

export default Training
