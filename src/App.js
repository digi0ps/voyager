import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Fluff from './components/fluff.js';
import Home from './components/home.js';
import Footer from './components/footer.js';
import BlackHole from './components/blackhole.js';
import Contact from './components/contact.js';
import Classes from './components/classes.js';
import FinitePlaylist from './components/finiteplaylist.js';

class App extends Component {

  render() {
    return (
      <div className="App site">

        <Router>
          <Route render={({ location }) => (
            <div>
              <Route exact path="/" render={() => <Redirect to="/" />} />

              <TransitionGroup>
                <CSSTransition key={location.key} classNames="fade" timeout={1000}>
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/fluff" component={Fluff} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/classes" component={Classes} />
                    <Route exact path="/alohomora" component={FinitePlaylist} />
                    <Route exact path="*" component={BlackHole} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>

          )}
          />
        </Router>

        <Footer />

      </div>
    );
  }
}

export default App;
