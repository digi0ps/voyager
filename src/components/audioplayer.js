import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'bulma/css/bulma.css';
import './../App.css';

import api from './api.js';

import ContentLoader from 'react-content-loader';

import * as Icon from 'react-feather';

const PreLoader = props => (
  <ContentLoader
    height={353}
    width={400}
    speed={2}
    primaryColor="#fafafa"
    secondaryColor="#f4f4f4"
    style={{display: props.visibility ? 'inherit' : 'none'}}
    {...props}
  >
    <rect x="0" y="0.0" rx="0" ry="0" width="147" height="147" /> 
    <rect x="350" y="0" rx="0" ry="0" width="70" height="20" /> 
    <rect x="350" y="30" rx="0" ry="0" width="70" height="20" /> 
    <rect x="0" y="175.05" rx="0" ry="0" width="280" height="38" />
    <rect x="0" y="230" rx="3" ry="3" width="490" height="15" /> 
    <rect x="0" y="253" rx="3" ry="3" width="380" height="15" /> 
    <rect x="0" y="276" rx="3" ry="3" width="375" height="15" />
    <rect x="0" y="299" rx="3" ry="3" width="370" height="15" />
  </ContentLoader>
);

class AudioPlayer extends Component {

  constructor(props) {
    super(props);
    this.togglePlay = this.togglePlay.bind(this);
    this.updateHeart = this.updateHeart.bind(this);
    this.audio = React.createRef();
    this.state = {
      isPlaying: false,
      id: this.props.id,
      song: '',
      loaded: false,
      first: true,
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
    if(!this.state.isPlaying && this.state.first) {
      this.setState({
        first: false,
      });
      this.updatePlays();
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
  	api.fetchSong(this.state.id)
      .then(response => {
        this.setState({
        	song: response.data,
        	location: response.data.location, 
        	title: response.data.title, 
        	description: response.data.description, 
        	art: response.data.art,
          hearts: response.data.hearts,
          plays: response.data.plays,
          loaded: true,
        });
        this.audio.load();
      });
  }

  updateHeart() {
    api.updateHeart(this.props.id)
      .then(response => {
        this.setState({
          hearts: response.data.hearts,
        });
      });
  }

  updatePlays() {
    api.updatePlays(this.props.id)
      .then(response => {
        this.setState({
          plays: response.data.plays,
        });
      });
  }
  

  updatePlayer() {
  	api.fetchSong(this.props.id)
      .then(response => {
        this.setState({
          song: response.data,
        	location: response.data.location, 
        	title: response.data.title, 
        	description: response.data.description, 
        	art: response.data.art, 
          hearts: response.data.hearts,
          plays: response.data.plays,
          isPlaying: true,
          loaded: true,
        });
        this.audio.load();
        this.audio.play();
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.setState({
        loaded: false,
        id: this.props.id,
      });
      this.updatePlayer();
      this.updatePlays();
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
              <p className="heading">Previous</p>
              <a href="" id="contact" className="has-text-dark"><Icon.Rewind /></a>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Next</p>
              <a href="" id="fluff" className="has-text-dark"><Icon.FastForward /></a>
            </div>
          </div>
        </nav>

        <div className="columns">
          <div className="column is-4 is-offset-4 extra-padding currently-working player-reduce-margin">

            <PreLoader visibility={!this.state.loaded} />
 
            <div className="song-meta" style={{display: this.state.loaded ? 'inherit' : 'none'}}>
              <div className="song-icons">
                <span className="is-pulled-right song-heart is-6" onClick={this.updateHeart}>{this.state.hearts}<Icon.Heart size={18} /></span>
                <span className="is-pulled-right song-eye is-6"><span className="song-plays">{this.state.plays}</span><Icon.Radio size={19} /></span>
              </div>
              <figure class="image is-128x128 album-art">
  		  		    <img src={this.state.art} />
              </figure>

              <h1 className="title cereal is-4">{this.state.title}</h1>
              <h2 className="subtitle cereal is-6">{this.state.description}</h2>
            </div>
            <h2 className="is-pulled-right">{Math.floor(this.state.currentTime)}/{Math.floor(this.state.duration) ? Math.floor(this.state.duration) : 0}</h2>
            <progress class="progress is-success" value={(this.state.currentTime/this.state.duration)*100} max="100"></progress>

            <audio id="audio" title={this.state.title} ref={(audio)=>{this.audio = audio;}}>
              <source src={this.state.location} type='audio/mpeg'/>
            </audio>

          </div>
        </div>
      </div>
    );
  }

}

export default AudioPlayer;