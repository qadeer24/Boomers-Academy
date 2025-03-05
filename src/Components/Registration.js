import React, { useState } from "react";
import './style.css'
import { Link } from 'react-router-dom'





const Registration = () => {

    const [formData, setFormData] = useState({
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        isChecked: false,
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    // Check if all inputs are filled and checkbox is checked
    const isFormValid =
        formData.input1.trim() !== "" &&
        formData.input2.trim() !== "" &&
        formData.input3.trim() !== "" &&
        formData.input4.trim() !== "" &&
        formData.isChecked; // Ensure the checkbox is checked



    const handleRedirect = () => {
        window.location.href = "https://nipr.com";
    };


    return (
        <>
            {/* Header */}
            <div className="header">

                {/* Header-Right-Side */}
                <div className='Registration-Header-Right-Side'>
                    <div className='Registration-Header-Right-Side-img'></div>
                    <div> 1-800-815-1943(TTY:711)</div>
                </div>

                {/* Header-Right-Side */}
                <div className='Registration-Header-left-Side'>
                    <div className='Registration-Header-left-Side-col1 d-flex mx-4'>
                        <div className='Registration-Header-left-Side-col1-img'></div>
                        <div style={{ cursor: "pointer" }}>Registration</div>
                    </div>
                    <div className='Registration-Header-left-Side-col2 d-flex mx-4'>
                        <div className='Registration-Header-left-Side-col2-img'></div>
                        <div style={{ cursor: "pointer" }}>Login</div>
                    </div>
                </div>

            </div>


            {/* main form */}
            <div className="d-flex form-hero-section">

                {/* main form left side */}
                <div className="register-Form-logo-area">

                    {/* Logo */}
                    <div className='register-Form-logo'>
                        <img className='logo-img' src="\Images\logo.svg" alt="" />
                        <h3 className='logo-text'>Welcome to The Boomers Academy for Insurance Agents</h3>
                    </div>

                    {/* Sign-up button */}
                    <button type="button" class="btn btn-light register-Form-logo-button">Sign Up</button>

                    {/* Go to login Page */}
                    <div className="move-to-login-page my-3">Already have an account? <Link to={'/login'} style={{color: "white"}}> Sign in </Link></div>
                </div>

                {/* main form right side */}
                <div className='Register-Form py-3'>

                    {/* Sign-up heading*/}
                    <div>
                        <h3 className='text-center pt-1' style={{ color: "black", fontWeight: "700" }}>Create Account</h3>
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
                        <input type="text" class=" form-input" aria-label="Recipient's username" name="input4" value={formData.input4} onChange={handleChange} aria-describedby="basic-addon2" />
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

        </>
    )
}

export default Registration
