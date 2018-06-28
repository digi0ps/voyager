import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './../App.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state={
      visibility: false,
    };
  }

  componentDidMount() {
    let whitelist=['/fluff', '/', '/contact', ];
    if(whitelist.includes(window.location.pathname)) {
      this.setState({
        visibility: true,
      });
    }
  }

  render() {
    return (
      <footer className="footer is-unselectable whales-margin" style={{display: this.state.visibility ? 'inherit': 'none'}}>
        <div className="container">
          <div className="is-pulled-right">
            <img alt="whale" className="whales is-pulled-right" src="https://storage.googleapis.com/abode/photos/whales.png" />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
