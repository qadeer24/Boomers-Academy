import React from 'react'
import { useState, useEffect } from "react";


// const images = [
//     "https://i.pinimg.com/originals/e5/9b/8b/e59b8bf4007df9103b891051875cee9c.jpg",
//     "https://i.pinimg.com/originals/e5/9b/8b/e59b8bf4007df9103b891051875cee9c.jpg",
//     "https://i.pinimg.com/originals/e5/9b/8b/e59b8bf4007df9103b891051875cee9c.jpg",
// ];
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


const LandinPage = () => {

    useEffect(() => {
        const carouselElement = document.getElementById("carouselExample");
        const carousel = new window.bootstrap.Carousel(carouselElement, {
            interval: 3000,
            pause: false,
        });
        return () => carousel.dispose();
    }, []);


    return (
        <>
            {/* <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                            <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div> */}

            {/* Footer */}
            <div className="footer mx-5" style={{backgroundColor: "black", color: "white"}}>
                <div className="footer-sec-1">
                    {/* col-1 */}
                    <div className="footer-sec-1-col-1">
                        <h3>About Boomers Insurance</h3>
                        <p>Boomers Insurance is independent of any insurance company. We provide expert,unbiased assistance to Medicare recipients who expect and deserve the highest quality health insurance at the right price.</p>
                        <p>Members receive personalized plan guidance based on their location, preferences and specific health care need.</p>
                    </div>
                    {/* col-2 */}
                    <div className="footer-sec-1-col-2">
                        <h3>Useful Links</h3>
                        <p onClick={socialsecurityLink}>SocialSecurity.gov</p>
                        <p onClick={medicareLink}>Medicare & You —</p>
                        <p onClick={medicareLink}>Handbook</p>
                        <p onClick={dentalLink}>Dental & Vision Plans</p>
                        <p onClick={CoveredCaliforniaLink}>Covered California Info</p>
                    </div>
                    {/* col-3 */}
                    <div className="footer-sec-1-col-3">
                        <h3>Social links</h3>
                        <p onClick={FacebookLink}>Facebook</p>
                        <p onClick={twitterLink}>Twitter</p>
                        <p onClick={YoutubeLink}>Youtube</p>
                        <p onClick={LinkedinLink}>Linkedin</p>
                        <p onClick={VimeoLink}>Vimeo</p>
                    </div>
                    {/* col-4 */}
                    <div className="footer-sec-1-col-4">
                        <h3>Blog News</h3>
                        <p>CMS Updates Medicare Marketing Guidelines 5/10/23</p>
                        <p>16 May 2023</p>
                        <p>2023 NEW CMS MARKETING RULES</p>
                        <p>20 April 2023</p>
                    </div>
                </div>
                <div className="footer-sec-2"></div>
                <div className="footer-sec-3"></div>
            </div>
        </>
    )
}

export default LandinPage
