import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Components/Footer'

const Layout = ({ children }) => {


    const [LoginisActive, setLoginIsActive] = useState(false);
    const [SignUpisActive, setSignUpIsActive] = useState(false);

    const LoginClick = () => {
        setLoginIsActive(!LoginisActive);
    };
    const SignUpClick = () => {
        setSignUpIsActive(!SignUpisActive);
    };

    const [overlayIsActive, setOverlayIsActive] = useState(false);

    useEffect(() => {
        if (SignUpisActive || LoginisActive) {
            setOverlayIsActive(true);
        } else {
            setOverlayIsActive(false);
        }
    }, [SignUpisActive, LoginisActive]);

    const [isOpen, setIsOpen] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        input3: "",
        input4: "",
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    // Check if all inputs are filled
    const isFormValid = formData.input3.trim() !== "" && formData.input4.trim() !== "";


    const handleRedirect = () => {
        window.location.href = "https://nipr.com";
    };


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

    return (
        <>
            <header>
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
                        <Link to={'/marketing'} className='mx-2 marketing-page-nav-bar-link' style={{ color: "#EC1C27" }}>MARKETING</Link>
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

                {/* Login */}
                <div className={LoginisActive ? "login-bg" : "login-bg-before"}>
                </div>
                <div className={LoginisActive ? "Login-wrap-after" : "Login-Wrap-before"}>
                    <div className="d-flex form-hero-section">


                        {/* main form left side */}
                        <div className="register-Form-logo-area py-5">
                            {/* Logo */}
                            <div className='register-Form-logo'>
                                <img className='logo-img' src="\Images\logo.svg" alt="" />
                                <h3 className='logo-text'>Welcome to The Boomers Academy for Insurance Agents</h3>
                            </div>

                            {/* Sign-up button */}
                            <button type="button" onClick={() => { LoginClick(); SignUpClick(); }} class="btn btn-light register-Form-logo-button">Sign Up</button>
                        </div>




                        {/* main form left side */}
                        <div className='Register-Form py-3' style={{ backgroundColor: "white" }}>

                            {/* Sign-up heading*/}

                            <div>
                                <p className='text-end mx-4'><img src="Icons\xmark-solid(3).svg" alt="" className='Signup-close' onClick={LoginClick} /></p>
                                <h3 className='text-center pt-1' style={{ color: "black", fontWeight: "700" }}>Sign in</h3>
                            </div>

                            <div className="login-inputs">
                                {/* Email */}
                                <div class="input-group registration-input mb-2">
                                    <span>Email :</span>
                                    <input type="text" class=" form-input" aria-label="Recipient's username" name="input3" value={formData.input3} onChange={handleChange} aria-describedby="basic-addon2" />
                                </div>

                                {/* Password */}
                                <div class="input-group registration-input mb-2">
                                    <span>Password :</span>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="form-input pr-10"
                                            aria-label="Recipient's username"
                                            name="input4"
                                            value={formData.input4}
                                            onChange={handleChange}
                                            aria-describedby="basic-addon2"
                                        />
                                    </div>
                                </div>


                                {/* Submit Button */}
                                <button type="button" className={isFormValid ? "btn  form-submit-button mt-3" : "btn  form-submit-button-before mt-3"} style={{ cursor: isFormValid ? "pointer" : "not-allowed" }}>Sign in</button>

                            </div>

                        </div>

                    </div>
                </div>


                {/* SignUp */}
                <div className={SignUpisActive ? "login-bg" : "login-bg-before"}>
                </div>
                <div className={SignUpisActive ? "Login-wrap-after" : "Login-Wrap-before"}>
                    <div className="d-flex form-hero-section">

                        {/* main form left side */}
                        <div className="register-Form-logo-area py-5">
                            {/* Logo */}
                            <div className='register-Form-logo'>
                                <img className='logo-img' src="\Images\logo.svg" alt="" />
                                <h3 className='logo-text'>Welcome to The Boomers Academy for Insurance Agents</h3>
                            </div>

                            {/* Sign-up button */}
                            <button type="button" onClick={() => { LoginClick(); SignUpClick(); }} class="btn btn-light register-Form-logo-button">Sign in</button>

                        </div>


                        {/* main form right side */}
                        <div className='Register-Form py-3' style={{ backgroundColor: "white" }}>

                            {/* Sign-up heading*/}
                            <div>
                                <h3 className='text-center pt-1' style={{ color: "black", fontWeight: "700" }}>Create Account<img onClick={SignUpClick} src="Icons\xmark-solid(3).svg" className="login-close" alt="" /></h3>

                            </div>

                            {/* First Name */}
                            <div class="input-group registration-input mb-2">
                                <span>First Name :</span>
                                <input type="text" class=" form-input" aria-label="Recipient's username" name="input1" value={formData.input1} onChange={handleChange} aria-describedby="basic-addon2" />
                            </div>

                            {/* Last Name */}
                            <div class="input-group registration-input mb-2">
                                <span>Last Name :</span>
                                <input type="text" class=" form-input" aria-label="Recipient's username" name="input2" value={formData.input2} onChange={handleChange} aria-describedby="basic-addon2" />
                            </div>

                            {/* Email */}
                            <div class="input-group registration-input mb-2">
                                <span>Email :</span>
                                <input type="text" class=" form-input" aria-label="Recipient's username" name="input3" value={formData.input3} onChange={handleChange} aria-describedby="basic-addon2" />
                            </div>

                            {/* Password */}
                            <div class="input-group registration-input mb-2">
                                <span>Password :</span>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="form-input pr-10"
                                        aria-label="Recipient's username"
                                        name="input4"
                                        value={formData.input4}
                                        onChange={handleChange}
                                        aria-describedby="basic-addon2"
                                    />
                                </div>
                            </div>

                            {/* National Producer Number */}
                            <div class="input-group registration-input mb-2">
                                <span>(NPN) National Producer Number:</span>
                                <input type="text" class=" form-input" aria-label="Recipient's username" name="isChecked" checked={formData.isChecked} onChange={handleChange} aria-describedby="basic-addon2" />
                            </div>

                            {/* Website link and check box */}
                            <div className=' checkbox-div mt-3' style={{ color: "black" }}>Look up at <Link onClick={handleRedirect} style={{ color: "black" }}> NIPR.com</Link>  </div>
                            <div className='d-flex checkbox-div mt-3 mb-1'>
                                <input class="form-check-input checkbox-border" type="checkbox" value="" name="isChecked" checked={formData.isChecked} onChange={handleChange} id="flexCheckDefault" />
                                <label class="form-check-label checkbox-text px-2" for="flexCheckDefault">
                                    By registering, you agree to Boomers Academy's Terms of Service and Privacy Policy. You consent to receiving updates and communications from us.
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button type="button" className={isFormValid ? "btn  form-submit-button mt-3" : "btn  form-submit-button-before mt-3"} style={{ cursor: isFormValid ? "pointer" : "not-allowed" }}>Sign Up</button>

                        </div>



                    </div>
                </div>
            </header>

            <main>
                {children}
            </main>

            <footer>
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
            </footer>

        </>
    )

}
export default Layout
