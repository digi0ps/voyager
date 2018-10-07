import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './../App.css';

import * as Icon from 'react-feather';
import emoji from 'react-easy-emoji';

class Classes extends Component {
  render() {
    return (
      <div className="is-unselectable">
        <nav className="level is-mobile">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Homebase</p>
              <a href="/" className="has-text-dark">
                <Icon.ArrowUp />
              </a>
            </div>
          </div>
        </nav>

        <div className="columns">
          <div className="column is-4 is-offset-4 extra-padding currently-working monospace">
            <h1 className="title cereal home-title">Classes</h1>
            <div className="content">
              <h1 className="title classes-year">2018</h1>
              <ul className="class-ul">
                <p className="class-list">{emoji('🍂')}Architecture and C Programming</p>
                <p className="class-list">{emoji('🍂')}Programming with Objects and Data Structures</p>
                <p className="class-list">{emoji('🍂')}Introduction to Philosophy</p>
                <p className="class-list">{emoji('🍂')}Introduction to Music</p>
                <p className="class-list">{emoji('🍂')}Professional Skills, Ethics, and CS Trends</p>
                <p className="class-list">{emoji('❄️')}Automata Theory and Formal Languages</p>
                <p className="class-list">{emoji('❄️')}Operating Systems</p>
                <p className="class-list">{emoji('❄️')}Microprocessor and Interfacing</p>
                <p className="class-list">{emoji('❄️')}Applied Linear Algebra</p>
                <p className="class-list">{emoji('❄️')}Data Visualization</p>
                <p className="class-list">{emoji('❄️')}Lean Startup Management</p>
              </ul>

              <h1 className="title classes-year">2017</h1>
              <ul className="class-ul">
                <p className="class-list">{emoji('🍂')}Data Structures and Algorithms</p>
                <p className="class-list">{emoji('🍂')}Discrete Mathematics and Graph Theory</p>
                <p className="class-list">{emoji('🍂')}Database Management Systems</p>
                <p className="class-list">{emoji('🍂')}Internet and Web Programming</p>
                <p className="class-list">{emoji('🍂')}Software Engineering</p>
                <p className="class-list">{emoji('❄️')}Applications of Differential and Difference Equations</p>
                <p className="class-list">{emoji('❄️')}Statistics for Engineers</p>
                <p className="class-list">{emoji('❄️')}Digital Logic and Design</p>
                <p className="class-list">{emoji('❄️')}Introduction to Innovative Projects</p>
              </ul>

              <h1 className="title classes-year">2016</h1>
              <ul className="class-ul">
                <p className="class-list">{emoji('🍂')}Single and Multivariable Calculus</p>
                <p className="class-list">{emoji('🍂')}Introduction to Computer Science and Programming in Python</p>
                <p className="class-list">{emoji('🍂')}Introduction to Chemistry Principles I</p>
                <p className="class-list">{emoji('🍂')}General Physics I and II (Calculus Based)</p>
                <p className="class-list">{emoji('🍂')}Introduction to German</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Classes;
