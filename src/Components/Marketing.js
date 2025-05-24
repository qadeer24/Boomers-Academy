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
            <Header
                overlayIsActive={overlayIsActive}
                LoginisActive={LoginisActive}
                SignUpisActive={SignUpisActive}
                LoginClick={LoginClick}
                SignUpClick={SignUpClick}
            />

            <main>
                {children}
            </main>

            {/* Footer */}
            <Footer/>

        </>
    )
}

export default Marketing
