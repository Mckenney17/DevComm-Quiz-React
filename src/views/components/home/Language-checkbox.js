import React from "react"

import LanguageText from "../LanguageTextFormat"
import { addToSelectedCourses, courseSelected, removeFromSelectedCourses } from "../../../utils/store"

class LanguageCheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.toggleCheck = this.toggleCheck.bind(this);
        this.state = { checked: courseSelected(this.props.language) };
    }

    toggleCheck() {
        this.setState((state) => state.checked
        ?  (this.removeCourse(), { checked: false })
        : (this.addCourse(), { checked: true }))
    }

    addCourse() {
        addToSelectedCourses(this.props.language)
    }

    removeCourse() {
        removeFromSelectedCourses(this.props.language)
    }
    
    render() {
        return (
            <span onClick={this.toggleCheck} className={`lang-choice ${this.state.checked ? 'lang-chosen' : null}`} id={`lang-choice-${this.props.language}`}>
                <LanguageText language={this.props.language} />
            </span>
        )
    }
}

export default LanguageCheckBox