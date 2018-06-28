import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './../App.css';

import * as Icon from 'react-feather';

class Contact extends Component {

  render() {
    return (
      <div className="is-unselectable">
        
        <nav className="level is-mobile">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Homebase</p>
              <a href="/" className="has-text-dark"><Icon.ArrowUp /></a>
            </div>
          </div>
        </nav>

        <div className="columns">
          <div className="column is-4 is-offset-4 extra-padding currently-working monospace">
            <h1 className="title cereal home-title"><span role="img" aria-label="postbox">📮</span>  Contact</h1>
            <div className="content">
              <p>∆ Email is best <a className="contact" href="mailto:jeremyphilemon@outlook.com"><span className="contact-email-margin">jeremyphilemon[@]outlook.com</span></a></p>
              <p>
                    ∂ <a className="contact" href="https://www.linkedin.com/in/jeremyphilemon/">LinkedIn</a><br />
                    ß <a className="contact" href="https://www.twitter.com/jeremyphilemon">Twitter</a><br />
              </p>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Contact;
