import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Training = () => {

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


    const [goToGrid, setgoToGrid] = useState(false);
    const GridClick = ()=>{
        setgoToGrid(!goToGrid)
    }

    const ListClick = ()=>{
        setgoToGrid(!goToGrid)
    }

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
                <div className="d-flex justify-content-between">
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
                            <button class=" dropdown-toggle training-dropdown-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                        <div  className={goToGrid ? "training-view-options grid-selected d-flex" : "training-view-options grid-selected d-none"}>
                            <img src="Icons\grid-red.svg" alt="" />
                            <img onClick={ListClick} src="Icons\list-solid.svg" alt="" />
                        </div>

                        <div  className={goToGrid ? "training-view-options grid-selected d-none" : "training-view-options grid-selected d-flex"}>
                            <img onClick={GridClick} src="Icons\grid.svg" alt="" />
                            <img src="Icons\list-solid-red.svg" alt="" />
                        </div>
                    </div>
                </div>

                {/* training courses line by line */}
                <div className={goToGrid ? "d-none" : "d-block"}>
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
                <div className={goToGrid ? "d-block" : "d-none"}>

                    <div className="d-flex">
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
            <div className="Section-6-bg pt-3"><div className='Section-6-bg-img'></div></div>
            <div className="Section-6-wrap">
                <div className={goToGrid ? "mail-submit-training-grid py-5" : "mail-submit-training py-5"}>
                    <div className='section-6-img mt-2'><img src="Icons\envelope-open-text-solid.svg" alt="" /></div>
                    <div className="Section-6-text ms-4 me-2">
                        <h5>Subsribe To Our Newsletter</h5>
                        <p>Receive weekly newsletter coaching materials, new courses, popular book and much more !</p>
                    </div>
                    <input className="Section-6-input me-3" type="text" placeholder='Email Address' />
                    <button className='Section-6-button my-4'>Submit</button>

                </div>
            </div>


            {/* Footer */}
            <div className="footer" style={{ backgroundColor: "black", color: "white" }}>
                <div className="footer-sec-1 px-5">
                    {/* col-1 */}
                    <div className="footer-sec-1-col-1">
                        <h3>About Boomers Insurance</h3>
                        <p>Boomers Insurance is independent of any insurance company. We provide expert,unbiased assistance to Medicare recipients who expect and deserve the highest quality health insurance at the right price.</p>
                        <p>Members receive personalized plan guidance based on their location, preferences and specific health care need.</p>
                    </div>
                    {/* col-2 */}
                    <div className="footer-sec-1-col-2 footer-sec-1-same-css">
                        <h3>Useful Links</h3>
                        <p onClick={socialsecurityLink}>SocialSecurity.gov</p>
                        <p onClick={medicareLink}>Medicare & You —</p>
                        <p onClick={medicareLink}>Handbook</p>
                        <p onClick={dentalLink}>Dental & Vision Plans</p>
                        <p onClick={CoveredCaliforniaLink}>Covered California Info</p>
                    </div>
                    {/* col-3 */}
                    <div className="footer-sec-1-col-3 footer-sec-1-same-css">
                        <h3>Social links</h3>
                        <p onClick={FacebookLink}>Facebook</p>
                        <p onClick={twitterLink}>Twitter</p>
                        <p onClick={YoutubeLink}>Youtube</p>
                        <p onClick={LinkedinLink}>Linkedin</p>
                        <p onClick={VimeoLink}>Vimeo</p>
                    </div>
                    {/* col-4 */}
                    <div className="footer-sec-1-col-4 footer-sec-1-same-css">
                        <h3>Blog News</h3>
                        <p>CMS Updates Medicare Marketing Guidelines 5/10/23</p>
                        <p>16 May 2023</p>
                        <p>2023 NEW CMS MARKETING RULES</p>
                        <p>20 April 2023</p>
                    </div>
                </div>
                <div className="footer-sec-2 py-3 px-5">
                    <p className='footer-sec-2-text py-3'>This website contains information about and access to insurance plans for Medicare beneficiaries, individuals soon eligible for Medicare and those advising on behalf of Medicare beneficiaries. It is operated by Boomers Insurance Services, a licensed health insurance agency certified to sell Medicare products. Boomers Insurance Services, is not endorsed by the Centers for Medicare & Medicaid Services (CMS), the Department of Health and Human Services (DHHS), or any other government agency.</p>
                    <p className='footer-sec-2-text pb-3'>Boomers Insurance Services, is a licensed and certified representative of Medicare Advantage HMO, POS, PPO and PFFS organizations and a stand-alone prescription drug plans with a Medicare contract. Enrollment in any plan depends on contract renewal. This is not a complete list of plans available in your service area. For a complete listing, please contact 1-800-MEDICARE (1-800-633-4227), 24 hours day, 7 days a week or visit www.Medicare.gov. You must continue to pay your Medicare Part B premium. This information is not a complete description of benefits. Contact the plan for more information. Limitations, copayments and restrictions may apply. Benefits, premiums and/or member cost-share may change on January 1 of each year.</p>
                    <p className='footer-sec-2-text'>Medicare Supplement plans are not connected with or endorsed by the U.S. Government or the federal Medicare program. The purpose of this communication is the solicitation of insurance. Contact will be made by an insurance agent/producer or insurance company. This information is available for free in other languages. Please contact a licensed Boomers sales agent at 1-800-815-1943 (TTY: 711). Esta información está disponible gratuitamente en otros idiomas. Póngase en contacto con un agente de ventas certificado de Boomers al 1-800-815-1943 (TTY: 711). 本資訊也有其他語言的免費版本可供選擇。請撥1-800-815-1943（聽障專線：711）與持照 Boomers 銷售代理聯絡。Boomers Insurance services complies with applicable Federal civil rights laws and does not discriminate on the basis of race, color,national origin,age, disability, or sex.</p>
                </div>
                <div className="footer-sec-3 py-4">
                    <div className='footer-sec-3-left'>Copyright © 2023 Boomers Medicare Academy</div>
                    <div className='footer-sec-3-right'>Design by: Stream Design Studio</div>
                </div>
            </div>
        </>
    )
}

export default Training
