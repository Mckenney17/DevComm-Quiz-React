import LanguageText from '../utils/LanguageTextFormat'

const CourseBoxButton = (props) => {
    const App = props.App;
    return (
        <div onClick={App.setCurrentPage.bind(App, 'levels', { language: props.courseName })} className="lang-box" id={`lang-box-${props.courseName}`}>
            <i className={`devicon-${props.courseName}-plain`}></i>
            <p><LanguageText language={props.courseName} /></p>
        </div>
    )
}

export default CourseBoxButton;