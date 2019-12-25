import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './containers/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Route peth = "/" component = {Home} />
      {/*<Route peth = "/about" component = {About} />*/}
    </BrowserRouter>
  );
}

export default App;
