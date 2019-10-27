import React from 'react';
import './App.css';
import './MediaTablet.css';
import './MediaMobile.css';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
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
      <Router>
        <div className='backgroundPic'>
          <div className='overlay'>
            <Navbar />
            <Switch>
              <Home exact path='/' component={Home} />
              <Route path='/Join' component={Join} />
              <PrivateRoute path='/tic-tac-toe' component={Tic_tac_toe} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
