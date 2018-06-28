import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'bulma/css/bulma.css';
import './../App.css';

import api from './api.js';

import * as Icon from 'react-feather';

class AudioPlayer extends Component {

  constructor(props) {
    super(props);
    this.togglePlay = this.togglePlay.bind(this);
    this.audio = React.createRef();
    this.state = {
      isPlaying: false,
      id: this.props.id,
      song: '',
    };
  }

  togglePlay() {
    if (!this.state.isPlaying) {
      this.setState({ isPlaying: true });
      this.audio.play();
    } else {
      this.setState({ isPlaying: false });
      this.audio.pause();
    }
  }

  componentDidMount() {
    this.audio.addEventListener('timeupdate', () => {
      let currentTime = this.audio.currentTime;
      let duration = this.audio.duration;
      this.setState({
      	currentTime: currentTime,
      	duration: duration,
      });
    });
    const id = this.state.id;
  	api.fetchSong(id)
      .then(response => {
        this.setState({
        	song: response.data,
        	location: response.data.location, 
        	title: response.data.title, 
        	description: response.data.description, 
        	art: response.data.art, 
        });
        this.audio.load();
      });
  }

  updatePlayer(id) {
  	api.fetchSong(id)
      .then(response => {
        this.setState({
        	song: response.data,
        	location: response.data.location, 
        	title: response.data.title, 
        	description: response.data.description, 
        	art: response.data.art, 
        });
        this.audio.load();
        this.audio.play();
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.updatePlayer(this.props.id);
    }
  }

  render() {
    return (
      <div className="is-unselectable">
        <nav className="level is-mobile">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Home</p>
              <a href="/" className="has-text-dark"><Icon.ArrowLeft /></a>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Play</p>
              <a id="play-button" className="has-text-dark" onClick={this.togglePlay} style={{display: this.state.isPlaying? 'inherit' : 'none'}}><Icon.Pause /></a>
              <a id="play-button" className="has-text-dark" onClick={this.togglePlay} style={{display: this.state.isPlaying? 'none' : 'inherit'}}><Icon.Play /></a>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Next</p>
              <a href="/fluff" id="fluff" className="has-text-dark"><Icon.FastForward /></a>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Previous</p>
              <a href="/contact" id="contact" className="has-text-dark"><Icon.Rewind /></a>
            </div>
          </div>
        </nav>

        <div className="columns">
          <div className="column is-4 is-offset-4 extra-padding currently-working player-reduce-margin">


            <figure class="image is-128x128 album-art">
		  		<img src={this.state.art} />
            </figure>

            <h1 className="title cereal is-4">{this.state.title}</h1>
            <h2 className="subtitle cereal is-6">{this.state.description}</h2>
            <h2 className="song-duration is-pulled-right">{Math.floor(this.state.currentTime)}/{Math.floor(this.state.duration) ? Math.floor(this.state.duration) : 0}</h2>
            <progress class="progress is-success" value={(this.state.currentTime/this.state.duration)*100} max="100"></progress>


            <audio id="audio" ref={(audio)=>{this.audio = audio;}}>
              <source src={this.state.location} type='audio/mpeg'/>
            </audio>

          </div>
        </div>
      </div>
    );
  }

}

export default AudioPlayer;