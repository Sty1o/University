import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Home';
import Login from './containers/Login';
import SignIn from './containers/SignIn';
import About from './containers/About';


const App = () => {
  return (
    <BrowserRouter>
      <div id = "main">
        <Header />
        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route path = "/login" component = {Login} />
          <Route path = "/signin" component = {SignIn} />
          <Route path = "/about" component = {About} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
