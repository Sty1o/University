import React from 'react';

const Login = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="leave-message text-center">
              <h1>Leave Message</h1>
              <p>Our staff will call back later and answer your questions</p>
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input className="input-form trans-bg" id="name" type="text" placeholder="Name" required />
                  </div>
                  <div className="form-group col-md-6">
                    <input className="input-form trans-bg" id="email" type="email" placeholder="Email" required />
                  </div>
                  <div className="form-group col-12">
                    <textarea className="textarea-form trans-bg" id="messages" name="" cols="30" rows="6" placeholder="Message"></textarea>
                  </div>
                </div>
                <button className="normal-btn">Send message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
