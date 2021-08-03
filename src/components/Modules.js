import React from 'react'
import { formatLangText } from '../utils/quick-funcs'

function Modules({ setLocation, language, level }) {
    return (
        <div class='quiz-modules-page' id={`lang-${language}-${level}`}>
            <div class="top">
                <div class='back-page-btn' id="back-to-levels">Back</div>
                <div class="center-text">
                    <p id='quiz-title'>${formatLangText(language)} Quiz</p>
                    <p id='level'>${formatLangText(level)}</p>
                </div>
                <div></div>
            </div>
            <div id="reset-level-progress">RESET MY PROGRESS</div>
            <div class="modules-section">
                
                <div class='module-box'></div>
            </div>
        </div>
    )
}

export default Modules