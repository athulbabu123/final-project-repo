import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css';
import Footer from '../components/Layout/Footer'

const LandingPage = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container">
    <a className="navbar-brand me-auto" href="/">InsightTrack</a>
    
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active mx-lg-2" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-lg-2" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-lg-2" href="/login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-lg-2" href="/register">Sign Up</a>
          </li>
        </ul>
  
      </div>
    </div>
   <a href='/admin-login' className='login-button'>Admin</a>
   
   <button className="navbar-toggler pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <div className="navbar-toggler-icon" />
      
      
    </button>

    
   
  </div>
</nav>

    <section className='hero-section'>
        <div className='container d-flex align-items-center justify-content-center fs-1 text-white flex-column'>
            <h1>Welcome to InsightTrack</h1>
            <h2>Take Control of Your Finances with Ease</h2>
            <div className='btn-class'>
            <Link to='/register'>
              <button className='btn'>Get Started</button>
              </Link>
            </div>
            
            
        </div>
    </section>

<Footer/>
    </div>
  )
}

export default LandingPage
