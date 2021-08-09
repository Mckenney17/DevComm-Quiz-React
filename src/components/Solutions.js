import React from 'react'
import { formatLangText } from '../utils/quick-funcs'
import QuizEngine from '../utils/quizEngine'
import getRandomQuote from '../utils/quotes'

function Solutions({ setLocation, language, level, module, solutionsData: { checkedOptions, timeSpent, moduleNumber, totalQuestion, questions } }) {
    const { skipped, correct, incorrect } = Object.values(checkedOptions)
    .reduce((remark, answer, index) => {
        if (!answer.length) remark.skipped++
        else if (answer.toString() === questions[index].correctAnswer.toString()) remark.correct++
        else remark.incorrect++
        return remark
    }, { skipped: 0, correct: 0, incorrect: 0 })
    const { quote, quoteAuthorFirstName, quoteAuthorLastName, quoteAuthorTwitterAddress, quoteAuthorTwitterUsername } = getRandomQuote()
    QuizEngine.setModuleScore({ language, level, module, score: Math.round(correct / totalQuestion * 100) })

    return (
        <div className="quiz-solution-page" id={`lang-${language}-${level}-module-${moduleNumber}-solution`}>
            <div className="top">
                <div className='back-page-btn' id="back-to-modules" onClick={() => setLocation('modules')}>Back</div>
                <div className="center-text">
                    <p id='lang-solution-title'>Solution <span>{formatLangText(language)}</span></p>
                    <p id='level-module'>{formatLangText(level === 'intermediate' ? 'intermed' : level)}: Module {moduleNumber}</p>
                </div>
                <div></div>
            </div>
            <div className="solution-section">
                <div className="filter-div">
                    <div className="filter-options">
                        <span id='all'>All</span>
                        <span id='correct'>Correct</span>
                        <span id='incorrect'>Incorrect</span>
                        <span id='skipped'>Skipped</span>
                    </div>
                </div>
                <div className="overview">
                    <p>Overview</p>
                    <div className="overview-box">
                        <div>
                            <p>Total Question</p>
                            <p id="total-ques">{totalQuestion}</p>
                        </div>
                        <div>
                            <p>Time Spent</p>
                            <p id="time-spent">{timeSpent}</p>
                        </div>
                        <div>
                            <p>Correct</p>
                            <p id="correct-count">{correct}</p>
                        </div>
                        <div>
                            <p>Incorrect</p>
                            <p id="incorrect-count">{incorrect}</p>
                        </div>
                        <div>
                            <p>Skipped</p>
                            <p id="skipped-count">{skipped}</p>
                        </div>
                    </div>
                </div>
                <div className="answer-solutions">
                    
                </div>
                <div className="quote-section">
                    <p>Quote for you</p>
                    <div className="quote-block">
                        <p className='quote'>{quote}</p>
                        <div className="owner-info">
                            <i className='devicon-twitter-plain'></i>
                            <div className='info'>
                                <p className='name'>- <span>{quoteAuthorFirstName}</span> <span>{quoteAuthorLastName}</span></p>
                                <a className="twitter-handle" href={quoteAuthorTwitterAddress}>@{quoteAuthorTwitterUsername}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solutions
