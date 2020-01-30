import React from 'react';
import blogimg from './../images/posts/blogimg.png';
import hotnew from './../images/posts/hotnew.png';
import hot1 from './../images/posts/hot1.png';
import hot2 from './../images/posts/hot2.png';
import avatar1 from './../images/posts/avatar1.png';

const BlogDetail = () => {
  return (
    <div>
        <section className="blog-detail blog-detail-sidebar">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-4">
                <div className="blog-detail_sidebar">
                  <div className="blog-sidebar_block sidebar-search">
                    <input className="input-form" type="text" placeholder="Seach" />
                  </div>
                  <div className="blog-sidebar_block sidebar-categories">
                    <h5 className="sidebar-block-title">Categories</h5>
                    <ul>
                      <li><a className="category-link" href="index.html">Digital</a><a className="category-link" href="index.html">Ocean</a><a className="category-link" href="index.html">SEO Marketing</a><a className="category-link" href="index.html">Media Content</a></li>
                    </ul>
                  </div>
                  <div className="blog-sidebar_block sidebar-recent-posts">
                    <h5 className="sidebar-block-title">Recent Post</h5>
                    <div className="posts">
                      <div className="row">
                        <div className="col-12 col-sm-6 col-lg-12">
                          <div className="post-mini_block"><img src={hot2} alt="post image" />
                            <div className="post-detail">
                              <div className="post-credit">
                                <div className="post-tag"><a href="index.html">pet</a></div>
                              </div><a className="post-title title-small" href="blog_detail.html">How to View Breast Cancer Survival Rates</a>
                              <div className="post-credit">
                                <div className="author">
                                  <h5 className="author-name">Lucas Norman</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-12">
                          <div className="post-mini_block"><img src={hot1} alt="post image" />
                            <div className="post-detail">
                              <div className="post-credit">
                                <div className="post-tag"><a href="index.html">pet</a></div>
                              </div><a className="post-title title-small" href="blog_detail.html">Ajax Stuns Real Madrid, Ending Its Reign</a>
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
                  <div className="blog-sidebar_block sidebar-tags">
                    <h5 className="sidebar-block-title">Search By Tags</h5><a href="index.html">Techno</a><a href="index.html">Phone</a><a href="index.html">Digital</a><a href="index.html">Media Social</a><a href="index.html">Marketing</a><a href="index.html">Content</a><a href="index.html">SEO</a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8">
                <div className="post-header">
                  <div className="posts blog-index">
                    <div className="post-block post-classNameic">
                      <div className="post-img"><img src={hotnew} alt="post image" /></div>
                      <div className="post-detail"><a className="post-title regular" href="blog_detail.html">North Dakota Learns From Norway</a>
                        <div className="post-credit">
                          <div className="author"><a className="author-avatar" href="blog_detail_sidebar.html#"><img src={avatar1} alt="post image" /></a>
                            <h5 className="author-name">Lucas Norman</h5>
                          </div>
                          <h5 className="upload-day">February 17, 2019</h5>
                          <div className="post-tag"><a href="index.html">pet</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post-block">
                  <p className="blog-pragraph">Your clients would like to see optimal results for minimal work. For this reason, it can be difficult to convince them that a website redesign enhances SEO strategies. However, if you try to redesign a site without taking SEO into account, you are going to face bigger problems down the road. </p>
                  <p className="blog-pragraph">Start off by explaining to clients what will happen if you ignore SEO in your redesign. Explain to them how a website redesign enhances SEO strategies across the board. A redesign is essential and should be part of your client’s budget. There are a couple of risks to point out.</p><img src={blogimg} alt="post image" />
                  <h3 className="post-title">1. You May Have to Redo All Your Content</h3>
                  <p className="blog-pragraph">It is impossible to create effective content without taking SEO into consideration. If you create content without thinking about SEO, you may need to go back and redo all the new content you made for your website when you start your SEO strategy. There are a few reasons for this.</p>
                  <p className="blog-pragraph">First, you’ll be unsure as to what keyword terms you want to rank for. If you write content that doesn’t include appropriate keywords, it will be difficult to go back and include the terms naturally. Second, you may be unclear as to who makes up your target audience. The content you write for the wrong audience is useless and will need replacing.</p>
                  <h3 className="post-title">2. You May Have Technical Mistakes</h3>
                  <p className="blog-pragraph">Technical mistakes may mean you require a site migration in the near future. This is a huge waste of time. Taking the technical side of SEO into account now will allow you to decide on:</p>
                  <p className="blog-pragraph">Visitors Want New Information</p>
                  <p className="blog-pragraph">Search Engines Also Want New Content</p>
                  <p className="blog-pragraph">You Can Target New Keywords</p>
                  <div className="blog-quote">
                    <q>Technology is nothing. What&apos;s important is that you have a faith in people, that they&apos;re basically good and smart, and if you give them tools, they&apos;ll do wonderful things with them</q>
                    <p className="quote-author">Steven Jobs </p>
                  </div>
                  <h3 className="post-title">Is a Website Necessary</h3>
                  <p className="blog-pragraph">All the above assumes that a client is willing to create a website in the first place. Some clients may believe that they can forgo a website entirely. However, without a website, it is impossible for a business to grow.</p>
                  <p className="blog-pragraph">You need to explain why having an SEO-optimized website is necessary for being found online. Of course, businesses can find customers using other means, such as through social media, but these methods are slower. Plus, users will still expect the business to have a website — to obtain more information about products, services, and the brand as a whole.</p>
                </div>
                <div className="post-footer">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="post-tags"><a href="index.html">Camera</a><a href="index.html">PHOTOGRAHY</a><a href="index.html">TIPS</a></div>
                    </div>
                    <div className="col-sm-6 text-sm-right">
                      <div className="post-share">
                        <p>Share: </p>
                        <div className="socials"><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a><a href="https://twitter.com/"><i className="fab fa-twitter"></i></a><a href="https://dribbble.com/"><i className="fab fa-dribbble"></i></a></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<div className="blog-quick-banner">
                  <div className="row">
                    <div className="col-12 col-md-6"><img className="img-fluid" src="assets/images/blog_detail/blog-detail-banner-1.png" alt="" /></div>
                    <div className="col-12 col-md-6"><img className="img-fluid" src="assets/images/blog_detail/blog-detail-banner-2.png" alt="" /></div>
                  </div>
                </div>
                <div className="post-author-detail">
                  <div className="row no-gutters align-items-center">
                    <div className="col-sm-5 col-md-4">
                      <div className="author-avatar"><img src="assets/images/blog_detail/post-author-avatar.png" alt="avatar" /></div>
                    </div>
                    <div className="col-sm-7 col-md-8">
                      <div className="author-info">
                        <h5>Shane Lynch</h5>
                        <p>Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum bore et dolore magna aliqua. </p>
                        <div className="author-social"><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a><a href="https://twitter.com/"><i className="fab fa-twitter"></i></a><a href="https://dribbble.com/"><i className="fab fa-dribbble"></i></a></div>
                      </div>
                    </div>
                  </div>
                </div>*/}
                <div className="post-comment">
                  <h2>Leave a comment</h2>
                  <form action="blog_detail_sidebar.html">
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <input className="input-form trans-bg" id="name" type="text" placeholder="Name" required />
                      </div>
                      <div className="form-group col-md-6">
                        <input className="input-form trans-bg" id="email" type="email" placeholder="Email" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea className="textarea-form trans-bg" id="messages" name="" cols="30" rows="6" placeholder="Message"></textarea>
                    </div>
                    <button className="normal-btn">Send message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default BlogDetail;
