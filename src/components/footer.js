import 'bulma/css/bulma.css';
import './../App.css';

import React, {Component} from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {visibility: false, mounted: false};
  }

  componentDidMount() {
    let whitelist = ['/fluff', '/', '/contact', '/classes'];
    if (whitelist.includes(window.location.pathname)) {
      this.setState({visibility: true, mounted: true});
    }
  }

  render() {
    return (
      <footer className='footer is-unselectable whales-margin' style={{display: this.state.visibility ? 'inherit' : 'none'}} >{' '}
        <div className='container'><div className = 'is-pulled-right'>
          <img alt='whale' className='whales is-pulled-right' src='https://lh3.googleusercontent.com/kJHBy7o7xGN0uaFAOsqQZpIH7PUbWW68znxqoebLt8ylh8qIaqMqqIJ3Kwa9lU6xpvQoBVpnWBUgFFQxN8GsnhHvDHISBg=s1600' />
        </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
