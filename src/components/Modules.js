import React from 'react'
import { formatLangText } from '../utils/quick-funcs'
import QuizEngine from '../utils/quizEngine'

function Modules({ setLocation, language, level }) {
    return (
        <div className='quiz-modules-page' id={`lang-${language}-${level}`}>
            <div className="top">
                <div className='back-page-btn' id="back-to-levels" onClick={() => setLocation('levels')}>Back</div>
                <div className="center-text">
                    <p id='quiz-title'>{formatLangText(language)} Quiz</p>
                    <p id='level'>{formatLangText(level)}</p>
                </div>
                <div></div>
            </div>
            <button id="reset-level-progress">RESET MY PROGRESS</button>
            <div className="modules-section">
                {QuizEngine.getLevelModuleKeys(language, level)
                .map((moduleKey) => {
                    const moduleNumber = moduleKey.slice(moduleKey.indexOf(' ') + 1);
                    const moduleScore = QuizEngine.getModuleScore({ language, level, module: moduleKey })
                    return <div className="module-box" id={`module-${moduleNumber}-box`} key={moduleKey}>
                        <p className='module-num'>{moduleKey}</p>
                        <p className={`module-score score-${moduleScore}`} id={`module-${moduleNumber}-score`}>Score: {moduleScore}%</p>
                        <button className='start-quiz-btn' id={`module-${moduleNumber}-start`}>Start</button>
                    </div>
                })}
                <div className='module-box'></div>
            </div>
        </div>
    )
}

export default Modules