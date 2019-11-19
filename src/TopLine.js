import React from 'react';
import './css/App.css';
import './css/bootstrap.min.css';
import './css/animations.css';

const TopLine = () => {
  return (
    <section className="page_topline ls s-borderbottom c-my-20">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6 text-md-left text-center">
            <ul className="top-includes">
              <li>
                <span className="icon-inline">
                  <span className="icon-styled color-main fs-14">
                    <i className="fa fa-phone"></i>
                  </span>
                  <span className="small-text">
                    <a href="index_singlepage.html#">+380661132023</a>
                  </span>
                </span>
              </li>
              <li>
                <span className="icon-inline">
                  <span className="icon-styled color-main fs-14">
                    <i className="fa fa-pencil"></i>
                  </span>
                  <span className="small-text">
                    <a href="index_singlepage.html#">istylo.od@gmail.com</a>
                  </span>
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-6 text-center text-md-right d-none d-md-block">
            <ul className="top-includes">
              <li>
                <span className="icon-inline">
                  <span className="icon-styled color-main2 fs-14">
                    <i className="fa fa-comment"></i>
                  </span>
                  <span className="small-text">
                    <a className="hover-main2" href="index_singlepage.html#">request a quote</a>
                  </span>
                </span>
              </li>
              <li>
                <span className="icon-inline">
                  <span className="icon-styled color-main2 fs-14">
                    <i className="fa fa-user"></i>
                  </span>
                  <span className="small-text">
                    <a className="hover-main2" href="index_singlepage.html#"> Login in / sign up</a>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopLine;
