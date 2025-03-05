import React, { useState } from "react";
import './style.css'
import { Link } from 'react-router-dom'

const Login = () => {

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
                        <Link to={'/signup'} className="d-flex" style={{color: "white", textDecoration: "none"}}>
                            <div className='Registration-Header-left-Side-col1-img'></div>
                            <div style={{ cursor: "pointer" }}>Registration</div>
                        </Link>
                    </div>
                    <div className='Registration-Header-left-Side-col2 d-flex mx-4'>
                        <Link to={'/login'} className="d-flex" style={{color: "white", textDecoration: "none"}}>
                            <div className='Registration-Header-left-Side-col2-img'></div>
                            <div style={{ cursor: "pointer" }}>Login</div>
                        </Link>
                    </div>
                </div>

            </div>


            {/* main form */}
            <div className="d-flex form-hero-section">

                {/* main form right side */}
                <div className='Register-Form py-3'>

                    {/* Sign-up heading*/}
                    <div>
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
                            <input type="text" class=" form-input" aria-label="Recipient's username" name="input4" value={formData.input4} onChange={handleChange} aria-describedby="basic-addon2" />
                        </div>


                        {/* Submit Button */}
                        <button type="button" className={isFormValid ? "btn  form-submit-button mt-3" : "btn  form-submit-button-before mt-3"} style={{ cursor: isFormValid ? "pointer" : "not-allowed" }}>Sign in</button>

                    </div>

                </div>


                {/* main form left side */}
                <div className="register-Form-logo-area">

                    {/* Logo */}
                    <div className='register-Form-logo'>
                        <img className='logo-img' src="\Images\logo.svg" alt="" />
                        <h3 className='logo-text'>Welcome to The Boomers Academy for Insurance Agents</h3>
                    </div>

                    {/* Sign-up button */}
                    <button type="button" class="btn btn-light register-Form-logo-button">Sign in</button>

                    {/* Go to login Page */}
                    <div className="move-to-login-page my-3">Don't have an account? <Link to={'/signup'} style={{ color: "white" }}> Sign Up </Link></div>
                </div>
            </div>
        </>
    )
}

export default Login
