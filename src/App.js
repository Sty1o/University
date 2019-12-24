import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import About from './containers/About';
import Home from './containers/Home';

const App = () => {
  return (
    <BrowserRouter>
        <Route peth = "/" component = {Home} />
        <Route peth = "/about" component = {About} />
        <Route path = "/register" component = {RegisterForm} />
    </BrowserRouter>
  );
}

export default App;
