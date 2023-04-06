import React from 'react'
import { Link } from 'react-router-dom'

function Destinations() {
  return (
    <>
   <section className='about-us-top'>
      <div className='text-center sub-color pt-5 pb-5'>
        <div className='pt-5 pb-5'>
            <h1 className='text-white'>Destinations</h1>
            <span className='fs-4 text-white pb-5'>
              <Link to='/' className='text-white pe-2'>Home</Link>/<span className='ps-2'>Destinations</span>
            </span>
        </div>
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
                    <div className='col-lg-6 zoom'>
                           <img src={require('../images/1.png')} width='620px' className='zoom-img' />
                           <div className='position-relative'>
                            <span className='img-txt-upper position-absolute'>male</span>
                            <span className='img-txt-lower position-absolute'>Maldives</span>
                           </div>
                    </div>
                    <div className='col-lg-6 zoom'>
                           <img src={require('../images/2.png')} width='620px' className='zoom-img'/>
                           <div className='position-relative'>
                            <span className='img-txt-upper position-absolute'>Bangkok</span>
                            <span className='img-txt-lower position-absolute'>Thailand</span>
                           </div>
                    </div>
                    </div>
                    <div className='row py-4'>
                        <div className='col-lg-4 zoom'>
                        <img src={require('../images/3.png')} width='407px' className='zoom-img'/>
                        <div className='position-relative'>
                            <span className='img-txt-upper position-absolute'>Kualalumpur</span>
                            <span className='img-txt-lower position-absolute'>Malasiya</span>
                           </div>
                        </div>
                        <div className='col-lg-4 zoom'>
                        <img src={require('../images/4.png')} width='407px' className='zoom-img'/>
                        <div className='position-relative'>
                            <span className='img-txt-upper position-absolute'>Kathmandu</span>
                            <span className='img-txt-lower position-absolute'>Nepal</span>
                           </div>
                        </div>
                        <div className='col-lg-4 zoom'>
                        <img src={require('../images/5.png')} width='407px' className='zoom-img'/>
                        <div className='position-relative'>
                            <span className='img-txt-upper position-absolute'>Jakarta</span>
                            <span className='img-txt-lower position-absolute'>Indoesia</span>
                           </div>
                        </div>
                        
                    </div>
                </div>
            </section>
    </>
  )
}

export default Destinations
