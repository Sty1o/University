import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegramPlane} from '@fortawesome/free-brands-svg-icons';
import { faFacebookF} from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-sm-6 col-md-3 col-lg-4">
                <div className="footer-links">
                  <h5 className="footer-link--title">Quick Link</h5>
                  <ul>
                    <li><a className="footer-link" href="blog_detail_sidebar.html">News</a></li>
                    <li><a className="footer-link" href="blog_detail_sidebar.html">Agency</a></li>
                    <li><a className="footer-link" href="blog_detail_sidebar.html">Store</a></li>
                    <li><a className="footer-link" href="blog_detail_sidebar.html">Grid</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col-lg-4">
                <div className="footer-links">
                  <h5 className="footer-link--title">Information</h5>
                  <ul>
                    <li><a className="footer-link" href="index.html">Home</a></li>
                    <li><a className="footer-link" href="blog_detail_sidebar.html">Features</a></li>
                    <li><a className="footer-link" href="about_us.html">About Us</a></li>
                    <li><a className="footer-link" href="contact.html">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="footer-contact">
                  <h5 className="footer-link--title">Contact us</h5>
                  <div className="contact-method">
                    <p>72 Kangnam, 45 Opal Point Suite 391, UK</p>
                    <p>contact@pisen.com</p>
                  </div>
                  <div className="social-contact">
                    <a className="icon-btn" href="https://www.facebook.com/"><FontAwesomeIcon icon={faTelegramPlane} /></a>
                    <a className="icon-btn" href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a className="icon-btn" href="https://dribbble.com/"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a className="icon-btn" href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <h5 className="footer-link--title">Subscribe To Our Mailing List </h5>
            <form action="blog_detail_sidebar.html" method="post">
              <div className="email-form">
                <input className="input-form" type="text" placeholder="Enter Your Mail" />
                <button> <i className="fas fa-paper-plane"></i></button>
              </div>
            </form>
            <p className="copyright">Copyright ©2019 Pisen Blog</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
