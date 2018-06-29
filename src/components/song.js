import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './../App.css';

import * as Icon from 'react-feather';

class Song extends Component {

  constructor(props) {
    super(props);
    this.enterHover = this.enterHover.bind(this);
    this.leaveHover = this.leaveHover.bind(this);
    this.selectedSong = this.selectedSong.bind(this);
    this.state={
      title: this.props.title,
      description: this.props.description,
      location: this.props.location,
      date: this.props.date,
      art: this.props.art,
      hover: 'white',
      circle: 'white',
    };
  }

  enterHover() {
    this.setState({
      hover: '#424242',
      circle: '#424242',
    });
  }

  leaveHover() {
    this.setState({
      hover: 'white',
      circle: 'white',
    });
  }

  selectedSong() {
    this.setState({
      circle: 'white',
    });
  }

  render() {
    return (
      <span onClick={this.selectedSong}>
        <a className="song-parent" onClick={this.props.chooseHandler.bind(null, this.props.id)} onMouseEnter={this.enterHover} onMouseLeave={this.leaveHover}>
          <span className="has-text-white play-circle"><Icon.PlayCircle color={this.state.circle}/></span>
          <h1 className="title cereal is-6 song-name" style={{color: this.state.hover==='white' ? 'white':'#424242'}}>{this.state.title}</h1>
        </a>
      </span>
    );
  }
}

export default Song;
