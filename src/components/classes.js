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
              <h1 class="title classes-year">2018</h1>
              <ul class="class-ul">
                <p class="class-list">{emoji('🍂')}Intro. to Philosophy</p>
                <p class="class-list">{emoji('🍂')}Intro. to Music</p>
                <p class="class-list">{emoji('🍂')}Programming with Objects and Data Structures</p>
                <p class="class-list">{emoji('🍂')}Professional Skills, Ethics, and CS Trends</p>
                <p class="class-list">{emoji('🍂')}Architecture and C Programming</p>
                <p class="class-list">{emoji('❄️')}Automata Theory and Formal Languages</p>
                <p class="class-list">{emoji('❄️')}Operating Systems</p>
                <p class="class-list">{emoji('❄️')}Microprocessor and Interfacing</p>
                <p class="class-list">{emoji('❄️')}Data Visualization</p>
                <p class="class-list">{emoji('❄️')}Applied Linear Algebra</p>
                <p class="class-list">{emoji('❄️')}Lean Startup Management</p>
              </ul>

              <h1 class="title classes-year">2017</h1>
              <ul class="class-ul">
                <p class="class-list">{emoji('🍂')}Data Structures and Algorithms</p>
                <p class="class-list">{emoji('🍂')}Database Management Systems</p>
                <p class="class-list">{emoji('🍂')}Software Engineering</p>
                <p class="class-list">{emoji('🍂')}Internet and Web Programming</p>
                <p class="class-list">{emoji('🍂')}Discrete Mathematics and Graph Theory</p>
                <p class="class-list">{emoji('❄️')}Applications of Differential and Difference Equations</p>
                <p class="class-list">{emoji('❄️')}Introduction to Innovative Projects</p>
                <p class="class-list">{emoji('❄️')}Statistics for Engineers</p>
                <p class="class-list">{emoji('❄️')}Digital Logic and Design</p>
              </ul>

              <h1 class="title classes-year">2016</h1>
              <ul class="class-ul">
                <p class="class-list">{emoji('🍂')}Intro. to Chemistry Principles I</p>
                <p class="class-list">{emoji('🍂')}Intro. to Computer Science and Programming in Python</p>
                <p class="class-list">{emoji('🍂')}Gen. Physics I and II (Calculus Based)</p>
                <p class="class-list">{emoji('🍂')}Intro. to German</p>
                <p class="class-list">{emoji('🍂')}Calculus I and II</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Classes;
