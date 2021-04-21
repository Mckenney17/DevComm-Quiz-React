import LanguageText from "../utils/LanguageTextFormat"

const LevelsPage = (props) => {
    return (
        <div className="quiz-levels-page" id={`lang-${props.language}`}>
            <div className="top">
                <div className='back-page-btn' id="back-to-home">Back</div>
                <div className="center-text">
                    <p id='quiz-title'><LanguageText language={props.language} /> Quiz</p>
                    <p>Select Level</p>
                </div>
                <div></div>
            </div>
            <div className="levels-section">
                
            </div>
        </div>
    )
}

export default LevelsPage