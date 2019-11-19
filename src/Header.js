import React from 'react';
// import Toggle from './Toggle';
import TopLine from './TopLine';
import './css/App.css';
import './css/bootstrap.min.css';
import './css/animations.css';

const Header = () => {
  return (
    <div id="canvas">
  		<div id="box_wrapper">
        <div>
          <TopLine />
        </div>
        <div className="header_absolute header_layout_1">
          <header className="page_header ls justify-nav-end">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-4 col-md-5 col-11">
                  <a href="index.html" className="logo">
                    <span className="logo-text py-20"><strong>Move</strong>Ment</span>
                  </a>
                </div>
                <div className="col-xl-9 col-lg-8 col-md-7 col-1">
                  <div className="nav-wrap">

                    <nav className="top-nav">
                      <ul className="nav sf-menu">
                        <li>
                          <a href="index_singlepage.html#box_wrapper">Home</a>
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
    </div>
  );
}

export default Header;
