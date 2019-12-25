import React from 'react';
// import {NavLink} from 'react-router-dom';
import logo from './../images/logo.png';

const Header = () => {
  return (
      <header>
        <div>
          <div className="header-wrapper">
            <div className="container">
              <div className="header-menu">
                <div className="row no-gutters align-items-center justify-content-center">
                  <div className="col-4 col-md-2"><a className="logo" href="index.html"><img src= {logo} alt="logo" /></a></div>
                  <div className="col-8 col-md-8">
                    <div className="mobile-menu"><a href="blog_detail_sidebar.html#" id="showMenu"><i className="fas fa-bars"></i></a></div>
                    <nav className="navigation">
                      <ul>
                        <li className="nav-item"><a className="pisen-nav-link active" href="index.html">Home</a><i className="submenu-opener fas fa-plus"></i>
                          <ul className="sub-menu">
                            <li className="sub-menu_item"><a className="sub-menu-link" href="index.html">Blog classic</a></li>
                          </ul>
                        </li>
                        <li className="nav-item"><a className="pisen-nav-link" href="blog_detail_sidebar.html">Features</a><i className="submenu-opener fas fa-plus"></i>
                          <ul className="sub-menu">
                            <li className="sub-menu_item"><a className="sub-menu-link" href="coming_soon.html">Coming Soon</a></li>
                          </ul>
                        </li>
                        <li className="nav-item"><a className="pisen-nav-link" href="about_us.html">About us</a></li>
                        <li className="nav-item"><a className="pisen-nav-link" href="contact.html">Contact</a></li>
                      </ul>
                    </nav>
                  </div>
                  <div className="col-0 col-xl-2">
                    <div className="menu-function">
                      <div id="search"><a className="search-btn" href="blog_detail_sidebar.html#"><i className="fas fa-search"></i></a></div>
                      <div className="social-contact"><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a><a href="https://twitter.com/"><i className="fab fa-twitter"></i></a><a href="https://dribbble.com/"><i className="fab fa-dribbble"></i></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
}

export default Header;
