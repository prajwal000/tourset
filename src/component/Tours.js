import React from 'react'
import { Link } from 'react-router-dom'
import Data from './Data.json'


function Tours() {
  return (
    <>
      <section className='about-us-top'>
        <div className='text-center sub-color pt-5 pb-5'>
          <div className='pt-5 pb-5'>
            <h1 className='text-white'>Tour List</h1>
            <span className='fs-4 text-white pb-5'>
              <Link to='/' className='text-white pe-2'>Home</Link>/<span className='ps-2'>Tour List</span>
            </span>
          </div>
        </div>
      </section>
      <section className='container py-5'>
        <div className='row'>
          {
            Data.slice(0,6).map(a => {
              return (
                <div className='col-lg-4 py-4'>
                  <div className="card" style={{ width: '25rem' }}>
                    <img src={a.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <Link to={`/details/${a.id}`}>   <p className="card-title py-2 px-3">{a.name}</p></Link>
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

export default Tours
