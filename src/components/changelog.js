import React, { Component } from 'react';

import * as Icon from 'react-feather';

import 'bulma/css/bulma.css';
import './../App.css';

class Changelog extends Component {

  constructor(props) {
    super(props);
    this.enterHover = this.enterHover.bind(this);
    this.leaveHover = this.leaveHover.bind(this);
    this.state={
      hover: false,
      title: this.props.title,
      description: this.props.description,
      date: this.props.date,
    };
  }

  convertDate(date) {
    date = new Date(this.state.date);
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let dt = date.getDate();
    if (dt < 10) {
      dt = '0' + dt;
    }
    month = date.toLocaleString('en-us', { month: 'long' });
    return(month.slice(0,3)+' '+year);
  }

  enterHover() {
    this.setState({
      hover: true,
    });
  }

  leaveHover() {
    this.setState({
      hover: false,
    });
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-4 is-offset-4 extra-padding monospace remove-bottom-padding">

          <div className="changelog-parent" onMouseEnter={this.enterHover} onMouseLeave={this.leaveHover}>
            <div className="date changelog-date">{this.convertDate(this.state.date)}</div>
            <div className="changelog-desc">
              <div>{this.state.title}</div>
              <div className="changelog-info" style={{visibility: this.state.hover ? 'visible': 'hidden', maxHeight: this.state.hover ? 'inherit': '0'}}>
                <div dangerouslySetInnerHTML={{ __html: this.state.description }} />
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Changelog;
