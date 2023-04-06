import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className='py-5'>
        <section className='container'>
          <div className='row'>
            <div className='col-lg-2'>
              <h3 className='pb-4'>Top destination</h3>

              <div className='footer-links'>
                <p className='footer-links'>Indonesia, Jakarta</p>
                <p className='footer-links'>Maldives, Malé</p>
                <p className='footer-links'> Australia, Canberra</p>
                <p className='footer-links'> Thailand, Bangkok</p>
                <p className='footer-links'> Morocco, Rabat</p>
              </div>

            </div>

            <div className='col-lg-2 ps-4'>
              <h3 className='pb-4'>Categories</h3>

              <div>
                <p className='footer-links'>Travel</p>
                <p className='footer-links'>Lifestyle</p>
                <p className='footer-links'>Fashion</p>
                <p className='footer-links'>Education</p>
                <p className='footer-links'>Food & Drink</p>
              </div>

            </div>
            <div className='col-lg-2 ps-4'>
              <h3 className='pb-4'>Quick links</h3>

              <div>
              <Link to='/aboutus'><p className='footer-links'>About</p></Link>
              <Link to='/aboutus'> <p className='footer-links'>Contact</p></Link>
              <Link to='/Tours'><p className='footer-links'>Tours</p></Link>
                <p className='footer-links'>Booking</p>
                <p className='footer-links'>Terms & Conditions</p>
              </div>

            </div>
            <div className='col-lg-6'>
              <h3 className='pb-4'>Get a newsletter</h3>
              <p>For the latest deals and tips, travel no further than your inbox</p>
              <div>
                <form className="d-flex position-relative" role="search">
                  <input className="form-control me-2 email" type="email" placeholder="Email Address" aria-label="Search" />
                  <button className="f-btn position-absolute" type="submit">Subscribe</button>
                </form>
              </div>

            </div>
          </div>
        </section>
      </footer>
    </>
  )
}

export default Footer
