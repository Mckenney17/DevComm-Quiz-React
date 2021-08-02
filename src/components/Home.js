import React, { useState } from 'react'
import { FaPaintBrush } from 'react-icons/fa';
import { formatLangText } from '../utils/quick-funcs';
import QuizLanguagesPanel from './QuizLanguagesPanel';

function Home() {
    const [username, setUsername] = useState(localStorage.getItem?.('username') || 'Dev');
    const [userQuizLanguageChoices, setUserQuizLanguageChoices] = useState(JSON.parse(localStorage.getItem?.('userQuizLanguageChoices')) || ['javascript']);

    const [modalVisible, setModalVisible] = useState(true);

    const handleAddLanguageBtnClick = () => {

    }

    return (
        <div className="home">
            {modalVisible ? <QuizLanguagesPanel /* allQuizLanguages={} */ userQuizLanguageChoices={userQuizLanguageChoices} /> : ''}
            <p id='greet'><span id="greeting">Hi,<span id='handwave'>&#x1f44b;</span></span><br/><span id="dev-name">{username}</span><i id='edit-nickname'><FaPaintBrush /></i></p>
            <p>Choose a Language</p>
            <div className='langs-section'>
                {userQuizLanguageChoices.map((language) =>(
                    <div className="lang-box" key={language} id={`lang-box-${language}`}>
                        <i className={`devicon-${language}-plain`}></i>
                        <p>{formatLangText(language)}</p>
                    </div>
                ))}
                <div title="Add New Language" className="lang-box add-lang-btn" id='add-lang-btn' onClick={handleAddLanguageBtnClick}>
                    <span>+</span>
                    <p>Add Language</p>
                </div>
            </div>
        </div>
    )
}

export default Home
