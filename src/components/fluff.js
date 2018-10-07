import React, { Component } from 'react';

import 'bulma/css/bulma.css';
import './../App.css';

import Post from './post.js';
import api from './api.js';

import * as Icon from 'react-feather';

import ContentLoader from 'react-content-loader';

const PreLoader = props => (
  <ContentLoader
    height={65}
    width={400}
    speed={2}
    primaryColor="#fafafa"
    secondaryColor="#f4f4f4"
    {...props}
  >
    <rect x="15" y="12" rx="3" ry="3" width="100" height="18" />
    <rect x="15" y="37" rx="3" ry="3" width="185" height="30" />
  </ContentLoader>
);

class Fluff extends Component {
  constructor(props) {
    super(props);
    this.collapseAll = this.collapseAll.bind(this);
    this.state = {
      collapsed: true,
      stories: [],
      loaded: false
    };
  }

  componentDidMount() {
    api.stories().then(response => {
      this.setState({
        stories: response.data,
        loaded: true
      });
    });
  }

  collapseAll() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div className="site-content is-unselectable">
        <nav className="level is-mobile">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Back</p>
              <a href="/" className="has-text-dark">
                <Icon.ArrowLeft />
              </a>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">
                {this.state.collapsed ? 'Expand All' : 'Shrink All'}
              </p>
              <a className="has-text-dark" onClick={this.collapseAll}>
                <Icon.Layers />
              </a>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Search</p>
              <Icon.Search />
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Hmm</p>
              <a href="/alohomora" className="has-text-dark">
                <Icon.Truck />
              </a>
            </div>
          </div>
        </nav>

        {Array.apply(null, Array(2)).map(() => (
          <div
            className="columns"
            style={{ display: this.state.loaded ? 'none' : 'inherit' }}
          >
            <div className="column is-4 is-offset-4">
              <PreLoader />
            </div>
          </div>
        ))}

        {this.state.stories.map((story, id) => {
          return (
            <Post
              key={id}
              id={story.pk}
              title={story.title}
              date={story.date}
              collapsed={this.state.collapsed}
              first={id === 0 ? true : false}
            />
          );
        })}
      </div>
    );
  }
}

export default Fluff;
