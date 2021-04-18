import LanguageText from '../LanguageTextFormat'

const CourseBoxButton = (props) => {
    return (
        <div className="lang-box" id={`lang-box-${props.courseName}`}>
            <i className={`devicon-${props.courseName}-plain`}></i>
            <p><LanguageText language={props.courseName} /></p>
        </div>
    )
}

export default CourseBoxButton;