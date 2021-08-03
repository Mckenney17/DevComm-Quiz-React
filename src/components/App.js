import React, { useEffect, useState } from 'react'
import { FaMusic } from 'react-icons/fa'
import Audio from './Audio'
import Home from './Home'
import Levels from './Levels'
import Modules from './Modules'

function App() {
    const [musicOn, setMusicOn] = useState(false)
    const [location, setLocation] = useState('home')
    const [selectedQuiz, setSelectedQuiz] = useState('')
    const [selectedLevel, setSelectedLevel] = useState('')

    useEffect(() => {
        const audio =  document.getElementById('music')
        musicOn ? audio?.play() : audio?.pause()
    }, [musicOn])

    const handleMusicToggle = (ev) => {
        if (ev.currentTarget.classList.contains('music-on')) {
            setMusicOn(false)
        } else {
            setMusicOn(true)
        }
    }

    return (
        <div id="container" className="container">
            <Audio />
            <i id="sound" onClick={handleMusicToggle} className={musicOn ? 'music-on' : ''}><FaMusic /></i>
            <div id="main-pane">
                {
                    location === 'home'
                    ? <Home setSelectedQuiz={setSelectedQuiz} setLocation={setLocation} /> : location === 'levels'
                    ? <Levels setLocation={setLocation} language={selectedQuiz} setSelectedLevel={setSelectedLevel} /> : location === 'modules'
                    ? <Modules setLocation={setLocation} language={selectedQuiz} level={selectedLevel} /> : null
                }
            </div>
        </div>
    )
}

export default App
