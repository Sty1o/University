import React from 'react';
import './../css/App.css';
import './../css/bootstrap.min.css';
import './../css/animations.css';
import TopLine from './TopLine';

const RegisterForm = () => {
  return (
    <div>
    <TopLine />
      <section className="ls s-py-80 s-py-lg-120 s-py-xl-160 c-gutter-100 booking-form container-px-30">
        <div className="container">
          <div className="row">
            <div className="divider-50 d-none d-xl-block"></div>
              <form className="contact-form c-mb-10 c-mb-md-20 c-gutter-20 text-center text-md-left" method="post" action="http://webdesign-finder.com/">
                <div className="row">

                  <div className="col-sm-6">
                    <div className="form-group has-placeholder">
                      <label htmlFor="name">Full Name </label>
                      <i className="fa fa-user color-main"></i>
                      <input type="text" aria-required="true" size="30" defaultValue="" name="name" id="name" className="form-control" placeholder="First Name" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group has-placeholder">
                      <label htmlFor="phone">Phone Number</label>
                      <i className="fa fa-phone color-main"></i>
                      <input type="text" aria-required="true" size="30" defaultValue="" name="phone" id="phone" className="form-control" placeholder="Second Name" />
                    </div>
                  </div>

                </div>
                <div className="row">

                  <div className="col-sm-6">
                    <div className="form-group has-placeholder">
                      <label htmlFor="name">Full Name </label>
                      <i className="fa fa-user color-main"></i>
                      <input type="text" aria-required="true" size="30" defaultValue="" name="name" id="name" className="form-control" placeholder="Full Name" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group has-placeholder">
                      <label htmlFor="phone">Phone Number</label>
                      <i className="fa fa-phone color-main"></i>
                      <input type="text" aria-required="true" size="30" defaultValue="" name="phone" id="phone" className="form-control" placeholder="Phone Number" />
                    </div>
                  </div>

                </div>

                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group has-placeholder">
                      <label htmlFor="email">Email address</label>
                      <i className="fa fa-envelope color-main"></i>
                      <input type="email" aria-required="true" size="30" defaultValue="" name="email" id="email" className="form-control" placeholder="E-mail" />
                    </div>
                  </div>


                  <div className="col-sm-12">

                    <div className="form-group has-placeholder">
                      <label htmlFor="message">Message</label>
                      <i className="fa fa-edit color-main"></i>
                      <textarea aria-required="true" rows="6" cols="45" name="message" id="message" className="form-control" placeholder="Your Message"></textarea>
                    </div>
                  </div>

                </div>
                <div className="row">

                  <div className="col-sm-12">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" htmlFor="exampleCheck1">I agree that my submitted data is being collected and stored.</label>
                    </div>
                  </div>
                </div>
                <div className="row">

                  <div className="col-sm-12 text-center text-md-left mt-30">

                    <div className="form-group">
                      <button type="submit" id="contact_form_submit" name="contact_submit" className="btn btn-maincolor"><span>Submit</span>
                      </button>
                    </div>
                  </div>

                </div>

            </form>
          </div>
        </div>
      </section>
    </div>

  );
}

export default RegisterForm;
