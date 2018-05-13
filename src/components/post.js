import React, { Component } from 'react';

import 'bulma/css/bulma.css';
import './../App.css';

import api from './api';

import ContentLoader from 'react-content-loader';

const MyLoader = props => (
  <ContentLoader
    height={300}
    width={400}
    speed={2}
    primaryColor="#fafafa"
    secondaryColor="#f4f4f4"
    {...props}
  >
    <rect x="15" y="15" rx="3" ry="3" width="100" height="20" /> 
    <rect x="15" y="41" rx="3" ry="3" width="185" height="30" /> 
    <rect x="15" y="100.0" rx="3" ry="3" width="490" height="15" /> 
    <rect x="15" y="123.0" rx="3" ry="3" width="380" height="15" /> 
    <rect x="15" y="146.0" rx="3" ry="3" width="375" height="15" />
    <rect x="15" y="169.0" rx="3" ry="3" width="370" height="15" />
    <rect x="15" y="192.0" rx="3" ry="3" width="365" height="15" />
    <rect x="15" y="215.0" rx="3" ry="3" width="270" height="15" />
  </ContentLoader>
);

class Post extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state={
      loaded: false,
      collapsed: this.props.collapsed,
      story: null
    };
  }

  componentDidMount() {
    const id = this.props.id;
    setTimeout(function() {
      api.story(id)
        .then(response => {
          this.setState({loaded: true, story: response.data});
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
    date = new Date(this.state.story.date);
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
  }

  render() {

    if(!this.state.loaded) {
      return (
        <div className="columns">
          <div className="column is-4 is-offset-4">
            <MyLoader/>
          </div>
        </div>
      );
    }

    return (
      <div className="columns">

        <div className="column is-4 is-offset-4 remove-padding">
          <div className="box is-unselectable" style={{paddingBottom: this.state.collapsed ? '0rem': '1.25rem'}}>
            <h2 className="subtitle date text-is-small">{this.convertDate(this.state.story.date)}</h2>
            <h1 className="title is-3" onClick={this.toggle}>{this.state.story.title}</h1>
            <div className="content story" style={{display: this.state.collapsed ? 'none': 'inherit'}}>
              <div dangerouslySetInnerHTML={{ __html: this.state.story.story }} />
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Post;