import React, { Component } from 'react';

import 'bulma/css/bulma.css';
import './../App.css';

import api from './api';

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

const PostLoader = props => (
  <ContentLoader
    height={140}
    width={400}
    speed={2}
    primaryColor="#fafafa"
    secondaryColor="#f4f4f4"
    {...props}
  >
    <rect x="0" y="4" rx="3" ry="3" width="490" height="15" /> 
    <rect x="0" y="27.0" rx="3" ry="3" width="380" height="15" /> 
    <rect x="0" y="50.0" rx="3" ry="3" width="375" height="15" />
    <rect x="0" y="73.0" rx="3" ry="3" width="370" height="15" />
    <rect x="0" y="96.0" rx="3" ry="3" width="365" height="15" />
    <rect x="0" y="119.0" rx="3" ry="3" width="270" height="15" />
  </ContentLoader>
);

class Post extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state={
      loaded: false,
      preloaded: true,
      title: this.props.title,
      date: this.props.date,
      collapsed: this.props.collapsed,
      story: null,
      apiLock: false
    };
  }

  componentDidMount() {
    setTimeout(function() {
      this.setState({
        preloaded: false,
      });
    }.bind(this), 0);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.collapsed!==nextProps.collapsed) {
      this.setState({
        'collapsed': nextProps.collapsed,
      });
    }
  }

  convertDate(date) {
    date = new Date(this.state.date);
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let dt = date.getDate();
    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }
    return(dt+'/' + month + '/'+year);
  }

  toggle() {
    this.setState({
      collapsed: !(this.state.collapsed),
    });
    const id = this.props.id;
    if(this.state.collapsed && !this.state.apiLock) {
      setTimeout(function() {
        api.story(id)
          .then(response => {
            this.setState({loaded: true, story: response.data});
          });
      }.bind(this), 0);
      this.setState({
        apiLock: true,
      });
    }
  }

  render() {

    if(this.state.preloaded) {
      return (
        <div className="columns">
          <div className="column is-4 is-offset-4">
            <PreLoader/>
          </div>
        </div>
      );
    }

    if(!this.state.preloaded && this.state.loaded && !this.state.apiLock) {
      return (
        <div className="columns">

          <div className="column is-4 is-offset-4 remove-padding">
            <div className="box is-unselectable" style={{paddingBottom: this.state.collapsed ? '0rem': '1.25rem'}}>
              <h2 className="subtitle date text-is-small">{this.convertDate(this.state.date)}</h2>
              <h1 className="title is-3 cereal" onClick={this.toggle}>{this.state.title}</h1>
              <div className="content story is-cereal" style={{display: this.state.collapsed ? 'none': 'inherit'}}>
              </div>
            </div>
          </div>
        
        </div>
      );
    }

    if(!this.state.loaded) {
      return  (
        <div className="columns">

          <div className="column is-4 is-offset-4 remove-padding">
            <div className="box is-unselectable" style={{paddingBottom: this.state.collapsed ? '0rem': '1.25rem'}}>
              <h2 className="subtitle date text-is-small">{this.convertDate(this.state.date)}</h2>
              <h1 className="title is-3 cereal" onClick={this.toggle}>{this.state.title}</h1>
              <div className="content story" style={{display: this.state.collapsed ? 'none': 'inherit'}}>
                <PostLoader />
              </div>
            </div>
          </div>
        
        </div>
      );
    }

    if(this.state.loaded) {
      return (
        <div className="columns">

          <div className="column is-4 is-offset-4 remove-padding">
            <div className="box is-unselectable" style={{paddingBottom: this.state.collapsed ? '0rem': '1.25rem'}}>
              <h2 className="subtitle date text-is-small">{this.convertDate(this.state.date)}</h2>
              <h1 className="title is-3 cereal" onClick={this.toggle}>{this.state.title}</h1>
              <div className="content story" style={{display: this.state.collapsed ? 'none': 'inherit'}}>
                <div dangerouslySetInnerHTML={{ __html: this.state.story.story }} />
              </div>
            </div>
          </div>
        
        </div>
      );
    }
  }
}

export default Post;