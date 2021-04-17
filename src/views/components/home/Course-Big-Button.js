import LanguageText from '../LanguageTextFormat'
import '../../../styles/Course-Big-Button.scss'

const CourseBigButton = (props) => {
    return (
        <div className="lang-box" id={`lang-box-${props.courseName}`}>
            <i className={`devicon-${props.courseName}-plain`}></i>
            <LanguageText tag='p' language={props.courseName} />
        </div>
    )
}

export default CourseBigButton;