import React, { Fragment } from 'react';
import './App.css';
import './MediaTablet.css';
import './MediaMobile.css';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import Join from './components/popups/Join';
import Tic_tac_toe from './components/games/Tic_tac_toe';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
              <Join path='/Join' component={Join} />
              <Tic_tac_toe path='/tic-tac-toe' component={Tic_tac_toe} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
