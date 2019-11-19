import React from 'react';
import './css/App.css';
import './css/bootstrap.min.css';
import './css/animations.css';

const Toggle = () => {
  return (
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
  );
}

export default Toggle;
