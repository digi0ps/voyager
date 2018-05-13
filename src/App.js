import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';

import Fluff from './components/fluff.js';
import Footer from './components/footer.js';

class App extends Component {
  render() {
    return (
      <div className="App site">

        <Fluff />
        <Footer />
         
      </div>
    );
  }
}

export default App;
