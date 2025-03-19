import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Countdown from './Countdown';

const Home = () => {

    const images = [
        "https://boomersacademy.com/wp-content/uploads/2023/11/slide-1-1-1.webp",
        "https://boomersacademy.com/wp-content/uploads/2023/11/slide-2-1.webp",
        "https://boomersacademy.com/wp-content/uploads/2023/11/slide-3-new-1.webp",
    ]


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

    useEffect(() => {
        const carouselElement = document.getElementById("carouselExample");
        const carousel = new window.bootstrap.Carousel(carouselElement, {
            interval: 3000,
            pause: false,
        });
        return () => carousel.dispose();
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Hero Section */}

            {/* Carousel */}
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                            <img src={image} className="d-block w-100 carousel-images carousel-image" alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Overlay */}
            <div className="hero-overlay">
                {/* Header */}
                <div className="header-landing-page">

                    {/* Header-Right-Side */}
                    <div className='Registration-Header-Right-Side'>
                        <div className='Registration-Header-Right-Side-img'></div>
                        <div> 1-800-815-1943(TTY:711)</div>
                    </div>

                    {/* Header-Right-Side */}
                    <div className='Registration-Header-left-Side'>
                        <Link to={'/signup'} className='Registration-Header-left-Side-col1 d-flex mx-4' style={{ textDecoration: "none", color: "white" }}>
                            <div className='Registration-Header-left-Side-col1-img'></div>
                            <div style={{ cursor: "pointer" }}>Registration</div>
                        </Link>
                        <Link to={'/login'} className='Registration-Header-left-Side-col2 d-flex mx-4' style={{ textDecoration: "none", color: "white" }}>
                            <div className='Registration-Header-left-Side-col2-img'></div>
                            <div style={{ cursor: "pointer" }}>Login</div>
                        </Link>
                    </div>

                </div>

                {/* Nav-Bar */}
                <div className="landing-page-nav-bar mx-5 px-5 my-4">
                    <div className='mx-3'>
                        <img src="Images\logo.svg" alt="" />
                    </div>
                    <div className='d-flex my-5 me-4'>
                        <Link to={'/'} className='mx-2 landing-page-nav-bar-link'>ABOUT</Link>
                        <Link to={'/'} className='mx-2 landing-page-nav-bar-link'>MEDICARE PLAN</Link>
                        <Link to={'/'} className='mx-2 landing-page-nav-bar-link'>GET CONTRACTED</Link>
                        <Link to={'/'} className='mx-2 landing-page-nav-bar-link'>MARKETING</Link>
                        <Link to={'/'} className='mx-2 landing-page-nav-bar-link'>TRAINING</Link>
                        <Link to={'/'} className='ms-2 landing-page-nav-bar-link'>TECHNOLOGY</Link>
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
                {/* hero-section-text */}
                <div className='mt-5 pt-4'>
                    <p className='text-center'><h2 className='hero-sec-heading'>Welcome to Boomers Medicare Academy</h2></p>
                    <p className='text-center'><h2 className='hero-sec-heading'></h2></p>
                    <p className="text-center"><h2 className='hero-sec-text'>How to Become a Medicare Agent</h2></p>
                    <p className='text-center'><button className='hero-sec-button'>GET CONTRACTED</button></p>
                </div>
            </div>

            {/* Overlay-2 */}
            <div className="overlay-2">
                <div className='overlay-2-sec px-4 text-center'>
                    <img src="Icons\slideshare-brands.svg" alt="" />
                    <h4 style={{ fontWeight: "600" }} className='my-3'>Training Courses</h4>
                    <p className='mt-3'>We offer online videos and sales techniques developed for both new agents and agents that are looking to build there own agency.</p>
                    <p><button className='hero-sec-button-2'>View Courses</button></p>
                </div>
                <div className='overlay-2-sec overlay-2-sec-margin px-4 text-center'>
                    <img src="Icons\puzzle-piece-solid.svg" alt="" />
                    <h4 style={{ fontWeight: "600" }} className='my-3'>Grass Roots Marketing</h4>
                    <p className='mt-3'>Grassroots marketing is a strategy that involves building relationships and trust with potential customers through local, community-based activities.</p>
                    <p><button className='hero-sec-button-2'>Enter Here</button></p>
                </div>
                <div className='overlay-2-sec px-4 text-center'>
                    <img src="Icons\cube-solid.svg" alt="" />
                    <h4 style={{ fontWeight: "600" }} className='my-3'>Getting Started</h4>
                    <p className='mt-3'>Click on the start now to begin your appointment process with all the Top-Rated Medicare Plans through our Surancebay account.</p>
                    <p><button className='hero-sec-button-2'>Contract Now</button></p>
                </div>
            </div>

            {/* Section-2 */}
            <div className='Section-2 '>
                <p className='text-center'><h1>The Medicare Agent Blog</h1></p>
                <div className="d-flex section-2-heading my-4">
                    <div className="landing-page-line my-3"></div>
                    <img src="Icons\spa-solid.svg" alt="" className='landing-page-sec-1-img-1' />
                    <div className="landing-page-line my-3"></div>
                </div>
                <p className='text-center'><h5>Get the latest, best, and most meaningful insurance articles discussing Medicare Insurance.</h5></p>
                <div className="section-2-images">
                    <Link to={'redeterminations-are-back'} className='section-2-images-sec'>
                        <img src="Images\section-2-image-1.jpg" alt="" />
                        {/* Image Shading */}
                        <div className='Section-2-image-overlay'>
                            <div class="section-2-overlay-1-1"></div>
                            <div class="section-2-overlay-1-2"></div>
                            <div class="section-2-overlay-1-3"></div>
                            <div class="section-2-overlay-1-4"></div>
                            <div class="section-2-overlay-1-5"></div>
                            <div class="section-2-overlay-1-6"></div>
                        </div>
                        <div className="section-2-bg">
                            <h5 style={{ color: "black", fontWeight: "600" }} className='mx-4 py-3'>Redeterminations are back!</h5>
                            <div className='mx-4 mb-3' style={{ color: "#777" }}>Inform your clients about Duals and Medi-Cal Eligibility Redeterminations • Prior to April 2023 – Member should confirm their current</div>
                            <Link to={'redeterminations-are-back'} style={{ textDecoration: "none", color: "#777" }} className='mx-4'>Read More </Link>
                        </div>
                    </Link>
                    <Link to={'2023-new-cms-marketing-rules'} className='section-2-images-sec '>
                        <img src="Images\section-2-image-2.jpg" className='section-2-images-padding' alt="" />
                        {/* Image Shading */}
                        <div className='Section-2-image-overlay'>
                            <div class="section-2-overlay-2-1"></div>
                            <div class="section-2-overlay-2-2"></div>
                            <div class="section-2-overlay-2-3"></div>
                            <div class="section-2-overlay-2-4"></div>
                            <div class="section-2-overlay-2-5"></div>
                            <div class="section-2-overlay-2-6"></div>
                        </div>
                        <div className="section-2-bg">
                            <h5 style={{ color: "black", fontWeight: "600" }} className='mx-4 py-3'>2023 NEW CMS MARKETING RULES</h5>
                            <div className='mx-4 mb-3' style={{ color: "#777" }}>1. Prohibits marketing unless the names of MA organizations or Part D sponsors being advertised are clearly displayed – Page 386“Therefore,</div>
                            <Link to={'2023-new-cms-marketing-rules'} style={{ textDecoration: "none", color: "#777" }} className='mx-4'>Read More </Link>
                        </div>
                    </Link>
                    <Link to={'cms-updates-medicare-marketing-guidelines-5-10-23'} className='section-2-images-sec'>
                        <img src="Images\section-2-image-3.jpg" className='section-2-images-padding' alt="" />
                        {/* Image Shading */}
                        <div className='Section-2-image-overlay'>
                            <div class="section-2-overlay-3-1"></div>
                            <div class="section-2-overlay-3-2"></div>
                            <div class="section-2-overlay-3-3"></div>
                            <div class="section-2-overlay-3-4"></div>
                            <div class="section-2-overlay-3-5"></div>
                            <div class="section-2-overlay-3-6"></div>
                        </div>
                        <div className="section-2-bg">
                            <h5 style={{ color: "black", fontWeight: "600" }} className='mx-4 py-3'>CMS Updates Medicare Marketing Guidelines 5/10/23</h5>
                            <div className='mx-4 mb-3' style={{ color: "#777" }}>On May 10, CMS updated their definition of what constitutes “marketing” to include content that mentions any type of benefit covered by</div>
                            <Link to={'cms-updates-medicare-marketing-guidelines-5-10-23'} style={{ textDecoration: "none", color: "#777" }} className='mx-4'>Read More </Link>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Section-3 */}
            <div className="Section-3">
                <div className="Section-3-text  ps-3">
                    <h2>New to insurance, a seasoned agent, or an expanding agency? We're here to help!</h2>
                    <p className='my-4'>It doesn’t matter if you’re brand new to the insurance industry, if you’re a seasoned agent, or an agency looking to grow your lines of business – we can help!</p>
                    {/* Count Down*/}
                    <Countdown targetDate="2025-05-06T23:59:59" />{/*  Pass a valid date */}
                    <p>October 15 will be here soon. Don’t delay Get contracted and appointed with all the top carriers.</p>
                    <button className='Section-3-button'>Get Contracted</button>
                </div>
                <div className="Section-3-img"><img src="Images\Section-3-img.jpg" alt="" /></div>
            </div>

            {/* Section-4 */}
            <div className="Section-4">
                <div className="section-4-overlay"></div>
                <div className="Section-4-text">
                    <p className='text-center Section-4-p'><h1>Medicare Training Videos for Licensed Insurance Agents</h1></p>
                    <div className="d-flex section-2-heading my-4">
                        <div className="landing-page-line my-3"></div>
                        <img src="Icons\spa-solid.svg" alt="" className='landing-page-sec-1-img-1' />
                        <div className="landing-page-line my-3"></div>
                    </div>
                    <p className='text-center Section-4-text-padding'>We provide our agents and agencies with coaching, training and the technology to become a successful Medicare Agent.</p>
                    <p className='text-center Section-4-p'><h5>Let us show you how to power your sales.</h5></p>
                </div>
            </div>

            {/* Section-5 */}
            <div className='Section-5'>
                <div className='Section-5-left'>
                    <h2>Why Choose Boomers as your FMO?</h2>

                    {/* Sect-5-text-1 */}
                    <div className='mt-4'>
                        <div className='d-flex'>
                            <img src="Icons\circle-dot-solid.svg" className='my-1' alt="" />
                            <h5 className='mx-3'>Online Enrollment tools</h5>
                        </div>
                        <p className='mx-4 my-2 px-2'>The impact of COVID_19 means we are no longer marketing within a business-as-usual setting. AEP 2024 is around the corner. Are you 100% ready for telework? Boomers offers a free online quoting and self-enrollment website that you or your client can im-put their prescriptions, their primary doctor and their local pharmacy and receive a comparison of all your contracted plans</p>
                        <p className='mx-4 my-4 ps-2 pe-5'>You are even able to email or text the Scope of Appointment and have it all stored electronically while giving you updates on status.</p>

                    </div>

                    {/* Sect-5-text-2 */}
                    <div className='mt-4'>
                        <div className='d-flex'>
                            <img src="Icons\circle-dot-solid.svg" className='my-1' alt="" />
                            <h5 className='mx-3'>Digital Marketing</h5>
                        </div>
                        <p className='mx-4 my-2 px-2'>Baby Boomers turning 65 in 2023 are very different from their predecessors. Today’s Baby Boomers are comfortable using their phones and tablets to educate themselves on Medicare and compare plan options. If you have not incorporated Boomers digital marketing into your marketing campaign, you are missing a prime opportunity for new enrollments. Stop overlooking the impact that digital marketing could have on reaching those aging into Medicare. Whether it’s a landing page for your online self-enrollment link or a Facebook ad campaign to drive awareness.</p>
                        <p className='mx-4 my-4 px-2'>Boomers Digital Department is here to help.</p>

                    </div>

                    {/* Sect-5-text-3 */}
                    <div className='mt-4'>
                        <div className='d-flex'>
                            <img src="Icons\circle-dot-solid.svg" className='my-1' alt="" />
                            <h5 className='mx-3'>Accordion Title</h5>
                        </div>
                        <p className='mx-4 my-2 px-2'>There is nothing worse than an agent who thinks they can just wing it. Boomers is committed to your learning.Learn new marketing and sales strategies that are used by some of the most successful agents in the industry. You can also find a calendar of upcoming trainings by our Health Plan Partners. Business cards, flyers, and apparel can also be found on our store.</p>
                        <p className='mx-4 my-4 px-2'>Read our blog for marketing tips, selling strategies and industry news and trends from the Boomers Team.</p>

                    </div>
                </div>
                <div className='Section-5-right'>
                    <h2>Schedule a meeting with your Territory Manager.</h2>
                    {/* Secion-5-form */}
                    <div className="Section-5-form my-5">
                        <div>
                            <h6>Name</h6>
                            <input type="text" className='Section-5-Input-Name' placeholder='Enter Your Name' />
                        </div>
                        <div className='py-4'>
                            <h6>Last Name</h6>
                            <input type="text" className='Section-5-Input-Name' placeholder='Enter Last Name' />
                        </div>
                        <div>
                            <h6>Email</h6>
                            <input type="text" className='Section-5-Input-Name' placeholder='Enter Your Email' />
                        </div>
                        <div><button className="Section-5-button my-4">Get Now</button></div>
                    </div>
                </div>
            </div>

            {/* Section-6 (Mail Submition)*/}
            <div className="Section-6-bg pt-3"><div className='Section-6-bg-img'></div></div>
            <div className="Section-6-wrap">
                <div className="Section-6 py-5">
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

export default Home
