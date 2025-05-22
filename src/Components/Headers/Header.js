import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({LoginisActive, SignUpisActive, LoginClick, SignUpClick}) => {


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
        </>
    )
}

export default Header;
