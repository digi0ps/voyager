import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './../App.css';

import * as Icon from 'react-feather';

import moment from 'moment';

class Song extends Component {

  constructor(props) {
    super(props);
    this.state={
      title: this.props.title,
      description: this.props.description,
      location: this.props.location,
      date: this.props.date,
      art: this.props.art,
    };
  }

  render() {
    return (

      <a className="song-parent" onClick={this.props.chooseHandler.bind(null, this.props.id)}>
        <span className="has-text-white play-circle"><Icon.PlayCircle/></span>
        <h1 className="title cereal is-6 song-name">{this.state.title}</h1>
      </a>
    );
  }
}

export default Song;
