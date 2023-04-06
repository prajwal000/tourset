import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Aboutus from './Aboutus';
import Blog from './Blog';
import Contact from './Contact';
import Destinations from './Destinations';
import Details from './Details';
import Home from './Home';
import Tours from './Tours';

function Header() {
    return (
        <>
            <section className='Nav'>
                <nav className="navbar navbar-expand-lg ">
                    <div className="container">
                        <Link className="navbar-brand" to="/"> <img src={require('../images/logo.png')} /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0  fw-bold">
                                <li className="nav-item ">
                                    <Link className="nav-link active text-white " aria-current="page" to="/">Home<div className='active rounded-circle'></div></Link>
                                </li>

                                <li className="nav-item ps-4 nav-click">
                                    <Link className="nav-link text-white nav-click" to="/Aboutus">About us</Link>
                                </li>
                                <li className="nav-item ps-4">
                                    <Link className="nav-link text-white nav-click" to="/Tours">Tours</Link>
                                </li>
                                <li className="nav-item ps-4">
                                    <Link className="nav-link text-white nav-click" to="/Destinations">Destinations</Link>
                                </li>
                                <li className="nav-item ps-4">
                                    <Link className="nav-link text-white nav-click" to="/Blog">Blog</Link>
                                </li>
                                <li className="nav-item ps-4">
                                    <Link className="nav-link text-white nav-click" to="/Contact">Contact us</Link>
                                </li>


                            </ul>
                            <form className="d-flex" role="search">

                                <button className="btn" type="submit">Booking Now</button>
                            </form>
                        </div>
                    </div>
                </nav>

            </section>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Aboutus" element={<Aboutus />} />
                <Route path="/Destinations" element={<Destinations />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/Tours" element={<Tours />} />
                <Route path={"/Details/:id"} element={<Details/>} />
                <Route path="/Contact" element={<Contact />} />
               
            </Routes>
        </>
    )
}

export default Header
