import React from 'react';
import Posts from '../containers/Posts';
import './../css/animate.css';
import './../css/themify-icons.css';
import './../css/aos.css';
import './../css/plyr.css';
import './../css/custom_bootstrap.css';
import './../css/jquery-ui.css';
import './../css/slick.css';
import './../css/style.css';

const Home = () => {
  return (
    <div data-aos-easing="ease-out-cubic" data-aos-duration="800" data-aos-delay="0" id="scrollzipPoint">
      <Posts />
    </div>
  );
}

export default Home;
