import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MailSubmition from '../MailSubmition';
import Header from '../Headers/Header';
import Footer from '../Footer';


const CustomCanopy = ({ LoginisActive, SignUpisActive, LoginClick, SignUpClick, overlayIsActive }) => {
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


            {/* Product */}
            <div className="marketing-product">
                <div className='marketing-product-img'>
                    <img src="Images\product-2.webp" alt="" />
                </div>

                <div className='marketing-product-text'>
                    <p><Link className='marketing-product-text-Link' to={'/'}>Home</Link> / <Link className='marketing-product-text-Link' to={'/'}>Uncategorized</Link> / Custom Canopy, Table Cover and Pull-up Banner package</p>
                    <Link className='marketing-product-uncategorized-link'>Uncategorized</Link>
                    <h3>Custom Canopy, Table Cover and Pull-up Banner package</h3>
                    <h4>$ 0,00</h4>
                    <button className='add-to-cart-button my-2'>Add to cart</button>
                    <div className="marketing-product-line"></div>
                    <div className="d-flex my-2">
                        <span>Category:</span>
                        <Link className='marketing-product-uncategorized-link ms-1'>Uncategorized</Link>
                    </div>
                </div>

            </div>

            {/* Related Products */}
            <div className="marketing-related-products">
                <h3>Related Products</h3>

                <div className="product-row-3">
                    <div className="marketing-related-product" style={{marginLeft: "0"}}>
                        <Link style={{textDecoration: "none"}} to={'/2024-hola-boomer-book'}>
                            <img src="Images\product-5.webp" className='product-img' alt="" />
                            <div className="product-name pt-2">2024 Hola Boomer Book</div>
                            <div className="product-price">$ 0,00</div>
                        </Link>
                        <button className='add-to-cart-button my-2'>Add to cart</button>
                    </div>
                    <div className="marketing-related-product">
                        <Link style={{textDecoration: "none"}} to={'/boomers-pen-for-events'}>
                            <img src="Images\product-3.webp" className='product-img' alt="" />
                            <div className="product-name pt-2">Boomers Pen for events</div>
                            <div className="product-price">$ 0,00</div>
                        </Link>
                        <button className='add-to-cart-button my-2'>Add to cart</button>
                    </div>
                    <div className="marketing-related-product">
                        <Link style={{textDecoration: "none"}} to={'/boomers-business-cards-qty-1000'}>
                            <img src="Images\product-4.webp" className='product-img' alt="" />
                            <div className="product-name pt-2">Boomers Business Cards qty 1000</div>
                            <div className="product-price">$ 0,00</div>
                        </Link>
                        <button className='add-to-cart-button my-2'>Add to cart</button>
                    </div>
                    <div className="marketing-related-product">
                        <Link style={{textDecoration: "none"}} to={'/content-marketing'}>
                            <img src="Images\product-6.webp" className='product-img' alt="" />
                            <div className="product-name pt-2">2024 Hello Boomer Book</div>
                            <div className="product-price">$ 0,00</div>
                        </Link>
                        <button className='add-to-cart-button my-2'>Add to cart</button>
                    </div>
                </div>
            </div>


            
            {/* Section-6 (Mail Submition)*/}
            <div className="Section-6-bg pt-3"><div className='Section-6-bg-img'></div></div>
            <div className="Section-6-wrap mail-submit-marketing-product">
                <MailSubmition/>
            </div>


            {/* Footer */}
            <Footer/>

        </>
    )
}

export default CustomCanopy
