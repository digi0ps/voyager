import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Fluff from './components/fluff.js';
import Home from './components/home.js';
import Footer from './components/footer.js';
import BlackHole from './components/blackhole.js';

class App extends Component {
  render() {
    return (
      <div className="App site">

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/fluff" component={Fluff} />
            <Route path="*" component={BlackHole} />
          </Switch>
        </Router>

        <Footer />

      </div>
    );
  }
}

export default App;
