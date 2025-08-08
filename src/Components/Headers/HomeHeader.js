import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Signup from "../Signup";

const HomeHeader = ({ LoginisActive, SignUpisActive, LoginClick, SignUpClick }) => {
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
    return (
        <>
            <div className="header-landing-page">

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
            <Signup
              LoginisActive={LoginisActive}
              SignUpisActive={SignUpisActive}
              LoginClick={LoginClick}
            //   SignUpClick={SignUpClick}
            />
        </>
    )
}

export default HomeHeader
