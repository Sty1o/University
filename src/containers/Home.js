import React from 'react';
import './../css/App.css';
import './../css/bootstrap.min.css';
import './../css/animations.css';
import Header from '../components/Header';
import Slider from '../components/Slider';
import Body from '../components/Body';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div id="canvas">
      <div id="box_wrapper">
        <div>
          <Header />
          <Slider />
          <Body />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
