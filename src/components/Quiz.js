import React, { useEffect, useRef, useState } from 'react'
import { FaClock, FaGithub, FaTwitter } from 'react-icons/fa'
import { formatLangText, unpackLink } from '../utils/quick-funcs'
import QuizEngine from '../utils/quizEngine'
import Timer from './Timer'
import hljs from 'highlight.js';
import 'highlight.js/scss/gradient-light.scss';

function Quiz({ setLocation, language, level, module: moduleKey }) {
    const moduleNumber = moduleKey.slice(moduleKey.indexOf(' ') + 1)
    const totalQuestion = QuizEngine.getLevelModuleTotalQuestions({ language, level, module: moduleKey })
    const questions = QuizEngine.getLevelModuleQuestions({ language, level, module: moduleKey });

    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0)
    const [questionsAnsweredCount, setQuestionsAnsweredCount] = useState(0)
    const [staticTime] = useState(new Date())
    const qsRef = useRef(null)

    useEffect(() => {
        for (const codeBlock of document.querySelectorAll('.question-code-block')) {
            hljs.highlightElement(codeBlock)
        }
    }, [])

    useEffect(() => {
        qsRef.current.style.setProperty('--slide', `-${currentQuestionNumber}00%`)
    }, [currentQuestionNumber])

    const handlePrevBtnClick = () => {
        if (currentQuestionNumber < 1) return
        setCurrentQuestionNumber((prevNum) => prevNum - 1)
    }

    const handleNextBtnClick = () => {
        if (currentQuestionNumber === totalQuestion - 1) return
        setCurrentQuestionNumber((prevNum) => prevNum + 1)
    }

    return (
        <div className="quiz-question-page" id={`lang-${language}-${level}-module-${moduleNumber}`}>
            <i id='big-lang-icon' className={`devicon-${language}-plain`}></i>
            <div className="top">
                <div className='back-page-btn' id="back-to-modules" onClick={() => setLocation('modules')}>Back</div>
                <div className="center-text">
                    <p id='level'>{formatLangText(level)}</p>
                    <p id='module'>Module {moduleNumber}</p>
                </div>
                <div></div>
            </div>
            <div className="question-top">
                <div className="progress">
                    <div className="progress-bar">
                        <div className="progress-tracker-bar"></div>
                    </div>
                    <div className="progress-details">
                        <div className="question-number-traker"><span>{currentQuestionNumber + 1}</span><span>|</span><span id="tqs">{totalQuestion}</span></div>
                        <div className="answered-questions-tracker">
                            <span id='ans-count' className='count'>{questionsAnsweredCount}</span>
                            <span>answered </span>
                            <span id="rem-count" className='count'>{totalQuestion}</span>
                            <span>left</span>
                        </div>
                    </div>
                </div>
                <div className="timer">
                    <i><FaClock /></i>
                    <p id="time-elapsed"><Timer staticTime={staticTime} /></p>
                </div>
            </div>
            <div className='question-section-container'>
                <div className="question-section" ref={qsRef}>
                    {questions.map(({ questionStatement, questionType, code }, questionIndex) => {
                    const questionNumber = questionIndex + 1
                    return <div className='question-components-container' id={`question-${questionNumber}-components-container`} key={questionNumber}>
                        <p className={`question-statement-${code ? 'with-code' : 'without-code'}`}>{questionStatement}</p>
                        <div className={`code-block-container ${code ? '' : 'hide'}`}>
                            <pre><code id={`question-${questionNumber}-code-block`} className={`${language} question-code-block`}>{code}</code></pre>
                        </div>
                        <p className='what-to-do'>{questionType === 'single-answer' ? 'Choose the correct answer' : 'Choose all correct answers'}</p>
                    </div>
                    })}
                </div>
            </div>
            <div className="nav-btns">
                <button id="prevq-btn" onClick={handlePrevBtnClick}>PREV</button>
                <button id="nextq-btn" onClick={handleNextBtnClick}>NEXT</button>
            </div>
            <div className="bottom">
                {unpackLink(questions[currentQuestionNumber].githubHandle).valid ?
                <a id="github-handle" href={unpackLink(questions[currentQuestionNumber].githubHandle).linkAddress} target='_blank' rel='noopener noreferrer'>
                    <i><FaGithub /></i>
                    <span>{unpackLink(questions[currentQuestionNumber].githubHandle).linkName}</span>
                </a> : <span></span> }
                 <button id="submit-button">Submit</button>
                {unpackLink(questions[currentQuestionNumber].twitterHandle).valid ?
                <a id="twitter-handle" href={unpackLink(questions[currentQuestionNumber].twitterHandle).linkAddress} target='_blank' rel='noopener noreferrer'>
                    <i><FaTwitter /></i>
                    <span>{unpackLink(questions[currentQuestionNumber].twitterHandle).linkName}</span>
                </a> : <span></span>}
            </div>
        </div>
    )
}

export default Quiz
