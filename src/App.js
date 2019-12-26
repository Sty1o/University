import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Home';
import SignIn from './containers/SignIn';
import About from './containers/About';


const App = () => {
  return (
    <BrowserRouter>
      <div id = 'main'>
        <Header />
          <div class = 'app'>
            <Route peth = "/" component = {Home} />
            <Route peth = "/sign" component = {SignIn} />
            <Route peth = "/about" component = {About} />
          </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
