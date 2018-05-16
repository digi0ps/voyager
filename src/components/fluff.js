import React, { Component } from 'react';

import 'bulma/css/bulma.css';
import './../App.css';

import Post from './post.js';
import api from './api.js';

import * as Icon from 'react-feather'; // eslint-disable-next-line
import ContentLoader from 'react-content-loader';

class Fluff extends Component {

  constructor(props) {
    super(props);
    this.collapseAll = this.collapseAll.bind(this);
    this.state={
      collapsed: true,
      stories: [],
      loaded: false,
    };
  }

  componentDidMount() {
    api.stories()
      .then(response => {
        this.setState({
          stories: response.data,
          loaded: true,
        });
      });
  }

  collapseAll() {
    this.setState({
      collapsed: !(this.state.collapsed),
    });
  }

  render() {
    return (
      <div className="site-content">

        <nav className="level is-mobile is-unselectable">
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
              <p className="heading">{this.state.collapsed ? '∫': '∂'}</p>
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
              <p className="heading">Last Update</p>
              <p className="title">2m3d</p>
            </div>
          </div>
        </nav>

        {
          this.state.stories.map((story, id)=>{
            return <Post key={id} id={story.pk} title={story.title} date={story.date} collapsed={this.state.collapsed} />;
          })
        }
         
      </div>
    );
  }
}

export default Fluff;
