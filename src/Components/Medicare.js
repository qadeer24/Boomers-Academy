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

            {/* heading */}
            <div className='medicare-heading'>
                <h1>Medicare Plan Carriers</h1>
                <p>We offer a range of Medicare Advantage, Medicare Supplement, and other Medicare-related products from leading insurance carriers.</p>
            </div>

            {/* search bar and total records on page */}
            <div className='d-flex justify-content-between mx-3'>
                <input type="text" className='medicare-search-bar' placeholder='Search...' />
                <div className='d-flex' style={{ color: "#3A3A3A" }}>
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

            {/* Section-6 (Medicare)*/}
            <div className="Section-6-bg pt-3"><div className='Section-6-bg-img'></div></div>
            <div className="Section-6-wrap">
                <div className="mail-submit-medicare py-5">
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

export default Medicare
