import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './../App.css';

class Timeline extends Component {
  render() {
    return (
      <div className="timeline is-centered monospace">

        <div className="build-tag">
          <div className="control">
            <div className="tags has-addons">
              <span className="tag is-dark">build</span>
              <span className="tag is-danger">failing</span>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-marker is-icon">
          </div>
          <div className="timeline-content">
            <p className="heading">January 2018</p>
            <p>Mentored about 23 students through Google Code-In and Zulip with their first experience on working with open source code</p>
          </div>
        </div>

        <header className="timeline-header">
          <span className="tag">2018</span>
        </header>

        <div className="timeline-item is-danger">
          <div className="timeline-marker is-danger">
          </div>
          <div className="timeline-content">
            <p className="heading">December 2017</p>
            <p>Attended my first tech conference, Google Developer Days in Bangalore.</p>
          </div>
        </div>

        <div className="timeline-item is-danger">
          <div className="timeline-marker is-danger">
          </div>
          <div className="timeline-content">
            <p className="heading">October 2017</p>
            <p>
              Pants were set on fire. However, no real pants were harmed in the process.
            </p>
          </div>
        </div>

        <div className="timeline-item is-danger">
          <div className="timeline-marker is-danger">
          </div>
          <div className="timeline-content">
            <p className="heading">January 2017</p>
            <p>
              Co-founded uniqna.com, a university based news and event aggregator, with <a href="https://github.com/@digi0ps">@Sriram</a>
            </p>
          </div>
        </div>

        <header className="timeline-header">
          <span className="tag is-danger">2017</span>
        </header>

        <div className="timeline-item is-info">
          <div className="timeline-marker is-info">
          </div>
          <div className="timeline-content">
            <p className="heading">July 2016</p>
            <p>Moved to Chennai to pursue Bachelors in Computer Science and Engineering at Vellore Institute of Technology</p>
          </div>
        </div>

        <div className="timeline-item is-info">
          <div className="timeline-marker is-info">
          </div>
          <div className="timeline-content">
            <p className="heading">March 2016</p>
            <p>Graduated high school from New Millennium School, Bahrain</p>
          </div>
        </div>

        <header className="timeline-header">
          <span className="tag is-info">2016</span>
        </header>

        <div className="timeline-item is-warning">
          <div className="timeline-marker is-warning">
          </div>
          <div className="timeline-content">
            <p className="heading">December 2010</p>
            <p>Built a Club Penguin trainer to hack coins into my penguin account. Also met Rockhopper w00t!</p>
          </div>
        </div>

        <header className="timeline-header">
          <span className="tag is-warning">2010</span>
        </header>

        <div className="timeline-item is-success">
          <div className="timeline-marker is-success">
          </div>
          <div className="timeline-content">
            <p className="heading">April 1998</p>
            <p>
              Arrived on Earth with a lot of bawling, puking, and hair-pulling<br />
            </p>
          </div>
        </div>

        <header class="timeline-header">
          <span class="tag is-medium is-success">1998</span>
        </header>
        
      </div>
    );
  }
}

export default Timeline;
