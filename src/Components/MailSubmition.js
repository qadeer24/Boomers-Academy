import React from 'react'
import './style.css'

const MailSubmition = () => {
    return (
        <>
            <div className="mail-submit py-5">
                <div className='section-6-img mt-2'><img src="Icons\envelope-open-text-solid.svg" alt="" /></div>
                <div className="Section-6-text ms-4 me-2">
                    <h5>Subsribe To Our Newsletter</h5>
                    <p>Receive weekly newsletter coaching materials, new courses, popular book and much more !</p>
                </div>
                <input className="Section-6-input me-3" type="text" placeholder='Email Address' />
                <button className='Section-6-button my-4'>Submit</button>

            </div>
        </>
    )
}

export default MailSubmition
