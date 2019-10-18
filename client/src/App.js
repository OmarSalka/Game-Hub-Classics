import React, { Fragment } from 'react';
import './App.css';
import './MediaTablet.css';
import './MediaMobile.css';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import Tic_tac_toe from './components/games/Tic_tac_toe';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Fragment>
      <Router>
        <div className='backgroundPic'>
          <div className='overlay'>
            <Navbar />
            <Switch>
              <Home exact path='/' component={Home} />
              <Tic_tac_toe exact path='/tic-tac-toe' component={Tic_tac_toe} />
            </Switch>
          </div>
        </div>
      </Router>
    </Fragment>
  );
};

export default App;
