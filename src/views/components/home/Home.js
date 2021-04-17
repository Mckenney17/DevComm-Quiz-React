import React from 'react';
import CourseBigButton from './Course-Big-Button';

import './Home.scss';

class Home extends React.Component {
  render() {

    return (
      <div className="home">
          <p id='greet'>
            <span id="greeting">Hi,<span id='handwave'>&#x1f44b;</span></span><br /><span id="dev-name">{this.props.devName}</span><i id='edit-nickname' className="fas fa-paint-brush fa-fw"></i>
          </p>
          <p>Choose a Language</p>

          <div className='langs-section'>
              {
                this.props.selectedCourses.forEach((course) => {
                  <CourseBigButton courseName={course} />
                })
              }
              
              <div title="Add New Language" className="lang-box add-lang-btn" id='add-lang-btn'>
                  <span>+</span>
                  <p>Add Language</p>
              </div>
          </div>
      </div>
    )
  }
}

export default Home;
