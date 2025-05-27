import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MailSubmition from "./MailSubmition";
import Header from "./Headers/Header";
import Footer from "./Footer";
import Layout from "../Layouts/Layouts";

const Marketing = ({
    LoginisActive,
    SignUpisActive,
    LoginClick,
    SignUpClick,
    overlayIsActive,
}) => {
    return (
        <Layout>
            {/* Marketing Products Row 1 */}
            <div className="products-row products-row-1">
                <div className="products-responsive-row">
                    <div className="product">
                        <Link
                            to={"/custom-canopy-table-cover-and-pull-up-banner-package"}
                            style={{ textDecoration: "none" }}
                        >
                            <img src="Images\product-1.webp" className="product-img" alt="" />
                            <div className="product-name pt-2">
                                Custom Canopy, Table Cover and Pull-up Banner package
                            </div>
                            <div className="product-price">$ 0,00</div>
                        </Link>
                        <button className="add-to-cart-button my-2">Add to cart</button>
                    </div>
                    <div className="product">
                        <Link style={{ textDecoration: "none" }} to={"/boomers-tote-bag"}>
                            <img src="Images\product-2.webp" className="product-img" alt="" />
                            <div className="product-name pt-2">Boomers Tote Bag</div>
                            <div className="product-price">$ 0,00</div>
                        </Link>
                        <button className="add-to-cart-button my-2">Add to cart</button>
                    </div>
                </div>
                <div className="products-responsive-row">
                    <div className="product">
                        <Link
                            style={{ textDecoration: "none" }}
                            to={"/boomers-pen-for-events"}
                        >
                            <img src="Images\product-3.webp" className="product-img" alt="" />
                            <div className="product-name pt-2">Boomers Pen for events</div>
                            <div className="product-price">$ 0,00</div>
                        </Link>
                        <button className="add-to-cart-button my-2">Add to cart</button>
                    </div>
                    <div className="product">
                        <Link
                            style={{ textDecoration: "none" }}
                            to={"/boomers-business-cards-qty-1000"}
                        >
                            <img src="Images\product-4.webp" className="product-img" alt="" />
                            <div className="product-name pt-2">
                                Boomers Business Cards qty 1000
                            </div>
                            <div className="product-price">$ 0,00</div>
                        </Link>
                        <button className="add-to-cart-button my-2">Add to cart</button>
                    </div>
                </div>
            </div>
            {/* Marketing Products Row 2 */}
            <div className="products-row products-row-2">
                <div className="product">
                    <Link
                        style={{ textDecoration: "none" }}
                        to={"/2024-hola-boomer-book"}
                    >
                        <img src="Images\product-5.webp" className="product-img" alt="" />
                        <div className="product-name pt-2">2024 Hola Boomer Book</div>
                        <div className="product-price">$ 0,00</div>
                    </Link>
                    <button className="add-to-cart-button my-2">Add to cart</button>
                </div>
                <div className="product">
                    <Link style={{ textDecoration: "none" }} to={"/content-marketing"}>
                        <img src="Images\product-6.webp" className="product-img" alt="" />
                        <div className="product-name pt-2">2024 Hello Boomer Book</div>
                        <div className="product-price">$ 0,00</div>
                    </Link>
                    <button className="add-to-cart-button my-2">Add to cart</button>
                </div>
            </div>
            {/* Section-6 (Mail Submition)*/}
            <div className="Section-6-bg marketing-Section-6-bg">
                <div className="Section-6-bg-img"></div>
            </div>
            <div className="Section-6-wrap mail-submit-marketing ">
                <MailSubmition />
            </div>
        </Layout>
    );
};
export default Marketing;
