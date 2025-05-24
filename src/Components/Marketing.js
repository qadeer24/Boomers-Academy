import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MailSubmition from './MailSubmition';
import Header from './Headers/Header';
import Footer from './Footer';

const Marketing = ({LoginisActive, SignUpisActive, LoginClick, SignUpClick, overlayIsActive, children}) => {
    return (
        <>
            {/* Header */}
            <header>
                <Header
                    overlayIsActive={overlayIsActive}
                    LoginisActive={LoginisActive}
                    SignUpisActive={SignUpisActive}
                    LoginClick={LoginClick}
                    SignUpClick={SignUpClick}
                />
            </header>

            <main>
                {children}
            </main>

            {/* Footer */}
            <footer>
                <Footer/>
            </footer>

        </>
    )
}

export default Marketing
