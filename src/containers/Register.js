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
                      {/*<form onSubmit={()=> this.handleSubmit()}>*/}
                        <div className="userName">
                          <label htmlFor="userName">Username*</label>
                          <input
                            type="text"
                            className=""
                            placeholder="Username"
                            type="text"
                            name="userName"
                            noValidate
                          />
                        </div>
                      {/*</form>*/}
                    </div>
                    <div className="form-group col-md-6">
                      <label id="phone">E-mail*</label>
                      <input id="phone" type="text" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label id="phone">Password*</label>
                      <input id="phone" type="text" />
                    </div>
                    <div className="form-group col-md-6">
                      <label id="phone">Confirm Password*</label>
                      <input id="phone" type="text" />
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
                <h2 className="sidebar-block-title">Recent Post</h2>
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
