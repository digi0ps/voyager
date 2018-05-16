import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './../App.css';

import * as Icon from 'react-feather';

class Footer extends Component {
  render() {
    return (
      <footer className="footer is-unselectable">
        <div className="container">
          <div className="is-pulled-right">
            <a href="https://www.github.com/jeremyphilemon/voyager" className="footer-icon has-text-dark"><Icon.Code /></a> with  
            <span className="heart-icon has-text-danger">
              <svg className="svg-inline--fa fa-heart fa-w-18" aria-hidden="true" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M414.9 24C361.8 24 312 65.7 288 89.3 264 65.7 214.2 24 161.1 24 70.3 24 16 76.9 16 165.5c0 72.6 66.8 133.3 69.2 135.4l187 180.8c8.8 8.5 22.8 8.5 31.6 0l186.7-180.2c2.7-2.7 69.5-63.5 69.5-136C560 76.9 505.7 24 414.9 24z"></path></svg>
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
