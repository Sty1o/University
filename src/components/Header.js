import React from 'react';
import {NavLink} from 'react-router-dom';
// import Toggle from './Toggle';
import TopLine from './TopLine';
import './../css/App.css';
import './../css/bootstrap.min.css';
import './../css/animations.css';

const Header = () => {
  return (
    <div>

      <TopLine />

        <div className="header_absolute header_layout_1">
          <header className="page_header ls justify-nav-end">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-4 col-md-5 col-11">
                  <a href="/" className="logo">
                    <span className="logo-text py-20"><strong>Move</strong>Ment</span>
                  </a>
                </div>
                <div className="col-xl-9 col-lg-8 col-md-7 col-1">
                  <div className="nav-wrap">

                    <nav className="top-nav">
                      <ul className="nav sf-menu">
                        <li>
                          <NavLink to = "/">Home</NavLink>
                        </li>

                        <li>
                          <NavLink to = "/pricing">Pricing</NavLink>
                        </li>

                        <li>
                          <NavLink to = "/about">About</NavLink>
                        </li>

                        <li>
                          <NavLink to = "/features">Features</NavLink>
                        </li>

                        <li>
                          <NavLink to = "/location">Location</NavLink>
                        </li>

                        <li>
                          <NavLink to = "/advantage">Advantage</NavLink>
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
        {/*<Toggle />*/}
        </div>
      </div>
  );
}

export default Header;
