import React from 'react';
import CourseBoxButton from './Course-Big-Button';

import AllCoursesModal from './All-courses-modal';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.showAllCoursesModal = this.showAllCoursesModal.bind(this);
    this.hideAllCoursesModal = this.hideAllCoursesModal.bind(this);
    this.state = { modalVisible: false, dropdownVisible: false, musicPlaying: false };
  }

  showAllCoursesModal() {
    this.setState({ modalVisible: true })
  }
  
  hideAllCoursesModal() {
    this.setState({ modalVisible: false })
  }
  
  render() {
    const courseBoxes = this.props.selectedCourses.sort().map((course) => <CourseBoxButton key={course} courseName={course} />)
    return (
      <div className="home">
          {this.state.modalVisible ? <AllCoursesModal hideModal={this.hideAllCoursesModal} languages={this.props.allCourses} /> : null}
          <p id='greet'>
            <span id="greeting">Hi,<span id='handwave'>&#x1f44b;</span></span><br /><span id="dev-name">{this.props.devName}</span><i id='edit-nickname' className="fas fa-paint-brush fa-fw"></i>
          </p>
          <p>Choose a Language</p>
          <div className='langs-section'>
              {courseBoxes}
              <div onClick={this.showAllCoursesModal} title="Add New Language" className="lang-box add-lang-btn" id='add-lang-btn'>
                  <span>+</span>
                  <p>Add Language</p>
              </div>
          </div>
      </div>
    )
  }
}

export default Home;
