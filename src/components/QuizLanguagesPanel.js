import React from 'react'
import QuizEngine from '../utils/quizEngine'

function QuizLanguagesPanel() {
    const allQuizLanguages = QuizEngine.getAllQuizLanguages();
    return (
        <div className="quiz-languages-panel">
            <p>Select Language(s)</p>
            <div className="avail-langs"></div>
            <button className="langs-chosen-save">Save</button>
        </div>
    )
}

export default QuizLanguagesPanel
