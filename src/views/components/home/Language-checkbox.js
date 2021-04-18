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
        this.setState((state) => ({ checked: !state.checked }))
    }
    
    render() {
        console.log(this.state.checked);
        this.state.checked ? addToSelectedCourses(this.props.language) : removeFromSelectedCourses(this.props.language)
        return (
            <span onClick={this.toggleCheck} className={`lang-choice ${this.state.checked ? 'lang-chosen' : null}`} id={`lang-choice-${this.props.language}`}>
                <LanguageText language={this.props.language} />
            </span>
        )
    }
}

export default LanguageCheckBox