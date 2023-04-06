import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
    return (
        <>
            <section className='about-us-top'>
                <div className='text-center sub-color pt-5 pb-5'>
                    <div className='pt-5 pb-5'>
                        <h1 className='text-white'>Contact us</h1>
                        <span className='fs-4 text-white pb-5'>
                            <Link to='/' className='text-white pe-2'>Home</Link>/<span className='ps-2'>Contact us</span>
                        </span>
                    </div>
                </div>
            </section>
            <section className='container py-5'>
                <div className='row'>
                    <div className='col-lg-6 '>
                        <div className='d-flex align-items-center justify-content-between  bg-brand'>
                            <div className='py-4 d-flex align-items-center ps-4'>
                                <div><p className='rounded-circle contact-icon'><i class="bi bi-envelope-fill phone"></i></p></div>
                                <div className='contact-text ps-4'>Email Address</div>
                            </div>
                            <div className='pe-5'>
                                <span className='email'>contactinfo@gmail.com<br /></span>

                                <span className='email'>contactinfo@gmail.com<br /></span>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 bg-brand'>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div className='py-4 d-flex align-items-center ps-4'>
                                <div><p className='rounded-circle contact-icon'><i class="bi bi-telephone-fill phone"></i></p></div>
                                <div className='contact-text ps-4'>Phone</div>
                            </div>
                            <div className='pe-5'>
                                <span className='email'>9800000000<br /></span>

                                <span className='email'>9800000000<br /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container py-5'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={require('../images/contact-img.png')} />
                    </div>
                    <div className='col-lg-6'>
                        <div className='py-3 bg-brand'>

                            <div>
                                <form className='px-5 py-5'>
                                    <input type="text" name="first_name" className='text-input' placeholder='Enter Your Name' />
                                    <p className='py-3'></p>
                                    <input type="email" name="last_name" className='text-input ' placeholder='Enter your Email Address' />
                                    <p className='py-3'></p>
                                    <textarea rows="6" cols="93" name="comment" form="usrform" placeholder='Type Your Keyword' className='text-input'>
                                    </textarea>
                                    <button type="button" class="btn hero-btn me-4">Contact us</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
