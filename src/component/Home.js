import React from 'react'
import { Link } from 'react-router-dom'
import Data from './Data.json'

function Home() {
    return (
        <>
            <section classname="hero-container">


                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner container position-relative">
                        <img src={require('../images/banner-shape1.png')} className='banner-shape1 position-absolute' />
                        <img src={require('../images/banner-shape2.png')} className='banner-shape-2 position-absolute' />
                        <img src={require('../images/banner-shape3.png')} className='banner-shape-3 position-absolute' />

                        <div className="carousel-item active">
                            <div className='row py-5'>

                                <div className='col-lg-6 hero-content'>
                                    <h3 className='hero-1'>Explore Your Travel</h3>
                                    <h1 className='hero-txt py-4'>
                                        Start planning your dream trip today!
                                    </h1>
                                    <p className='hero-2 py-4'>I travel not to go anywhere, but to go. I travel for travel's sake <br /> the great affair is to move.</p>
                                    <button type="button" class="btn hero-btn me-4">Contact us</button>
                                    <button type="button" class="btn hero-btn-2">Learn More</button>

                                </div>
                                <div className='col-lg-6'>
                                    <img src={require('../images/slide-1.png')} width='600px' className='mob-img' />

                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='row py-5'>
                                <div className='col-lg-6 hero-content'>
                                    <h3 className='hero-1'>Explore Your Travel</h3>
                                    <h1 className='hero-txt py-4'>
                                        Trusted Travel <br />Agency
                                    </h1>
                                    <p className='hero-2 py-4'>I travel not to go anywhere, but to go. I travel for travel's sake <br /> the great affair is to move.</p>
                                    <button type="button" class="btn hero-btn me-4">Contact us</button>
                                    <button type="button" class="btn hero-btn-2">Learn More</button>

                                </div>
                                <div className='col-lg-6'>
                                    <img src={require('../images/slide-2.png')} width='600px' />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='row py-5'>
                                <div className='col-lg-6 hero-content'>
                                    <h3 className='hero-1'>Explore Your Travel</h3>
                                    <h1 className='hero-txt py-4'>
                                        Get Exclusive Tour
                                    </h1>
                                    <p className='hero-2 py-4'>I travel not to go anywhere, but to go. I travel for travel's sake <br /> the great affair is to move.</p>
                                    <button type="button" class="btn hero-btn me-4">Contact us</button>
                                    <button type="button" class="btn hero-btn-2">Learn More</button>

                                </div>
                                <div className='col-lg-6'>
                                    <img src={require('../images/slide-3.png')} width='600px' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            <section className='hero-banner-1 py-5'>
                <div className='container'>
                    <div className='text-center py-4'>
                        <h4 className='hero-1'>Destinations</h4>
                        <h4 className='hero-txt py-4'>
                            Choose Your Place
                        </h4>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 zoom col-sm-12 py-3'>
                            <img src={require('../images/1.png')} width='620px' className='zoom-img' />
                            <div className='position-relative'>
                                <span className='img-txt-upper position-absolute'>male</span>
                                <span className='img-txt-lower position-absolute'>Maldives</span>
                            </div>
                        </div>
                        <div className='col-lg-6 zoom col-sm-12 py-3'>
                            <img src={require('../images/2.png')} width='620px' className='zoom-img' />
                            <div className='position-relative'>
                                <span className='img-txt-upper position-absolute'>Bangkok</span>
                                <span className='img-txt-lower position-absolute'>Thailand</span>
                            </div>
                        </div>
                    </div>
                    <div className='row py-4'>
                        <div className='col-lg-4 zoom col-sm-12 mob-ban2'>
                            <img src={require('../images/3.png')} width='407px' className='zoom-img' />
                            <div className='position-relative'>
                                <span className='img-txt-upper position-absolute'>Kualalumpur</span>
                                <span className='img-txt-lower position-absolute'>Malasiya</span>
                            </div>
                        </div>
                        <div className='col-lg-4 zoom mob-ban2'>
                            <img src={require('../images/4.png')} width='407px' className='zoom-img' />
                            <div className='position-relative'>
                                <span className='img-txt-upper position-absolute'>Kathmandu</span>
                                <span className='img-txt-lower position-absolute'>Nepal</span>
                            </div>
                        </div>
                        <div className='col-lg-4 zoom mob-ban2'>
                            <img src={require('../images/5.png')} width='407px' className='zoom-img' />
                            <div className='position-relative'>
                                <span className='img-txt-upper position-absolute'>Jakarta</span>
                                <span className='img-txt-lower position-absolute'>Indoesia</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className='container py-5'>
                <div className='row py-5'>
                    <div className='col-lg-6'>
                        <h3 className='hero-1'>About us</h3>
                        <h1 className='hero-text '>
                            Explore all tour of the <br /> world with us.</h1>
                        <p className='hero-2 py-3'>Lorem Ipsum available, but the majority have suffered  <br />alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.</p>
                        <div className='d-flex align-items-center pb-5'>
                            <div className='rounded-circle about-icon'><i class="bi bi-compass fs-1 text-white"></i></div>
                            <div className='ps-4'>
                                <h4 className='about-text fw-bold'>Tour guide</h4>
                                <span className='hero-2 py-3'>Lorem Ipsum available, but the majority have <br /> suffered alteration in some.</span>
                            </div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <div className='rounded-circle about-icon'><i class="bi bi-compass fs-1 text-white"></i></div>
                            <div className='ps-4'>
                                <h4 className='about-text fw-bold'>Friendly price</h4>
                                <span className='hero-2 py-3'>Lorem Ipsum available, but the majority have <br /> suffered alteration in some.</span>
                            </div>
                        </div>
                        <div className='d-flex align-items-center py-5'>
                            <div className='rounded-circle about-icon'><i class="bi bi-compass fs-1 text-white"></i></div>
                            <div className='ps-4'>
                                <h4 className='about-text fw-bold'>Reliable tour</h4>
                                <span className='hero-2 py-3'>Lorem Ipsum available, but the majority have <br /> suffered alteration in some.</span>
                            </div>
                        </div>
                        <button type="button" class="btn hero-btn me-4">Contact us</button>
                    </div>
                    <div className='col-lg-6'>
                        <img src={require('../images/1 (1).png')} width='600px' />
                    </div>
                </div>
            </section>
            <section className='banner-about'>
                <div className='container py-5'>
                    <div className=' d-flex justify-content-end'>
                        <div>
                            <h3 className='hero-1'>Love Where You're Going</h3>
                            <h1 className='hero-text pb-3'>
                                Learn new things by<br />traveling the world.
                            </h1>
                            <span className='hero-2 py-5'>Lorem Ipsum available, but the majority have suffered <br />alteration in some form, by injected humour, or randomised <br />words which don't look even slightly believable.</span>
                            <Link to='https://www.youtube.com/watch?v=4OiXfDdbtnM'><p className='py-4'><i class="bi bi-play-circle-fill "></i></p></Link>
                            <div className='d-flex pb-5'>
                                <div>
                                    <h2 className='brand'>77k</h2>
                                    <p className='hero-2'>Our local guides</p>
                                </div>
                                <div className='ps-4'>
                                    <h2 className='brand'>15%</h2>
                                    <p className='hero-2'>Trusted tour agency</p>
                                </div>
                                <div className='ps-4'>
                                    <h2 className='brand'>15%</h2>
                                    <p className='hero-2'>Travel happiness</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container py-5'>
                <div className='text-center py-4'>
                    <h4 className='hero-1'>Featured Tours</h4>
                    <h5 className='hero-txt-1 py-4'>
                        Most Popular Tours
                    </h5>
                </div>
                <div className='row'>
                    {
                        Data.slice(0, 3).map(a => {
                            return (
                                <div className='col-lg-4 py-4'>
                                    <div className="card" style={{ width: '25rem' }}>
                                        <img src={a.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <Link to={`/details/${a.id}`}> <p className="card-title py-2 px-3">{a.name}</p></Link>
                                            <Link to={`/details/${a.id}`} className="readmore px-3 ">Read more <i class="bi bi-arrow-right"></i></Link>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section className='hero-banner-1 py-5'>
                <div className='container '>
                    <div className='text-center py-4'>
                        <h4 className='hero-1'>Testimonials & Reviews</h4>
                        <h5 className='hero-txt-1 py-4'>
                            Our Traveler Says
                        </h5>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <img src={require('../images/1 (2).png')} />
                        </div>
                        <div classname="col-lg-6">
                          
                        </div>

                    </div>
                </div>
            </section>
            <section className='container py-5'>
                <div className='text-center py-4'>
                    <h4 className='hero-1'>From The Blog Post</h4>
                    <h5 className='hero-txt-1 py-4'>
                    Latest News & Articles
                    </h5>
                </div>
                <div className='row'>
                    {
                        Data.slice(0, 3).map(a => {
                            return (
                                <div className='col-lg-4 py-4'>
                                    <div className="card" style={{ width: '25rem' }}>
                                        <img src={a.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <Link to={`/details/${a.id}`}> <p className="card-title py-2 px-3">{a.name}</p></Link>
                                            <Link to={`/details/${a.id}`} className="readmore px-3 ">Read more <i class="bi bi-arrow-right"></i></Link>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </section>


        </>
    )
}

export default Home
