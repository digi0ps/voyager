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
      nowPlaying: 1,
      loaded: false,
      attempted: false,
    };
  }

  fetchPlaylist() {
    api.fetchPlaylist()
      .then(response => {
        this.setState({
          playlist: response.data,
          loaded: true,
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
    this.setState({attempted: true});
    api.login('guest', this.state.password)
    .then(done => {
      this.setState({
        auth: true,
      });
      this.fetchPlaylist();
    });
  }

  render() {

    if(!localStorage.AuthToken) {
      return (
        <div className="is-unselectable">
          <section className="hero is-medium has-text-centered">
            <div className="hero-body">
              <div className="container">
              <img className="xkcd-balloon-float" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAACrCAQAAACus1hMAAAC7mlDQ1BJQ0MgUHJvZmlsZQAAeJxjYGCe4Oji5MokwMBQUFRS5B7kGBkRGaXAfp6BjYGZAQwSk4sLHAMCfEDsvPy8VAZUwMjA8O0aiGRguKwLMouBNMCaDLQYSB8AYqOU1OJkIP0FiNPLSwqA4owxQLZIUjaYXQBiZ4cEOQPZLQwMTDwlqRUgvQzO+QWVRZnpGSUKhpaWlgqOKflJqQrBlcUlqbnFCp55yflFBflFiSWpKUC1UDtAgNclv0TBPTEzT8HIQJVEdxMEoHCEsBDhgxBDgOTSojIIC6xIgEGBwYDBgSGAIZGhnmEBw1GGN4zijC6MpYwrGO8xiTEFMU1gusAszBzJvJD5DYslSwfLLVY91lbWe2yWbNPYvrGHs+/mUOLo4vjCmch5gcuRawu3JvcCHimeqbxCvJP4hPmm8cvwLxbQEdgh6Cp4RShV6Idwr4iKyF7RcNEvYpPEjcSvSFRIykkek8qXlpY+IVMmqy57S65P3kX+j8JWxUIlPaW3ymtVClRNVH+qHVTv0gjVVNL8oHVAe5JOqq6VnqDeK/0jBgsMa41ijG1N5E2ZTV+aXTDfabHEcoJVnXWuTZxtoJ2rvbWDsaOOk5qzkouCq7ybgruyh7qnrpeJt42Pu2+wX4J/fkB94MSgpcG7Qi6GvgxnipCLtIqKiK6ImRm7J+5BAluiblJYckPKmtSb6RwZFpmZWXOzL+ay59nnVxRsKnxXrF2SVbqq7E2FfmVJ1a4axlqvuqn1Dxv1mmqaz7bKtRW2H+2U7irqPt2r2tfYf3eizaTZk/9OjZ92eIbGzP5Z3+ckzD0933zB0kUii1uXfFuWufzeypBVp9e4rN233nLDtk0mm7dsNdm2fYfVzv27Xfec3Re2/8HBnEM/j7QfEz++4qT1qXNnks/+Oj/povalo1cSr/67Puemza27d+rvKd8/8TDvsdiT/c8yX4i8PPg6/638uwsfmj6Zfn71dcH38J8Cv079af3n+P8/AA0ADzTeHLSIAAAIuUlEQVR4nO2df3AUZxnHP3fJhCNRQolaKcG0pNWW0Bq1UKH8UGmtY1NwHFAYyhSmBW2nKlYzlnZaWh2nMk7rmOnYHwzjlLQzMrSdispIaY3BgkNbSCwwwak5iKHQDAkJFO6SeHePf9zm2Lvbu7y7t3u7N7Pf+yf3vs/7vJ97Z+99332fZy8BoVQVdBvAunx0N+SjuyEf3Q356G7IR3dDProb8tHdkI/uhnx0N1SuahjIXVXDcubSwAwqiNLDHrYQto6kfLcsiq8cWsQLDGcZJ3iN6dbRFYkKQJ/IK3kaDLLEq+hT6BynSYImL6IH2KPQqIdq76FvUGx2v9fQp3NOsdlB59CtzesrmaRo2WjlklGTNfR1Jvw3WOpBybV5TeNqE9YzLfSgJCvoXzZl/QkLPSjJCvo1pqyrLPSgJCvop0xZn7PQg5KcRz9toQclWUE/ZMq6x0IParK0JB1WbhZR31abJbI2rz+vbPkuMUs9qMjSqFfRq9jsLgeJLKHDEhIKjfqVNwxFRIctCo02mQcvBvokjo7T5ByTvYkO8wzuSvWvB62AFwcdvkk0Z4NDVHoZHW7NcdORYJ418OKhQwMnDcx/YxW8mOgwPets4ACh0kCHKl7QmZ7nCuvgxUYHWMmAZvpwIeBuoEMtPdqo309ZaaHDqZT5N0oNvYUuhHYWFHL47Q46QJw/W8c2g25/aOAj6mz3aSj70U9TX8iXVF32o7/HRD5nu1cD2Y9+AFhsu1cD2Y++F7jZdq8GCqjOHXnCYOmawCAD1iNJ6mEw+0d9hA5qqbXdb5aciJseBG50wG+GnEL/ggN+M+QE+hFgtgN+M2X7RgAmkuC480ROjHqUMFcy0QHPaXImvaEoX1Rn0LuA6xzxrJMz6EeBRkc86+QcuuPTo/0bAYAgF4nzcXMT05jc2wgAJDhJlZUDajNyKoHqFDDDId+anEJ/G1jBJx3ynpQDqynAHQjCkJUTdjdXU4A1AFTzeYf849wFEyYB4OjpgEMXDHQi9Fs58XX7goELQA3LHPNf8JI0mYbAVInxb7oyanqpBQaYYzZdsxgpmlfzGrGUQS9Pcr2uNorwBCMcNpX4Y4bIInqA9VzIMoqxg3oAQgjCAu4mQS+zvINewS6t+DBLmU0jP+ItrWSIpcBUBGEmsJooF1ntFfS1CEI/zzJfV3odW4kjxGhmAUJcCz/O5yzCX9MuJ1fQy/gtCYRnDFfKZVoktQPhb6nSqbyEMMqfVJLYnEIv5w8IF/luzp7n0qc12ZxWfpsW52sd7xzYGfQA2xAiLMzb903ayD+VUR5kLd0I+9jJF4uN/kOEUYU40RoEYbtBzVLN3R+Liz6LEYSfjgsOsBchZnBrvUpzd6K46K0I7Ypbh0ZiCFuzypdo7t7NnRNmP/o04gh3KIED7EaIZCUjL9fc5Vmk7EdfhfC+MjgsQ5CMmSjIEc1dnjlelUh953g78KYJ9DdIAIsyPk4D8CJwmwlPuaQ86p0IG025PoLwhu59Od0IfVTyAR2FE6mP+jTMJrkeBz6je7+OGcCTRPg7N3CZKV8GUkcfBSpM+Y6A7iymnGbgA54G2gkWkkWQlDr6f8FChGgo9de3uQp4nAjwKhF+YtpXppSv9RaEt0y5PqC71gO8jXCGCdr77UiuKJ/91/pOYJ6JtPvJNJIMzgA0MRvYzIj2/l9QWK6SmQumjRMEWK9sv4YK4C8AhGgBTvJ0qrbCVN/GUr5g4F6EEcUAVxndCD2UA3W0I0ja6cDLSK57VmUiE+hBOhB6lI6FHkUQvg8s0TIht+hqg5zJvTI7gQ4zGUIIc9U44E3EEDoI8RhxhGHuTKu/lTyZkM6gwyIiCB9yS07sIBsZRhhmMbsRhPeZk2GzmzjXFhsdFjKAkKCFyw36ncVeBCFKG+cRhO1Z97BzSPBKzo/uIDrU04EgnON3qYhRgCtYzm7iCDJBgie0D9CcRRZgL/F88T0n0aGCX6RyqM9ylE4GxwwDUjbWZB9XGpCtRmjJDV6MjLt6nss6/zrDnmAyp72PB1Irp16foo/9hjWm0Qs7Lp3EV5hFHRX0cYwjbKIJ+B/baGbQ0M0abqZZt7MxRFeU5VHP1tcQhN5Cn3VUJbLzfL2TbqDSwee/0mXjqMMKBOGhIhHZil5GJ8JQYXdA7qDDYgTh56WIDu8gRAr5qrqHPpdRhEOWspCqWEiNe+jwBIKww+TsVccORhAOuYkeYh9C+g49v75EKyNaR2E30WGyBv+4gm0T/9B1E+cmd9GhimMIwkt5Exxu55+a+6j2EOgmN7+mY5pBF4JwjGkGtRXco3044TQP0ap90IAX0GESLyIIXRmJgyHW0625PcUGQjyGIOxPZhR4AR3gZyQQRnlU23pexg+0p5eEfXyLCYxFOsJ8OtnEK+iwirMIwk5m8zBDCEKCttSTBTUMIPRpUW5PoUOtdnudfEXZlnaW8yqCsPJSgZfQIcAGbeyFIVr5aqrmxwiSfpPtLXSASm7kET7S3L3Dg8xnHXGEcHrEyXvoSYVYwf40x9HMxGWvoif1dV7WPdh8nF/qDze8jQ41HEcY0WYcQThIM1O9j15JG4Kwjo+xljdTvwQRZ6W30QPahPj7VEkdD9CPIPzK2+j3IQivp4XaFxJDOEq1l9EXEEUIp+VZT6EP4UIy/O5V9Hr6ES5mHFtvRUitqN5Ev4b/ICQyfi6xCUGXIeNN9I0IwiNpZSG6EQYvxfO8iV5NJ5szcr+aEYT7LhV4Ez1bUxhAOKafbUoF/TmEjF8dKA30+cQRdqUXlgJ6NWGESGbwvhTQn0cQvpdZ7H30W0gg7MqO9HgdvZIwwnmjGJ/X0Z9CSJvNSwX9eoYR2ozDgt5Gb0eI8VnjSi+jJ0+7fp2r2rvol9OP8GHuE2DvoieX/u/kNvAqeohRhPZ8Jl5Fh3vpyv/IuCqRcnqD91TC/ybBR3dDProb8tHdkI/uhnx0N+SjuyEf3Q356G7IR3dD/wdGqp7y5ijgvwAAAABJRU5ErkJggg==" alt="xkcd-balloon-float"/>
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

                    <div style={{display: this.state.attempted ? 'inherit' : 'none'}}>
                      <br/>Wroooong!
                    </div>

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
      <div className="is-unselectable finite-playlist">


        <AudioPlayer id={this.state.nowPlaying}/>

        <section className="hero is-success playlist-hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title cereal has-text-centered">
                A finite playlist
              </h1>
              <div className="columns">
                <div className="column is-4 is-offset-4 extra-padding currently-working monospace">

                  <div className="has-text-centered" style={{display: this.state.loaded ? 'none' : 'false'}}>
                  <a className="button is-success is-loading has-text-centered">loading</a>
                  <h1 className="title is-6 cereal playlist-loading">If it's taking too much time, your secret key must've expired.</h1>
                  </div>
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
