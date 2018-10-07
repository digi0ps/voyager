import 'bulma/css/bulma.css';
import './../App.css';
import 'bulma-timeline/dist/bulma-timeline.min.css';

import Changelog from './changelog.js';
import api from './api.js';

import moment from 'moment';

import React, { Component } from 'react';
import * as Icon from 'react-feather';

class Home extends Component {
  constructor(props) {
    super(props);
    this.toggleChangeLog = this.toggleChangeLog.bind(this);
    this.state = {
      changelog: false,
      changelogList: [],
      alpha: moment([1998, 3, 6]),
      nf: moment([2018, 7, 26]),
      present: moment()
    };
  }

  componentDidMount() {
    let links = document.links;
    for (var i = 0; i < links.length; i++) {
      if (
        links[i].id !== 'fluff' &&
        links[i].id !== 'work' &&
        links[i].id !== 'classes' &&
        links[i].id !== 'contact'
      ) {
        links[i].target = '_blank';
      }
    }
    api.changelogs().then(response => {
      this.setState({
        changelogList: response.data
      });
    });
  }

  toggleChangeLog() {
    this.setState({
      changelog: !this.state.changelog
    });
  }

  render() {
    return (
      <div className="site-content is-unselectable">
        <nav className="level is-mobile">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Github</p>
              <a
                href="https://www.github.com/jeremyphilemon"
                className="has-text-dark"
              >
                <Icon.Github />
              </a>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Classes</p>
              <a href="/classes" id="classes" className="has-text-dark">
                <Icon.BookOpen />
              </a>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Work</p>
              <a href="" id="work" className="has-text-dark">
                <Icon.Briefcase />
              </a>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Medium</p>
              <a
                href="https://www.medium.com/@jeremyphilemon"
                id="medium"
                className="has-text-dark"
              >
                <Icon.Book />
              </a>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Contact</p>
              <a href="/contact" id="contact" className="has-text-dark">
                <Icon.Mail />
              </a>
            </div>
          </div>
        </nav>

        <div className="columns">
          <div className="column is-4 is-offset-4 extra-padding currently-working monospace">
            <h1 className="title cereal home-title">
              I'm <span className="title-secondary-color">Jeremy.</span>
            </h1>
            <div className="content">
              <p>
                Hi, I dabble in all things computer science, math, physics, and
                design. I'm currently an undergraduate at{' '}
                <span className="bing-color">SUNY Binghamton</span>, majoring in
                Computer Science.
              </p>
              <p>
                I document{' '}
                <a id="fluff" href="/fluff" className="blog-color">
                  stuff
                </a>
                , sometimes, and also post photos on{' '}
                <a
                  href="https://www.instagram.com/jrmyphlmn"
                  className="has-text-danger"
                >
                  instagram
                </a>
                . When I'm not studying, I work on open source projects sharing
                my code with the world on{' '}
                <a
                  href="https://github.com/jeremyphilemon"
                  className="has-text-dark"
                >
                  github
                </a>
                , and spend the rest of my time lurking around{' '}
                <span className="reddit-color">reddit</span> and learning new
                ways to actively make myself better at adulting.
              </p>
              <p>
                Apart from that, I sometimes make awkward faces and try to win
                arguments with strangers over the{' '}
                <a className="xkcd-color" href="https://xkcd.com/386/">
                  internet
                </a>
                .
              </p>
              <p>
                If you're looking to get in touch or just want to send me a
                joke, then check out the contact page.
              </p>
              <p>Thanks for dropping by!</p>
              <div className="stats">
                {this.state.present.diff(this.state.alpha, 'days')}π
                {this.state.present.diff(this.state.nf, 'days')}
              </div>
              <p>
                [
                <a onClick={this.toggleChangeLog}>
                  {this.state.changelog ? '-' : '+'}
                </a>
                ] Changelog
              </p>
            </div>
          </div>
        </div>

        <div
          className="columns"
          style={{ display: this.state.changelog ? 'inherit' : 'none' }}
        >
          {this.state.changelogList.map((changelog, id) => {
            return (
              <Changelog
                key={id}
                id={changelog.pk}
                title={changelog.title}
                description={changelog.description}
                date={changelog.date}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
