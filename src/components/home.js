import 'bulma/css/bulma.css';
import './../App.css';
import 'bulma-timeline/dist/bulma-timeline.min.css';

import Timeline from './timeline.js';

import React, { Component } from 'react';
import * as Icon from 'react-feather';

class Home extends Component {

  constructor(props) {
    super(props);
    this.toggleChangeLog=this.toggleChangeLog.bind(this);
    this.state={
      changelog: false,
    };
  }

  componentDidMount() {
    let links = document.links;
    for (var i = 0; i < links.length; i++) {
      if (links[i].id !== 'fluff' && links[i].text !== 'work' && links[i].text !== 'contact') {
        links[i].target = '_blank';
      }
    }
  }

  toggleChangeLog() {
    this.setState({
      changelog: !(this.state.changelog),
    });
  }

  render() {
    return (
      <div className="site-content is-unselectable">
      
        <nav className="level is-mobile">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Github</p>
              <a href="https://www.github.com/jeremyphilemon" className="has-text-dark"><Icon.Github /></a>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Work</p>
              <a href="" id="work" className="has-text-dark" ><Icon.Briefcase /></a>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Blog</p>
              <a href="/fluff" id="fluff" className="has-text-dark"><Icon.Book /></a>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Contact</p>
              <a href="" id="contact" className="has-text-dark"><Icon.Mail /></a>
            </div>
          </div>
        </nav>

        <div className="columns">
          <div className="column is-4 is-offset-4 extra-padding currently-working monospace">
            <h1 className="title cereal home-title">
                I'm <span class="title-secondary-color">Jeremy.</span>
            </h1>
            <div className="content">
              <p>Hi, I dabble in all things computer science, math, physics, and design. I'm currently an undergraduate at <span className="vit-color">Vellore Institute of Technology</span>, majoring in Computer Science and Engineering.</p>
              <p>I also <a href="/fluff" className="blog-color">write for my blog</a>, well I try, and also post photos on <a href="https://www.instagram.com/jeremyphilemon98" className="has-text-danger">instagram</a>. When I'm not studying, I work on open source projects and share my code with the world on <a href="https://github.com/jeremyphilemon" className="has-text-dark">github</a>, and spend the rest of my time lurking around <span className="reddit-color">reddit</span> and learning new ways to actively make myself better at adulting.</p>
              <p>Apart from that, I sometimes make awkward faces and try to win arguments with strangers over the <a className="xkcd-color" href="https://xkcd.com/386/">internet</a>.</p>
              <p>If you're looking to get in touch or just want to send me a joke, then check out the contact page.</p>
              <p>Thanks for dropping by!</p>
              <div className="stats">π</div>
              <p>
                [<a onClick={this.toggleChangeLog}>{this.state.changelog ? '-' : '+'}</a>] Changelog
              </p>
            </div>
          </div>
        </div>

        <div className="columns" style={{display: this.state.changelog ? 'inherit' : 'none'}}>
          <div className="column is-4-modified is-offset-4-modified">
            <Timeline />
          </div>
        </div>

      </div>
    );
  }
}

export default Home;