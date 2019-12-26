import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
{/*import { faSearch } from "@fortawesome/free-solid-svg-icons";*/}
{/*import { faTwitter } from '@fortawesome/free-brands-svg-icons';*/}
{/*import { faFacebook} from '@fortawesome/free-brands-svg-icons';*/}

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
                  <div className="social-contact"><a className="icon-btn" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a><a className="icon-btn" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a><a className="icon-btn" href="https://twitter.com/"><i className="fab fa-twitter"></i></a><a className="icon-btn" href="https://dribbble.com/"><i className="fab fa-dribbble"></i></a></div>
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
              <div className="read-policy">
                <input type="checkbox" id="read" />
              {/*<label for="read">I've read and accept the Privacy Policy</label>*/}
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
