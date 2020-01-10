import React from 'react';
import recent_post1 from './../images/blog/recent-post-1.png';
import recent_post2 from './../images/blog/recent-post-2.png';
import recent_post3 from './../images/blog/recent-post-3.png';
import recent_post4 from './../images/blog/recent-post-4.png';


const Register = () => {
  return (
    <section className="shop">
      <div className="container">
        <div className="shop-checkout">
          <form>
            <div className="row">
              <div className="col-12 col-md-8">
                <h2 className="checkout-title">Register Form</h2>
                <div className="form-wrapper">
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label id="first-name">First Name*</label>
                      <input id="first-name" type="text" required />
                    </div>
                    <div className="form-group col-md-6">
                      <label id="last-name">last Name*</label>
                      <input id="last-name" type="text" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label id="company">company name</label>
                    <input id="company" type="text" />
                  </div>
                  <div className="form-group">
                    <label id="country">country*</label>
                    <input id="country" type="text" required />
                  </div>
                  <div className="form-group">
                    <label id="street">Street Address*</label>
                    <input id="street" type="text" required />
                  </div>
                  <div className="form-group">
                    <label id="postcode">Postcode / ZIP (optional)</label>
                    <input id="postcode" type="text" />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label id="email">Email Address*</label>
                      <input id="email" type="email" />
                    </div>
                    <div className="form-group col-md-6">
                      <label id="phone">Phone*</label>
                      <input id="phone" type="text" />
                    </div>
                  </div>
                  <div id="create-account_form">
                    <div className="form-group">
                      <label id="acc-username">Account username*</label>
                      <input id="acc-username" type="text" required />
                    </div>
                    <div className="form-group">
                      <label id="acc-password">Create account paswword*</label>
                      <input id="acc-password" type="password" required />
                    </div>
                  </div>
                </div>
                <div className="shop-checkout">
                <div className="submit-form">
                  <button id="place-order">place porder</button>
                </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="crypto-block_right">
                <div className="crypto-sidebar_block recent-post-sidebar-block">
                <h2 className="sidebar-block-title">Your Order</h2>
                <div className="col-12 col-md-6 col-lg-12">
                  <div className="post-mini_block"><img src = {recent_post1} alt="post" />
                    <div className="post-detail">
                      <div className="post-credit">
                        <div className="post-tag"><a href="index.html">pet</a></div>
                      </div><a className="post-title" href="blog_detail.html">Yankees’ Luis Severino Scratched, Raising Day</a>
                      <div className="post-credit">
                        <div className="author">
                          <h5 className="author-name">Lucas Norman</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-12">
                  <div className="post-mini_block"><img src = {recent_post2} alt="post" />
                    <div className="post-detail">
                      <div className="post-credit">
                        <div className="post-tag"><a href="index.html">pet</a></div>
                      </div><a className="post-title" href="blog_detail.html">Yankees’ Luis Severino Scratched, Raising Day</a>
                      <div className="post-credit">
                        <div className="author">
                          <h5 className="author-name">Lucas Norman</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-12">
                  <div className="post-mini_block"><img src = {recent_post3} alt="post" />
                    <div className="post-detail">
                      <div className="post-credit">
                        <div className="post-tag"><a href="index.html">pet</a></div>
                      </div><a className="post-title" href="blog_detail.html">Yankees’ Luis Severino Scratched, Raising Day</a>
                      <div className="post-credit">
                        <div className="author">
                          <h5 className="author-name">Lucas Norman</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-12">
                  <div className="post-mini_block"><img src = {recent_post4} alt="post" />
                    <div className="post-detail">
                      <div className="post-credit">
                        <div className="post-tag"><a href="index.html">pet</a></div>
                      </div><a className="post-title" href="blog_detail.html">Yankees’ Luis Severino Scratched, Raising Day</a>
                      <div className="post-credit">
                        <div className="author">
                          <h5 className="author-name">Lucas Norman</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
             </div>
            </div>
           </form>
         </div>
       </div>
     </section>
  );
}

export default Register;
