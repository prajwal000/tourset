import React from 'react'
import { Link } from 'react-router-dom'

function Aboutus() {
  return (
    <>
    <section className='about-us-top'>
      <div className='text-center sub-color pt-5 pb-5'>
        <div className='pt-5 pb-5'>
            <h1 className='text-white'> About us</h1>
            <span className='fs-4 text-white pb-5'>
              <Link to='/' className='text-white pe-2'>Home</Link>/<span className='ps-2'>About us</span>
            </span>
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
              <p className='py-4'><i class="bi bi-play-circle-fill"></i></p>
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
          <h4 className='hero-1'>Our Team</h4>
          <h1 className='hero-text'>
            Meet Expert People
          </h1>
        </div>
      <div className='row'>
        <div className='col-lg-4'>
        <img src={require('../images/team1.png')} />
        <div className='d-flex py-3 align-items-center'>
        <div className='border-end pe-2'>
        <h4>Jony Bristow</h4>
        <span className='hero-2'>Tour Guide</span>
        </div>
        <div>
        <div className='ps-2'>
          <span className='social'><i class="bi bi-facebook fs-2"></i></span>
          <span className='social'><i class="bi bi-twitter fs-2"></i></span>
          <span className='social'><i class="bi bi-linkedin fs-2"></i></span>
          <span className='social'><i class="bi bi-instagram fs-2"></i></span>
          
          </div>
        </div>
        </div>
        </div>
        <div className='col-lg-4'>
        <img src={require('../images/team2.png')} />
        <div className='d-flex py-3 align-items-center'>
        <div className='border-end pe-2'>
        <h4>David Warner</h4>
        <span className='hero-2'>Tour Guide</span>
        </div>
        <div>
        <div className='ps-2'>
          <span className='social'><i class="bi bi-facebook fs-2"></i></span>
          <span className='social'><i class="bi bi-twitter fs-2"></i></span>
          <span className='social'><i class="bi bi-linkedin fs-2"></i></span>
          <span className='social'><i class="bi bi-instagram fs-2"></i></span>
          
          </div>
        </div>
        </div>
        </div>
        <div className='col-lg-4'>
        <img src={require('../images/team3.png')} />
        <div className='d-flex py-3 align-items-center'>
        <div className='border-end pe-2'>
        <h4>Andro Rassel</h4>
        <span className='hero-2'>Tour Guide</span>
        </div>
        <div>
        <div className='ps-2'>
          <span className='social'><i class="bi bi-facebook fs-2"></i></span>
          <span className='social'><i class="bi bi-twitter fs-2"></i></span>
          <span className='social'><i class="bi bi-linkedin fs-2"></i></span>
          <span className='social'><i class="bi bi-instagram fs-2"></i></span>
          
          </div>
        </div>
        </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default Aboutus
