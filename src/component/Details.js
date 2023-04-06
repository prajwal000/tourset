import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Data from './Data.json'

function Details() {
    let { id } = useParams();
    let qq = Data.find((a) => a.id == id)
    return (
        <>
            <section className='about-us-top'>
                <div className='text-center sub-color pt-5 pb-5'>
                    <div className='pt-5 pb-5'>
                        <h1 className='text-white'>Blog Details</h1>
                        <span className='fs-4 text-white pb-5'>
                            <Link to='/' className='text-white pe-2'>Home</Link>/<Link to='/Blog' className='text-white pe-2'><span className='ps-2'>Blog</span></Link>/<span className='ps-2'>Blog Details</span>
                        </span>
                    </div>
                </div>
            </section>
            <section className='container py-5'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <img src={qq.image} width='100%' height='466px' />
                        <div className='d-flex py-5 align-items-center'>
                            <div>
                                <img src={require('../images/author.png')} width='50px' />
                            </div>
                            <div className='px-2'>
                                <h6 className='fw-bold  mb-0'>Jony bristow </h6>
                                <span className='author-txt'>Admin</span>
                            </div>
                        </div>
                        <div>
                            <span className='heading '>{qq.Heading1}</span>
                            <p className='hero-2 py-2'>{qq.data1}</p>
                            <span className='heading'>{qq.Heading2}</span>
                            <p className='hero-2 py-2'>{qq.data2}</p>
                            <div className='py-4'><img src={qq['sub-img1']} width='400px' height='207' /> <img src={qq['sub-img2']} className='ps-4' width='450px' height='207' /></div>
                            <p className='hero-2 py-4'>{qq.data2}</p>
                            <h2 className='py-4'>Add A Comment
                            </h2>
                            <div className='py-3 bg-brand'>

                                <div>
                                    <form className='px-5 py-5'>
                                        <input type="text" name="first_name" className='text-input' placeholder='Enter Your Name' />
                                        <p className='py-3'></p>
                                        <input type="email" name="last_name" className='text-input ' placeholder='Enter your Email Address'/>
                                        <p className='py-3'></p>
                                        <textarea rows="6" cols="93" name="comment" form="usrform" placeholder='Type Your Keyword' className='text-input'>
                                         </textarea>
                                         <button type="button" class="btn hero-btn me-4">Contact us</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Details
