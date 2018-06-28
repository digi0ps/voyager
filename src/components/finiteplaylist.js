import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './../App.css';

import api from './api.js';
import Song from './song.js';
import AudioPlayer from './audioplayer.js';

import * as Icon from 'react-feather';

class FinitePlaylist extends Component {

  constructor(props) {
    super(props);
    this.chooseSong = this.chooseSong.bind(this)
    this.state={
      password: '',
      auth: false,
      playlist: [],
      nowPlaying: 2,
    };
  }

  fetchPlaylist() {
    api.fetchPlaylist()
      .then(response => {
        this.setState({
          playlist: response.data,
        });
    });
  }

  componentDidMount() {
    this.fetchPlaylist();
  }

  chooseSong(id) {
    this.setState({
      nowPlaying: id,
    })
  }

  setPassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  authenticateSecret = () => {
    api.login('guest', this.state.password)
    .then(done => {
      this.setState({auth: true});
      this.fetchPlaylist();
    });
  }

  render() {

    if(!localStorage.AuthToken) {
      return (
        <div className="is-unselectable">
          <section className="hero is-large has-text-centered">
            <div className="hero-body">
              <div className="container">
                <h1 className="title cereal">
                  Alohomora?
                </h1>

                <div className="columns">
                  <div className="column is-4 is-offset-4 extra-padding currently-working monospace">
                  
                    <div className="field">
                      <p className="control">
                        <input className="input" name="secret" type="password" placeholder="Secret key" onChange={this.setPassword}/>
                      </p>
                    </div>

                    <button className="button is-success has-text-white" value="submit" name="submit" onClick={this.authenticateSecret}><Icon.Unlock /></button>

                  </div>
                </div>

              </div>
            </div>
          </section>
        </div>
      );
    }

  if(localStorage.AuthToken) {
    return(
      <div className="is-unselectable">


        <AudioPlayer id={this.state.nowPlaying}/>

        <section className="hero is-success playlist-hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title cereal has-text-centered">
                A finite playlist
              </h1>

              <div className="columns">
          <div className="column is-4 is-offset-4 extra-padding currently-working monospace">

          {
            this.state.playlist.map((song, id)=>{
              return <Song key={id} id={song.pk} title={song.title} description={song.description} date={song.date} location={song.location} art={song.art} chooseHandler={this.chooseSong}/>;
            })
          }

          </div>
        </div>
              
            </div>
          </div>
        </section>

      </div>
    )
  }
}

}
    

export default FinitePlaylist;