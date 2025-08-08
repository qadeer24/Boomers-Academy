import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Signup = ({ LoginisActive, SignUpisActive, LoginClick, SignUpClick }) => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        npn: "",
        password: "",
        isChecked: false
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [SignupSuccessful, setSignupSuccessful] = useState(false);


    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");
        setErrors({}); // clear previous errors

        try {
            const apiUrl = process.env.REACT_APP_BASE_URL;

            const response = await fetch(`${apiUrl}/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    firstName: form.firstName.trim(),
                    lastName: form.lastName.trim(),
                    email: form.email.trim().toLowerCase(),
                    npn: form.npn.trim(),
                    password: form.password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                if (data.errors) {
                    setErrors(data.errors);
                    setMessage(data.message || "Validation failed");
                } else {
                    setMessage(data.message || "Something went wrong");
                }
                return;
            }

            // Success
            setMessage("Sign up successful!");
            console.log("User created:", data);

            setForm({
                firstName: '',
                lastName: '',
                email: '',
                npn: '',
                password: '',
                isChecked: false,
            });
        } catch (err) {
            setMessage("An unexpected error occurred. Please try again.");
        } finally {
            setLoading(false);
            setSignupSuccessful(true);
        }
    };
    const isFormValid =
        form.firstName.trim() !== "" &&
        form.lastName.trim() !== "" &&
        form.email.trim() !== "" &&
        form.npn.trim() !== "" &&
        form.password.trim() !== "" &&
        form.isChecked;

    const handleRedirect = () => {
        window.location.href = "https://nipr.com";
    };

    const [About, setAbout] = useState(false);
    const [Medicare, setMedicare] = useState(false);
    const [Contracted, setContracted] = useState(false);
    const [Marketing, setMarketing] = useState(false);
    const [Training, setTraining] = useState(false);

    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;

        if (path === '/') {
        } else if (path === '/about') {
            setAbout(!About);
        } else if (path === '/medicare-plan') {
            setMedicare(!Medicare);
        } else if (path === '/get-contracted') {
            setContracted(!Contracted);
        } else if (path === '/marketing') {
            setMarketing(!Marketing);
        } else if (path === '/training') {
            setTraining(!Training);
        }
    }, [location]);

    return (
        <div>
            {/* SignUp */}
            <div className={SignUpisActive ? 'login-bg' : 'login-bg-before'}></div>

            <div className={SignUpisActive ? 'Login-wrap-after' : 'Login-Wrap-before'}>
                <div className="d-flex form-hero-section">
                    {/* main form left side */}
                    <div className="register-Form-logo-area py-5">
                        {/* Logo */}
                        <div className="register-Form-logo">
                            <img className="logo-img" src="\Images\logo.svg" alt="" />
                            <h3 className="logo-text">
                                Welcome to The Boomers Academy for Insurance Agents
                            </h3>
                        </div>
                        {/* Sign-up button */}
                        <button
                            type="button"
                            onClick={() => {
                                LoginClick();
                                SignUpClick();
                            }}
                            className="btn btn-light register-Form-logo-button"
                        >
                            Sign in
                        </button>
                    </div>

                    {/* main form right side */}
                    <div className="Register-Form py-3" style={{ backgroundColor: 'white' }}>
                        {/* Sign-up heading */}
                        <div>
                            <h3 className="text-center pt-1" style={{ color: 'black', fontWeight: '700' }}>
                                Create Account
                                <img
                                    onClick={SignUpisActive => false}
                                    src="Icons\xmark-solid(3).svg"
                                    className="login-close"
                                    alt=""
                                />
                            </h3>
                        </div>
                        <form onSubmit={handleSubmit}>
                            {/* First Name */}
                            <div className="input-group registration-input mb-2">
                                <span>First Name :</span>
                                <input
                                    type="text"
                                    className=" form-input"
                                    aria-label="Recipient's username"
                                    name="firstName"
                                    value={form.firstName}
                                    onChange={handleChange}
                                    aria-describedby="basic-addon2"
                                />
                            </div>

                            {/* Last Name */}
                            <div className="input-group registration-input mb-2">
                                <span>Last Name :</span>
                                <input
                                    type="text"
                                    className=" form-input"
                                    aria-label="Recipient's username"
                                    name="lastName"
                                    value={form.lastName}
                                    onChange={handleChange}
                                    aria-describedby="basic-addon2"
                                />
                            </div>
                            {/* Email */}
                            <div className="input-group registration-input mb-2">
                                <span>Email :</span>
                                <input
                                    type="text"
                                    className=" form-input"
                                    aria-label="Recipient's username"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    aria-describedby="basic-addon2"
                                />
                            </div>
                            {/* Password */}
                            <div className="input-group registration-input mb-2">
                                <span>Password :</span>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        className="form-input pr-10"
                                        aria-label="Recipient's username"
                                        name="password"
                                        value={form.password}
                                        onChange={handleChange}
                                        aria-describedby="basic-addon2"
                                    />
                                </div>
                            </div>

                            {/* National Producer Number */}
                            <div className="input-group registration-input mb-2">
                                <span>(NPN) National Producer Number:</span>
                                <input
                                    type="text"
                                    className=" form-input"
                                    aria-label="Recipient's username"
                                    name="npn"
                                    value={form.npn}
                                    onChange={handleChange}
                                    aria-describedby="basic-addon2"
                                />
                            </div>
                            {/* Website link and check box */}
                            <div className=" checkbox-div mt-3" style={{ color: 'black' }}>
                                Look up at{' '}
                                <Link onClick={handleRedirect} style={{ color: 'black' }}>
                                    {' '}
                                    NIPR.com
                                </Link>
                            </div>
                            <div className="d-flex checkbox-div mt-3 mb-1">
                                <input
                                    className="form-check-input checkbox-border"
                                    type="checkbox"
                                    value=""
                                    name="isChecked"
                                    checked={form.isChecked}
                                    onChange={handleChange}
                                    id="flexCheckDefault"
                                />
                                <label className="form-check-label checkbox-text px-2" for="flexCheckDefault">
                                    By registering, you agree to Boomers Academy's Terms of Service and Privacy Policy. You consent to receiving updates and communications from us.
                                </label>
                            </div>

                            {message && <p className="error-message text-danger mt-2">{message}</p>}

                            {/* Submit Button */}
                            <div
                            className={
                                    SignupSuccessful
                                        ? 'd-none'
                                        : ''
                                }
                                >
                            <button
                                type="submit"
                                className={
                                    isFormValid
                                        ? 'btn  form-submit-button mt-3'
                                        : 'btn  form-submit-button-before mt-3'
                                }
                                style={{ cursor: isFormValid ? 'pointer' : 'not-allowed' }}
                                disabled={!isFormValid}
                            >
                                {loading ? "Signing Up..." : "Sign Up"}
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
