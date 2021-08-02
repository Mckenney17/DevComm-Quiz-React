import React, { useState } from 'react'
import { FaPaintBrush } from 'react-icons/fa';

function Home() {
    const [username, setUsername] = useState(localStorage.getItem?.('username') || 'Dev');
    const [userQuizLanguageChoices, setUserQuizLanguageChoices] = useState(JSON.parse(localStorage.getItem?.('userQuizLanguageChoices')) || []);

    return (
        <div className="home">
            <p id='greet'><span id="greeting">Hi,<span id='handwave'>&#x1f44b;</span></span><br/><span id="dev-name">{username}</span><i id='edit-nickname'><FaPaintBrush /></i></p>
            <p>Choose a Language</p>

            <div className='langs-section'>

                <div title="Add New Language" className="lang-box" id='add-lang-btn'>
                    <span>+</span>
                    <p>Add Language</p>
                </div>
            </div>
        </div>
    )
}

export default Home
