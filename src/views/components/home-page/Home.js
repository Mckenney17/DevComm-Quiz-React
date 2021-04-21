import React from 'react';
import CourseBoxButton from './Course-Big-Button';

import AllCoursesModal from './All-courses-modal';
import NameSetDropdownInput from './Name-set-dropdown-input';
import { saveSelectedCourses, saveDevName, getSelectedCourses } from '../../../utils/store';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.showAllCoursesModal = this.showAllCoursesModal.bind(this);
    this.saveSelectedCourses = this.saveSelectedCourses.bind(this);
    this.showNameSetDropdown = this.showNameSetDropdown.bind(this);
    this.state = { modalVisible: false, dropdownVisible: false, devName: this.props.getDevName(), selectedCourses: this.props.getSelectedCourses().sort() };
  }

  showAllCoursesModal() {
    this.setState({ modalVisible: true })
  }

  hideAllCoursesModal() {
    this.setState({ modalVisible: false })
  }
  
  saveSelectedCourses() {
    saveSelectedCourses();
    this.hideAllCoursesModal();
    this.setState({ selectedCourses: getSelectedCourses().sort() })
  }

  showNameSetDropdown() {
    this.setState({ dropdownVisible: true })
  }

  hideNameSetDropdown() {
    this.setState({ dropdownVisible: false })
  }

  setDevName(devName) {
    saveDevName(devName);
    this.hideNameSetDropdown();
    this.setState({ devName })
  }
  
  render() {
    const courseBoxButtons = this.state.selectedCourses
    .map((course) => <CourseBoxButton App={this.props.App} key={course} courseName={course} />)

    return (
      <div className="home">
          {this.state.dropdownVisible ? <NameSetDropdownInput Home={this} currentDevName={this.state.devName} /> : null}
          {this.state.modalVisible ? <AllCoursesModal saveSelectedCourses={this.saveSelectedCourses} languages={this.props.allCourses} /> : null}

          <p id='greet'>
            <span id="greeting">Hi,<span id='handwave'>&#x1f44b;</span></span><br /><span id="dev-name">{this.state.devName}</span><i onClick={this.showNameSetDropdown} id='edit-nickname' className="fas fa-paint-brush fa-fw"></i>
          </p>
          <p>Choose a Language</p>
          <div className='langs-section'>
              {courseBoxButtons}
              <div onClick={this.showAllCoursesModal} title="Add New Language" className="lang-box add-lang-btn" id='add-lang-btn'>
                  <span>+</span>
                  <p>Add Language</p>
              </div>
          </div>
      </div>
    )
  }
}

export default HomePage
