import React from 'react';
import TopLine from  './TopLine';
import Header from './Header';
import './css/App.css';

const App = () => {
  return (
    <div id="canvas">
  		<div id="box_wrapper">
      <TopLine />
      <Header />
    </div>
    </div>
  );
}

export default App;
