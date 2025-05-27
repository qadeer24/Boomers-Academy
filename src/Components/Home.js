import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MailSubmition from "./MailSubmition";
import HomeHeader from "./Headers/HomeHeader";
import Countdown from "./Countdown";
import Footer from "./Footer";
import Carousel from "./carousel/Carousel";

const Home = ({
    LoginisActive,
    SignUpisActive,
    LoginClick,
    SignUpClick,
    overlayIsActive,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {/* Carousel */}
            <Carousel />
            {/* Overlay */}
            <div className={overlayIsActive ? "hero-overlay-active" : "hero-overlay"}>
                {/* Header */}
                <HomeHeader
                    overlayIsActive={overlayIsActive}
                    LoginisActive={LoginisActive}
                    SignUpisActive={SignUpisActive}
                    LoginClick={LoginClick}
                    SignUpClick={SignUpClick}
                />
                {/* Nav-Bar */}
                <div className="landing-page-nav-bar mx-5 px-5">
                    <Link to={"/"} className="mx-3">
                        <img src="Images\logo.svg" alt="" />
                    </Link>
                    <div className="d-flex landing-page-nav-bar-Links my-5">
                        <Link to={"/about"} className="mx-2 landing-page-nav-bar-link">
                            ABOUT
                        </Link>
                        <Link
                            to={"/medicare-plan"}
                            className="mx-2 landing-page-nav-bar-link"
                        >
                            MEDICARE PLAN
                        </Link>
                        <Link
                            to={"/get-contracted"}
                            className="mx-2 landing-page-nav-bar-link"
                        >
                            GET CONTRACTED
                        </Link>
                        <Link to={"/marketing"} className="mx-2 landing-page-nav-bar-link">
                            MARKETING
                        </Link>
                        <Link to={"/training"} className="mx-2 landing-page-nav-bar-link">
                            TRAINING
                        </Link>
                        <Link to={"/"} className="ms-2 landing-page-nav-bar-link">
                            TECHNOLOGY
                        </Link>
                    </div>
                </div>
                {/* Nav-bar for Mobile */}
                <div className="landing-page-nav-bar-responsive my-4">
                    <Link to={"/"} className="mx-4">
                        <img src="Images\logo.svg" alt="" />
                    </Link>
                    {/* Hamburger Icon */}
                    <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                        <img
                            src={isOpen ? "/Icons/xmark-solid.svg" : "/Icons/bars-solid.svg"}
                        />
                    </div>
                    {/* Navigation Menu */}
                    <nav className={`menu ${isOpen ? "active" : ""}`}>
                        <ul>
                            <li style={{ borderBottom: "1px solid grey" }}>
                                <Link to={"/about"} className="mx-4 landing-page-nav-bar-link">
                                    ABOUT
                                </Link>
                            </li>
                            <li style={{ borderBottom: "1px solid grey" }}>
                                <Link
                                    to={"/medicare-plan"}
                                    className="mx-4 landing-page-nav-bar-link"
                                >
                                    MEDICARE PLAN
                                </Link>
                            </li>
                            <li style={{ borderBottom: "1px solid grey" }}>
                                <Link
                                    to={"/get-contracted"}
                                    className="mx-4 landing-page-nav-bar-link"
                                >
                                    GET CONTRACTED
                                </Link>
                            </li>
                            <li style={{ borderBottom: "1px solid grey" }}>
                                <Link
                                    to={"/marketing"}
                                    className="mx-4 landing-page-nav-bar-link"
                                >
                                    MARKETING
                                </Link>
                            </li>
                            <li style={{ borderBottom: "1px solid grey" }}>
                                <Link
                                    to={"/training"}
                                    className="mx-4 landing-page-nav-bar-link"
                                >
                                    TRAINING
                                </Link>
                            </li>
                            <li style={{ borderBottom: "1px solid grey" }}>
                                <Link to={"/"} className="ms-4 landing-page-nav-bar-link">
                                    TECHNOLOGY
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* hero-section-text */}
                <div className="landing-page-text pt-4">
                    <p className="text-center">
                        <h2 className="hero-sec-heading">
                            Welcome to Boomers Medicare Academy
                        </h2>
                    </p>
                    <p className="text-center">
                        <h2 className="hero-sec-heading"></h2>
                    </p>
                    <p className="text-center">
                        <h2 className="hero-sec-text">How to Become a Medicare Agent</h2>
                    </p>
                    <p className="text-center">
                        <button className="hero-sec-button">GET CONTRACTED</button>
                    </p>
                </div>
            </div>
            {/* Overlay-2 */}
            <div className="overlay-2">
                <div className="overlay-2-sec px-4 text-center">
                    <img src="Icons\slideshare-brands.svg" alt="" />
                    <h4 style={{ fontWeight: "600" }} className="my-3">
                        Training Courses
                    </h4>
                    <p className="mt-3">
                        We offer online videos and sales techniques developed for both new
                        agents and agents that are looking to build there own agency.
                    </p>
                    <p>
                        <button className="hero-sec-button-2">View Courses</button>
                    </p>
                </div>
                <div className="overlay-2-sec overlay-2-sec-margin px-4 text-center">
                    <img src="Icons\puzzle-piece-solid.svg" alt="" />
                    <h4 style={{ fontWeight: "600" }} className="my-3">
                        Grass Roots Marketing
                    </h4>
                    <p className="mt-3">
                        Grassroots marketing is a strategy that involves building
                        relationships and trust with potential customers through local,
                        community-based activities.
                    </p>
                    <p>
                        <button className="hero-sec-button-2">Enter Here</button>
                    </p>
                </div>
                <div className="overlay-2-sec px-4 text-center">
                    <img src="Icons\cube-solid.svg" alt="" />
                    <h4 style={{ fontWeight: "600" }} className="my-3">
                        Getting Started
                    </h4>
                    <p className="mt-3">
                        Click on the start now to begin your appointment process with all
                        the Top-Rated Medicare Plans through our Surancebay account.
                    </p>
                    <p>
                        <button className="hero-sec-button-2">Contract Now</button>
                    </p>
                </div>
            </div>
            {/* Section-2 */}
            <div className="Section-2 ">
                <p className="text-center">
                    <h1>The Medicare Agent Blog</h1>
                </p>
                <div className="d-flex section-2-heading my-4">
                    <div className="landing-page-line my-3"></div>
                    <img
                        src="Icons\spa-solid.svg"
                        alt=""
                        className="landing-page-sec-1-img-1"
                    />
                    <div className="landing-page-line my-3"></div>
                </div>
                <p className="text-center">
                    <h6 style={{ color: "#464646" }}>
                        Get the latest, best, and most meaningful insurance articles
                        discussing Medicare Insurance.
                    </h6>
                </p>
                <div className="section-2-images">
                    <Link
                        to={"redeterminations-are-back"}
                        className="section-2-images-sec"
                    >
                        <div className="sec-2-img">
                            <img src="Images\section-2-image-1.jpg" alt="" />
                        </div>
                            {/* Image Shading */}
                            <div className="Section-2-image-overlay">
                                <div class="section-2-overlay-1-1"></div>
                                <div class="section-2-overlay-1-2"></div>
                                <div class="section-2-overlay-1-3"></div>
                                <div class="section-2-overlay-1-4"></div>
                                <div class="section-2-overlay-1-5"></div>
                                <div class="section-2-overlay-1-6"></div>
                            </div>
                            <div className="section-2-bg">
                                <h5
                                    style={{ color: "black", fontWeight: "600" }}
                                    className="mx-4 py-3"
                                >
                                    Redeterminations are back!
                                </h5>
                                <div className="mx-4 mb-3" style={{ color: "#777" }}>
                                    Inform your clients about Duals and Medi-Cal Eligibility
                                    Redeterminations • Prior to April 2023 – Member should confirm
                                    their current
                                </div>
                                <Link
                                    to={"redeterminations-are-back"}
                                    style={{ textDecoration: "none", color: "#777" }}
                                    className="mx-4"
                                >
                                    Read More{" "}
                                </Link>
                            </div>
                    </Link>
                    <Link
                        to={"2023-new-cms-marketing-rules"}
                        className="section-2-images-sec "
                    >
                        <div className="sec-2-img">
                            <img
                                src="Images\section-2-image-2.jpg"
                                className="section-2-images-padding"
                                alt=""
                            />
                        </div>
                        {/* Image Shading */}
                        <div className="Section-2-image-overlay">
                            <div class="section-2-overlay-2-1"></div>
                            <div class="section-2-overlay-2-2"></div>
                            <div class="section-2-overlay-2-3"></div>
                            <div class="section-2-overlay-2-4"></div>
                            <div class="section-2-overlay-2-5"></div>
                            <div class="section-2-overlay-2-6"></div>
                        </div>
                        <div className="section-2-bg">
                            <h5
                                style={{ color: "black", fontWeight: "600" }}
                                className="mx-4 py-3"
                            >
                                2023 NEW CMS MARKETING RULES
                            </h5>
                            <div className="mx-4 mb-3" style={{ color: "#777" }}>
                                1. Prohibits marketing unless the names of MA organizations or
                                Part D sponsors being advertised are clearly displayed – Page
                                386“Therefore,
                            </div>
                            <Link
                                to={"2023-new-cms-marketing-rules"}
                                style={{ textDecoration: "none", color: "#777" }}
                                className="mx-4"
                            >
                                Read More{" "}
                            </Link>
                        </div>
                    </Link>
                    <Link
                        to={"cms-updates-medicare-marketing-guidelines-5-10-23"}
                        className="section-2-images-sec"
                    >
                        <div className="sec-2-img">
                            <img
                                src="Images\section-2-image-3.jpg"
                                className="section-2-images-padding"
                                alt=""
                            />
                        </div>
                        {/* Image Shading */}
                        <div className="Section-2-image-overlay">
                            <div class="section-2-overlay-3-1"></div>
                            <div class="section-2-overlay-3-2"></div>
                            <div class="section-2-overlay-3-3"></div>
                            <div class="section-2-overlay-3-4"></div>
                            <div class="section-2-overlay-3-5"></div>
                            <div class="section-2-overlay-3-6"></div>
                        </div>
                        <div className="section-2-bg">
                            <h5
                                style={{ color: "black", fontWeight: "600" }}
                                className="mx-4 py-3"
                            >
                                CMS Updates Medicare Marketing Guidelines 5/10/23
                            </h5>
                            <div className="mx-4 mb-3" style={{ color: "#777" }}>
                                On May 10, CMS updated their definition of what constitutes
                                “marketing” to include content that mentions any type of benefit
                                covered by
                            </div>
                            <Link
                                to={"cms-updates-medicare-marketing-guidelines-5-10-23"}
                                style={{ textDecoration: "none", color: "#777" }}
                                className="mx-4"
                            >
                                Read More{" "}
                            </Link>
                        </div>
                    </Link>
                </div>
            </div>
            {/* Section-3 */}
            <div className="Section-3">
                <div className="Section-3-text  ps-3">
                    <h2>
                        New to insurance, a seasoned agent, or an expanding agency? We're
                        here to help!
                    </h2>
                    <p className="my-4">
                        It doesn’t matter if you’re brand new to the insurance industry, if
                        you’re a seasoned agent, or an agency looking to grow your lines of
                        business – we can help!
                    </p>
                    {/* Count Down*/}
                    <Countdown targetDate="2025-10-27T23:59:59" />
                    {/*  Pass a valid date */}
                    <p>
                        October 15 will be here soon. Don’t delay Get contracted and
                        appointed with all the top carriers.
                    </p>
                    <button className="Section-3-button">Get Contracted</button>
                </div>
                <div className="Section-3-img">
                    <img src="Images\Section-3-img.jpg" alt="" />
                </div>
            </div>
            {/* Section-4 */}
            <div className="Section-4">
                <div className="section-4-overlay"></div>
                <div className="Section-4-text">
                    <p className="text-center Section-4-p">
                        <h1>Medicare Training Videos for Licensed Insurance Agents</h1>
                    </p>
                    <div className="d-flex section-2-heading my-4">
                        <div className="landing-page-line my-3"></div>
                        <img
                            src="Icons\spa-solid.svg"
                            alt=""
                            className="landing-page-sec-1-img-1"
                        />
                        <div className="landing-page-line my-3"></div>
                    </div>
                    <p className="text-center Section-4-text-padding">
                        We provide our agents and agencies with coaching, training and the
                        technology to become a successful Medicare Agent.
                    </p>
                    <p className="text-center Section-4-p">
                        <h5>Let us show you how to power your sales.</h5>
                    </p>
                </div>
            </div>
            {/* Section-5 */}
            <div className="Section-5">
                <div className="Section-5-left">
                    <h2>Why Choose Boomers as your FMO?</h2>
                    {/* Sect-5-text-1 */}
                    <div className="mt-4">
                        <div className="d-flex">
                            <img src="Icons\circle-dot-solid.svg" className="my-1" alt="" />
                            <h5 className="mx-3">Online Enrollment tools</h5>
                        </div>
                        <p className="mx-4 my-2 px-2">
                            The impact of COVID_19 means we are no longer marketing within a
                            business-as-usual setting. AEP 2024 is around the corner. Are you
                            100% ready for telework? Boomers offers a free online quoting and
                            self-enrollment website that you or your client can im-put their
                            prescriptions, their primary doctor and their local pharmacy and
                            receive a comparison of all your contracted plans
                        </p>
                        <p className="mx-4 my-4 ps-2 pe-5">
                            You are even able to email or text the Scope of Appointment and
                            have it all stored electronically while giving you updates on
                            status.
                        </p>
                    </div>
                    {/* Sect-5-text-2 */}
                    <div className="mt-4">
                        <div className="d-flex">
                            <img src="Icons\circle-dot-solid.svg" className="my-1" alt="" />
                            <h5 className="mx-3">Digital Marketing</h5>
                        </div>
                        <p className="mx-4 my-2 px-2">
                            Baby Boomers turning 65 in 2023 are very different from their
                            predecessors. Today’s Baby Boomers are comfortable using their
                            phones and tablets to educate themselves on Medicare and compare
                            plan options. If you have not incorporated Boomers digital
                            marketing into your marketing campaign, you are missing a prime
                            opportunity for new enrollments. Stop overlooking the impact that
                            digital marketing could have on reaching those aging into
                            Medicare. Whether it’s a landing page for your online
                            self-enrollment link or a Facebook ad campaign to drive awareness.
                        </p>
                        <p className="mx-4 my-4 px-2">
                            Boomers Digital Department is here to help.
                        </p>
                    </div>

                    {/* Sect-5-text-3 */}
                    <div className="mt-4">
                        <div className="d-flex">
                            <img src="Icons\circle-dot-solid.svg" className="my-1" alt="" />
                            <h5 className="mx-3">Accordion Title</h5>
                        </div>
                        <p className="mx-4 my-2 px-2">
                            There is nothing worse than an agent who thinks they can just wing
                            it. Boomers is committed to your learning.Learn new marketing and
                            sales strategies that are used by some of the most successful
                            agents in the industry. You can also find a calendar of upcoming
                            trainings by our Health Plan Partners. Business cards, flyers, and
                            apparel can also be found on our store.
                        </p>
                        <p className="mx-4 my-4 px-2">
                            Read our blog for marketing tips, selling strategies and industry
                            news and trends from the Boomers Team.
                        </p>
                    </div>
                </div>
                <div className="Section-5-right">
                    <h2>Schedule a meeting with your Territory Manager.</h2>
                    {/* Secion-5-form */}
                    <div className="Section-5-form my-5">
                        <div>
                            <h6>Name</h6>
                            <input
                                type="text"
                                className="Section-5-Input-Name"
                                placeholder="Enter Your Name"
                            />
                        </div>
                        <div className="py-4">
                            <h6>Last Name</h6>
                            <input
                                type="text"
                                className="Section-5-Input-Name"
                                placeholder="Enter Last Name"
                            />
                        </div>
                        <div>
                            <h6>Email</h6>
                            <input
                                type="text"
                                className="Section-5-Input-Name"
                                placeholder="Enter Your Email"
                            />
                        </div>
                        <div>
                            <button className="Section-5-button my-4">Get Now</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section-6 (Mail Submition)*/}
            <div className="Section-6-bg pt-3">
                <div className="Section-6-bg-img"></div>
            </div>
            <div className="Section-6-wrap Section-6">
                <MailSubmition />
            </div>
            {/* Footer */}
            <Footer />
        </>
    );
};
export default Home;