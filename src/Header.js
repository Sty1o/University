import React from 'react';
// import logo from './logo.svg';
import './css/App.css';

const Header = () => {
  return (
    <div className="header_absolute header_layout_1">
      <header className="page_header ls justify-nav-end">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-4 col-md-5 col-11">
              <a href="index.html" className="logo">
                <span className="logo-text py-20"><strong>Maxi</strong>com</span>
              </a>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 col-1">
              <div className="nav-wrap">

                <nav className="top-nav">
                  <ul className="nav sf-menu">
                    <li>
                      <a href="index_singlepage.html#box_wrapper">Home</a>
                      <ul>
                        <li>
                          <a href="index.html">Home 1</a>
                        </li>
                        <li>
                          <a href="index2.html">Home 2</a>
                        </li>
                        <li>
                          <a href="index_static.html">Static Intro</a>
                        </li>
                        <li>
                          <a href="index_singlepage.html">Single Page</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="index_singlepage.html#price">Price</a>
                    </li>

                    <li>
                      <a href="index_singlepage.html#about">About</a>
                    </li>

                    <li>
                      <a href="index_singlepage.html#features">Features</a>
                    </li>

                    <li>
                      <a href="index_singlepage.html#location">location</a>
                    </li>


                    <li>
                      <a href="index_singlepage.html#advantage">Advantage</a>
                    </li>

                    <li>
                      <a href="index_singlepage.html#testimonials">Testimonials</a>
                    </li>

                    <li>
                      <a href="index_singlepage.html#blog">Blog</a>
                    </li>


                  </ul>
                </nav>

                <ul className="top-includes d-none d-xl-block search-icon">

                  <li>
                    <span>
                      <a href="index_singlepage.html#" className="search_modal_button">
                        <i className="fa fa-search"></i>
                      </a>
                    </span>

                  </li>

                </ul>

              </div>
            </div>
          </div>
        </div>
        <span className="toggle_menu"><span></span></span>
      </header>

      <div className="page_header_wrapper main-header-side">
        <div className="page_header_side header_slide header_side_right ls">
          <span className="toggle_menu toggle_menu_side header-slide"><span></span></span>
          <div className="scrollbar-macosx">
            <div className="side_header_inner">
              <div className="header-side-menu">
                <nav className="mainmenu_side_wrapper">
                  <ul className="nav menu-click">
                    <li>
                      <a href="contact.html">
                        <i className="color-main7 fa fa-question-circle"></i>
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="booking-form.html">
                        <i className="color-main7 fa fa-paper-plane"></i>
                        Submit a ticket
                      </a>
                    </li>
                    <li>
                      <a href="terms_of_use.html">
                        <i className="color-main7 fa fa-rocket"></i>
                        Terms Of Use
                      </a>
                    </li>
                    <li>
                      <a href="availability-map.html">
                        <i className="color-main7 fa fa-file-text-o"></i>
                        Terms of Service
                      </a>
                    </li>
                    <li>
                      <a href="contact.html">
                        <i className="color-main7 fa fa-phone"></i>
                        call me back
                      </a>
                    </li>
                  </ul>
                </nav>


              </div>
            </div>
          </div>
          <div className="facebook-messeger d-flex align-items-center hero-bg">
        {/* <img src="images/messeger.png" alt="">*/}
            <a href="contact.html" className="small-text">
              facebook messeger
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Header;
