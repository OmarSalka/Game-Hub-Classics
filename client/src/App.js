import React from 'react';
import './App.css';
import './MediaTablet.css';
import './MediaMobile.css';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import About from './components/layout/About';
import Join from './components/popups/Join';
import Tic_tac_toe from './components/games/Tic_tac_toe';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PageNotFound from './components/pageNotFound/PageNotFound';
import PrivateRoute from './components/routing/PrivateRoute';

import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className='backgroundPic'>
        <div className='overlay'>
          <Router>
            <Navbar />
            <Switch>
              <Home exact path='/' component={Home} />
              <About exact path='/about' component={About} />
              <Route path={['/join/t3', '/join/db']} component={Join} />
              <PrivateRoute path='/tic-tac-toe' component={Tic_tac_toe} />
              <Route component={PageNotFound} />
            </Switch>
          </Router>
        </div>
      </div>
    </Provider>
  );
};

export default App;
