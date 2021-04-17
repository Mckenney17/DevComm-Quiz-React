import LanguageText from '../LanguageTextFormat'
import './Course-Big-Button.scss'

const CourseBigButton = (props) => {
    return (
        <div class="lang-box" id={`lang-box-${props.courseName}`}>
            <i class={`devicon-${props.courseName}-plain`}></i>
            <LanguageText tag='p' language={props.courseName} />
        </div>
    )
}

export default CourseBigButton;