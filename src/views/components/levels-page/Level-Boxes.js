import CapitalizedText from '../utils/CapitalizedText'

const LevelBoxes = (props) => {
    return (
        <div class="level-box" id={`${props.level}-level-${props.language}`}>
            <div class='comp-div' id={`comp-div-${props.level}`}>
                <div id={`${props.level}-level-${props.language}-completion`}>{props.completion}%</div>
                <svg>
                    <circle cx='30' cy='30' r='25'></circle>
                    <circle cx='30' cy='30' r='25'></circle>
                </svg>
            </div>
            <div class="level-bottom-text">
                <p><CapitalizedText text={props.level} /></p>
                <p id='total-questions-count'>{props.questionCount === 0 ? 'coming soon' : `${props.questionCount.toLocaleString()} question${props.questionCount > 1 ? 's' : ''}`}</p>
            </div>
        </div>
    )
}

export default LevelBoxes